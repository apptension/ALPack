'use client';

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';

import { testQueryGraphql } from './testQuery.graphql';

export function Dashboard() {
  const { data } = useSuspenseQuery(testQueryGraphql);

  console.log({ data });

  return (
    <main>
      <div>This is a dashboard: secured</div>
    </main>
  );
}
