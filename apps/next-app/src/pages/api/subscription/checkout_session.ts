import { ROUTES } from 'constants/ROUTES';
import { SUBSCRIPTION_PLAN } from 'constants/SUBSCRIPTION_PLAN';
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { plan, email } = req.body;
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price:
              plan === SUBSCRIPTION_PLAN.BASIC
                ? 'price_1N0MCfIqBsaLLecGvKVULmt9'
                : 'price_1N0MDSIqBsaLLecG74B1hm1f',
            quantity: 1,
          },
        ],
        customer_email: email,
        mode: 'subscription',

        success_url: `${req.headers.origin}${ROUTES.SUBSCRIPTION_SUCCESS}?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}${ROUTES.SUBSCRIPTION_CANCEL}?session_id={CHECKOUT_SESSION_ID}`,
      });
      res.status(200).json(session);
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
