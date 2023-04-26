import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { EDGE_FUNCTION_NAMES } from 'constants/EDGE_FUNCTION_NAMES';
import { SUBSCRIPTION_PLAN } from 'constants/SUBSCRIPTION_PLAN';
import { GetServerSidePropsContext } from 'next';
import { SubscriptionCard } from 'shared/components/subscriptions/SubscriptionCard';
import { getStripe } from 'utils/getStripe';
import { getSubscriptionPrice } from 'utils/getSubscriptionPrice';

interface SubscriptionProps {
  plans: any[];
}

const Subscription = ({ plans }: SubscriptionProps) => {
  const supabase = useSupabaseClient();

  const handleBuyPlan = async (plan: string) => {
    try {
      const { data } = await supabase.functions.invoke(
        EDGE_FUNCTION_NAMES.CHECKOUT_SESSION,
        {
          body: { plan },
        }
      );
      const stripe = await getStripe();
      await stripe?.redirectToCheckout({ sessionId: data.session.id });
    } catch (err) {}
  };

  const basicPlan = plans.find(
    ({ metadata }) => metadata.type === SUBSCRIPTION_PLAN.BASIC
  );
  const proPlan = plans.find(
    ({ metadata }) => metadata.type === SUBSCRIPTION_PLAN.PRO
  );

  return (
    <div className="flex min-h-screen gap-20 flex-col items-center justify-center p-24">
      <h1 className="mb-8 text-5xl font-bold">App Boilerplate Subscription</h1>
      <div className="flex gap-16">
        <SubscriptionCard
          type={basicPlan.metadata.type}
          name={basicPlan.metadata.name}
          price={basicPlan.amount}
          currency={basicPlan.currency.toUpperCase()}
          handleClick={() => handleBuyPlan(basicPlan.id)}
        />
        <SubscriptionCard
          type={proPlan.metadata.type}
          name={proPlan.metadata.name}
          price={proPlan.amount}
          currency={proPlan.currency.toUpperCase()}
          handleClick={() => handleBuyPlan(proPlan.id)}
        />
      </div>
    </div>
  );
};

export default Subscription;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const supabase = createServerSupabaseClient(ctx);

  const { data } = await supabase.functions.invoke(
    EDGE_FUNCTION_NAMES.GET_SUBSCRIPTION_PLANS
  );

  const plans = data.plans.data.map((plan: any) => ({
    ...plan,
    amount: getSubscriptionPrice(plan.amount),
  }));
  return { props: { plans } };
};
