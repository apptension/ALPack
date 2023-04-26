import { SUBSCRIPTION_PLAN } from 'constants/SUBSCRIPTION_PLAN';
import { Button } from 'shared/components/Button';
import { Checkmark } from 'shared/components/Checkmark';
import { Crossmark } from 'shared/components/Crossmark';
import { BASIC_FEATURES, FEATURES } from './subscriptionCard.constants';

interface ProCardProps {
  type: SUBSCRIPTION_PLAN;
  name: string;
  price: number;
  currency: string;
  handleClick: () => Promise<void>;
}

export const SubscriptionCard = ({
  type,
  name,
  price,
  currency,
  handleClick,
}: ProCardProps) => {
  return (
    <div className="relative max-w-lg w-full rounded bg-neutral-800 py-8 px-8 shadow-lg">
      {type === SUBSCRIPTION_PLAN.PRO && (
        <div className="absolute -top-12 rounded-t-lg py-3 px-3 bg-indigo-500 w-full left-0 text-center text-lg uppercase">
          Recommended
        </div>
      )}
      <h2 className="text-4xl text-center mb-2">{name}</h2>
      <p className="text-slate-400 mb-8 text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit!
      </p>
      <div className="flex flex-col justify-center items-center gap-2 mb-6">
        <span className="text-5xl text-center">
          {currency} {price}
        </span>
        <span className="text-slate-400">/ per month</span>
      </div>

      <ul className="max-w-md mb-12 space-y-1 text-gray-500 flex flex-col gap-3 list-inside dark:text-gray-400">
        {type === SUBSCRIPTION_PLAN.BASIC
          ? FEATURES.map((feature) => (
              <li key={`basic-${feature}`} className="flex items-center">
                {BASIC_FEATURES.includes(feature) ? (
                  <Checkmark />
                ) : (
                  <Crossmark />
                )}
                {feature}
              </li>
            ))
          : type === SUBSCRIPTION_PLAN.PRO &&
            FEATURES.map((feature) => (
              <li key={`pro-${feature}`} className="flex items-center">
                <Checkmark />
                {feature}
              </li>
            ))}
      </ul>

      <Button onClick={handleClick}>Choose {name}</Button>
    </div>
  );
};
