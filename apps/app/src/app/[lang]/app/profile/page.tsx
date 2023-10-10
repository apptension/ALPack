'use client';

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';

import { PageHeadline, PageLayout } from '@alp/core/components';

import { userProfileQuery } from './profile.graphql';
import { UpdateProfile } from './updateProfile';

export default function Page() {
  const { data } = useSuspenseQuery(userProfileQuery);

  return (
    <PageLayout>
      <PageHeadline header="Your profile" />
      <UpdateProfile initialState={data.me} />
    </PageLayout>
  );
}
