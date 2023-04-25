import { useUser } from '@supabase/auth-helpers-react';
import { SUBSCRIPTION_PLAN } from 'constants/SUBSCRIPTION_PLAN';
import { SubscriptionCard } from 'shared/components/subscriptions/SubscriptionCard';
import { axiosApi } from 'shared/services/axios';
import { getStripe } from 'utils/getStripe';
import { getSubscriptionPrice } from 'utils/getSubscriptionPrice';

interface SubscriptionProps {
  plans: any[];
}

const Subscription = ({ plans }: SubscriptionProps) => {
  const user = useUser();

  const handleBasicPlan = async () => {
    try {
      const { data } = await axiosApi.post('/subscription/checkout_session', {
        plan: SUBSCRIPTION_PLAN.BASIC,
        email: user?.email,
      });
      const stripe = await getStripe();
      await stripe?.redirectToCheckout({ sessionId: data.id });
    } catch (err) {}
  };

  const handleProPlan = async () => {
    try {
      const { data } = await axiosApi.post('/subscription/checkout_session', {
        plan: SUBSCRIPTION_PLAN.PRO,
        email: user?.email,
      });
      const stripe = await getStripe();
      await stripe?.redirectToCheckout({ sessionId: data.id });
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
          handleClick={handleBasicPlan}
        />
        <SubscriptionCard
          type={proPlan.metadata.type}
          name={proPlan.metadata.name}
          price={proPlan.amount}
          currency={proPlan.currency.toUpperCase()}
          handleClick={handleProPlan}
        />
      </div>
    </div>
  );
};

export default Subscription;

export const getServerSideProps = async () => {
  const { data } = await axiosApi.get('/subscription/get_plans');

  const plans = data.plans.data.map((plan: any) => ({
    ...plan,
    amount: getSubscriptionPrice(plan.amount),
  }));
  return { props: { plans } };
};
