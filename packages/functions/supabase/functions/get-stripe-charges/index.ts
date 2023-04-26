import { serve } from "std/server";
import { corsHeaders } from "../_shared/cors.ts";
import { stripe } from "../_shared/stripe.ts";
import { getSupabaseAuthClient } from "../_shared/supabaseClient.ts";

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseClient = getSupabaseAuthClient(req);

    const {
      data: { user },
    } = await supabaseClient.auth.getUser();

    const { data } = await supabaseClient
      .from("profiles")
      .select("stripe_customer_id")
      .match({ id: user?.id })
      .single();

    const charges = await stripe.charges.list({
      customer: data?.stripe_customer_id,
    });

    return new Response(JSON.stringify({ charges }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});
