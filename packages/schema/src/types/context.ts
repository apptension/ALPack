import { Session } from 'next-auth';
import { NextRequest } from 'next/server';

export type ApiContextType = {
  req: NextRequest;
  authSession: Session | undefined;
};
