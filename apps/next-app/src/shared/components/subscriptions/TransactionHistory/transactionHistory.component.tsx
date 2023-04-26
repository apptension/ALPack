import { format, fromUnixTime } from 'date-fns';
import { Checkmark } from 'shared/components/Checkmark';
import { Crossmark } from 'shared/components/Crossmark';
import { getSubscriptionPrice } from 'utils/getSubscriptionPrice';

interface TransactionHistoryProps {
  transactions: any;
}

export const TransactionHistory = ({
  transactions,
}: TransactionHistoryProps) => {
  return (
    <div className="max-w-xl w-full">
      <h2 className="mt-8 text-2xl">Transaction history</h2>
      <div className="flex flex-col">
        {transactions.charges.data.map(
          ({ id, created, description, amount, currency, status }: any) => (
            <div
              key={id}
              className="flex justify-between w-full border-b-2 border-slate-800 py-6"
            >
              <div>
                {description}{' '}
                <span className="text-slate-400">
                  ({format(fromUnixTime(created), 'Pp')})
                </span>
              </div>
              <div>
                {getSubscriptionPrice(amount)} {currency.toUpperCase()}
              </div>
              {status === 'succeeded' ? <Checkmark /> : <Crossmark isError />}
            </div>
          )
        )}
      </div>
    </div>
  );
};
