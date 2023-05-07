import { Inter } from 'next/font/google';
import { PropsWithChildren, ReactNode } from 'react';

import { Navigation } from '@app/components/dashboard/navigation';

const inter = Inter({ subsets: ['latin'] });

export const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={`flex flex-row min-h-screen ${inter.className}`}>
      <div className="basis-60 bg-indigo-800 flex">
        <Navigation />
      </div>
      <div className="grow flex flex-col bg-white dark:bg-slate-900">
        <header className="bg-white shadow dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"></div>
        </header>
        <div className="grow overflow-auto bg-white dark:bg-gray-700">{children}</div>
      </div>
    </div>
  );
};

export const getDashboardLayout = (page: ReactNode) => <DashboardLayout>{page}</DashboardLayout>;
