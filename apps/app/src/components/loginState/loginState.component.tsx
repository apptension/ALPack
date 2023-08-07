'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export const LoginState = () => {
  const { data: session, status } = useSession();
  if (status === 'loading') {
    return <span>Loading...</span>;
  }
  return (
    <>
      Is user logged in: {session ? session.user?.email : 'FALSE'}{' '}
      <button onClick={() => (session ? signOut() : signIn())}>{session ? 'Sign Out' : 'Sign In'}</button>
    </>
  );
};
