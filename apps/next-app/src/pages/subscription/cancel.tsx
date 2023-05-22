import { ROUTES } from 'constants/ROUTES';
import CrossmarkSVG from 'assets/cross-mark.svg';
import Link from 'next/link';
import { GetServerSidePropsContext } from 'next';
import { handleUnactiveCheckoutRedirect } from 'utils/handleUnactiveCheckoutRedirect';

const Cancel = () => {
  return (
    <div className="flex min-h-screen gap-8 flex-col items-center justify-center p-24">
      <div className="flex flex-col gap-4 items-center">
        <CrossmarkSVG className="w-24 h-24 text-red-500 drop-shadow-[0_10px_30px_#ef4444] rounded-full" />
        <h1 className="mb-2 text-5xl font-bold ">
          We see that you changed your mind
        </h1>
        <p className="text-lg text-slate-400 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis,
          delectus aperiam. Sapiente vero distinctio magni, natus obcaecati,
          esse perspiciatis voluptatem ipsa, illum earum culpa neque!
        </p>
      </div>
      <div className="flex gap-6 mt-8">
        <Link
          href={ROUTES.SUBSCRIPTION}
          className="w-52 border-solid border-2 border-indigo-500 rounded-md py-3 px-3 text-center"
        >
          Go back to Subscriptions
        </Link>
        <Link
          href={ROUTES.HOME}
          className="w-52 border-solid border-2 border-indigo-500 rounded-md py-3 px-3 text-center"
        >
          Go to Home page
        </Link>
      </div>
    </div>
  );
};

export default Cancel;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return handleUnactiveCheckoutRedirect(ctx);
};
