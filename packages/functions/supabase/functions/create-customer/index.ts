import { serve } from 'std/server';
import { stripe } from '../_shared/stripe.ts';
import { getSupabaseClient } from '../_shared/supabaseClient.ts';

const supabaseClient = getSupabaseClient();

serve(async (req: Request) => {
  const {
    record: { email, id },
  } = await req.json();
  try {
    const customer = await stripe.customers.create({
      email,
      metadata: { supabase_id: id },
    });

    await supabaseClient
      .from('profiles')
      .update({
        stripe_customer_id: customer.id,
      })
      .match({ id });

    return new Response(JSON.stringify({ customerId: customer.id }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 400,
    });
  }
});
