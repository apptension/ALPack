import { serve } from 'std/server';
import { corsHeaders } from '../_shared/cors.ts';
import { stripe } from '../_shared/stripe.ts';
import { getSupabaseAuthClient } from '../_shared/supabaseClient.ts';

serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  const { plan } = await req.json();
  try {
    const supabaseClient = getSupabaseAuthClient(req);

    const {
      data: { user },
    } = await supabaseClient.auth.getUser();

    const { data } = await supabaseClient
      .from('profiles')
      .select('stripe_customer_id')
      .match({ id: user?.id })
      .single();

    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: plan, quantity: 1 }],
      customer: data?.stripe_customer_id,
      mode: 'subscription',
      success_url: `${Deno.env.get(
        'WEBAPP_CHECKOUT_SUCCESS_URL'
      )}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${Deno.env.get(
        'WEBAPP_CHECKOUT_CANCEL_URL'
      )}?session_id={CHECKOUT_SESSION_ID}`,
    });

    return new Response(JSON.stringify({ session }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    });
  }
});
