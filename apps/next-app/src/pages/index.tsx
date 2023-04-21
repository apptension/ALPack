import { ROUTES } from 'constants/ROUTES';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl">Hello World!</h1>
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
          Go to Profile
        </Link>
      </div>
    </div>
  );
}
