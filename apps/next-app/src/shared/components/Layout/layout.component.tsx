import { ROUTES } from 'constants/ROUTES';
import Link from 'next/link';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <header className="flex gap-8 py-8 px-8">
        <Link href={ROUTES.PROFILE} className="text-white">
          Profile
        </Link>
        <Link href={ROUTES.DASHBOARD} className="text-white">
          Dashboard
        </Link>
        <Link href={ROUTES.SUBSCRIPTION} className="text-white">
          Subscription
        </Link>
        <Link href={ROUTES.ANALYTICS} className="text-white">
          Analytics
        </Link>
      </header>
      {children}
    </div>
  );
};
