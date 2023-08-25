'use client';

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { signOut } from 'next-auth/react';

import { Button } from '@ab/core/components';

import { testQueryGraphql } from './testQuery.graphql';

export function Dashboard() {
  const { data } = useSuspenseQuery(testQueryGraphql);

  console.log({ data });

  return (
    <main>
      <div>This is a dashboard: secured</div>
      <Button
        onClick={() => {
          signOut();
        }}
      >
        Logout
      </Button>
    </main>
  );
}
