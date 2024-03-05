import { AppRouterContext, AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export type AppRouterContextProviderMockProps = {
  router: Partial<AppRouterInstance>;
  children: React.ReactNode;
};

const defaultMockedRouter = {
  back: () => null,
  forward: () => null,
  push: () => null,
  replace: () => null,
  refresh: () => null,
  prefetch: () => null,
};

export const AppRouterContextProviderMock = ({ router, children }: AppRouterContextProviderMockProps) => {
  const mockedRouter: AppRouterInstance = {
    ...defaultMockedRouter,
    ...router,
  };
  return <AppRouterContext.Provider value={mockedRouter}>{children}</AppRouterContext.Provider>;
};
