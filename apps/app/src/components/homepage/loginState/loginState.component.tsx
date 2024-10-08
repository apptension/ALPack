'use client';

import { Avatar, Button, Flex, Skeleton } from '@mantine/core';
import { signIn, useSession } from 'next-auth/react';

import { Link } from '@alp/core/components';

export const LoginState = () => {
  const { data: session, status } = useSession();
  if (status === 'loading') {
    return (
      <Flex gap="xs" align="center">
        <Skeleton height={30} circle />
        <Skeleton height={10} mt={3} width={50} radius="xl" />
      </Flex>
    );
  }

  const renderUnauthorized = () => (
    <Button variant="light" onClick={() => signIn()}>
      Sign in
    </Button>
  );

  const renderAuthorized = () => (
    <Flex gap="xs" align="center">
      <Avatar color="cyan" radius="xl">
        {session?.user?.name?.slice(0, 2)}
      </Avatar>
      <Link href="/app" variant="light">
        Go to app
      </Link>
    </Flex>
  );

  return session ? renderAuthorized() : renderUnauthorized();
};
