import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { ROUTES } from 'constants/ROUTES';
import { NextRequest, NextResponse } from 'next/server';
import { GET_PROFILE } from 'shared/queries/index.graphql';
import { getApolloServerClient } from 'shared/services/apollo';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareSupabaseClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    if (req.nextUrl.pathname.startsWith(ROUTES.ANALYTICS)) {
      const client = getApolloServerClient(session.access_token);

      const { data } = await client.query({
        query: GET_PROFILE,
        variables: { profileId: session.user.id },
      });
      if (!data.profilesCollection?.edges[0].node.subscription) {
        const redirectUrl = req.nextUrl.clone();
        redirectUrl.pathname = ROUTES.SUBSCRIPTION;
        return NextResponse.redirect(redirectUrl);
      }
    }
    return res;
  }

  // Auth condition not met, redirect to home page.
  const redirectUrl = req.nextUrl.clone();
  redirectUrl.pathname = '/auth/login';
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ['/dashboard', '/profile', '/subscription', '/analytics'],
};
