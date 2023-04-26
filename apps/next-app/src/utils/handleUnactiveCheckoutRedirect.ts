import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { EDGE_FUNCTION_NAMES } from 'constants/EDGE_FUNCTION_NAMES';
import { ROUTES } from 'constants/ROUTES';
import { GetServerSidePropsContext } from 'next';

export const handleUnactiveCheckoutRedirect = async (
  ctx: GetServerSidePropsContext
) => {
  try {
    const sessionId = ctx.query.session_id as string;
    const supabase = createServerSupabaseClient(ctx);

    const { error } = await supabase.functions.invoke(
      `${EDGE_FUNCTION_NAMES.RETRIEVE_CHECKOUT_SESSION}?session_id=${sessionId}`
    );

    if (error) {
      return {
        redirect: {
          destination: ROUTES.HOME,
        },
      };
    }

    return { props: {} };
  } catch (err) {
    return {
      redirect: {
        destination: ROUTES.HOME,
      },
    };
  }
};
