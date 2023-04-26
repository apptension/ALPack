import { serve } from 'std/server';
import Stripe from 'stripe';
import { stripe } from '../_shared/stripe.ts';
import { getSupabaseServiceClient } from '../_shared/supabaseClient.ts';

const supabase = getSupabaseServiceClient();
// This is needed in order to use the Web Crypto API in Deno.
const cryptoProvider = Stripe.createSubtleCryptoProvider();

serve(async (req: Request) => {
  const signature = req.headers.get('Stripe-Signature');

  // First step is to verify the event. The .text() method must be used as the
  // verification relies on the raw req body rather than the parsed JSON.
  const body = await req.text();
  let receivedEvent;
  try {
    receivedEvent = await stripe.webhooks.constructEventAsync(
      body,
      signature!,
      Deno.env.get('STRIPE_WEBHOOK_SIGNING_SECRET')!,
      undefined,
      cryptoProvider
    );
  } catch (err) {
    return new Response(err.message, { status: 400 });
  }

  const requestOptions =
    receivedEvent.request && receivedEvent.request.idempotency_key
      ? { idempotencyKey: receivedEvent.request.idempotency_key }
      : {};

  let retrievedEvent;
  try {
    retrievedEvent = await stripe.events.retrieve(
      receivedEvent.id,
      requestOptions
    );
  } catch (err) {
    return new Response(err.message, { status: 400 });
  }

  const subscription = retrievedEvent.data.object;

  const updateUserSubscription = async (plan: string | null) => {
    await supabase
      .from('profiles')
      .update({
        subscription: plan,
      })
      .match({ stripe_customer_id: subscription.customer });
  };

  if (retrievedEvent) {
    switch (retrievedEvent.type) {
      case 'customer.subscription.updated':
        await updateUserSubscription(
          subscription.items.data[0].plan.metadata.type
        );
        break;
      case 'customer.subscription.deleted':
        await updateUserSubscription(null);
        break;
      default:
    }
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
});
