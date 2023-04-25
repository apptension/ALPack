import { ROUTES } from 'constants/ROUTES';
import CheckmarkSVG from 'assets/check-mark.svg';
import Link from 'next/link';
import { axiosApi } from 'shared/services/axios';
import { GetServerSidePropsContext } from 'next';

const Success = () => {
  return (
    <div className="flex min-h-screen gap-8 flex-col items-center justify-center p-24">
      <div className="flex flex-col gap-4 items-center">
        <CheckmarkSVG className="w-24 h-24 text-indigo-500 drop-shadow-[0_10px_30px_#6366f1] rounded-full" />
        <h1 className="mb-2 text-5xl font-bold ">Payment successful!</h1>
        <p className="text-lg text-slate-400 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis,
          delectus aperiam. Sapiente vero distinctio magni, natus obcaecati,
          esse perspiciatis voluptatem ipsa, illum earum culpa neque!
        </p>
      </div>
      <div className="flex gap-6 mt-8">
        <Link
          href={ROUTES.DASHBOARD}
          className="w-52 border-solid border-2 border-indigo-500 rounded-md py-3 px-3 text-center"
        >
          Go to Dashboard
        </Link>
        <Link
          href={ROUTES.PROFILE}
          className="w-52 border-solid border-2 border-indigo-500 rounded-md py-3 px-3 text-center"
        >
          Go to your Profile
        </Link>
      </div>
    </div>
  );
};

export default Success;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const { session_id } = ctx.query;
    await axiosApi.get(
      `/subscription/retrieve_session?session_id=${session_id}`
    );
    return { props: {} };
  } catch (err) {
    return {
      redirect: {
        destination: ROUTES.HOME,
      },
    };
  }
};
