import { getDashboardLayout } from '@app/components/layouts';
import { NextPageWithLayout } from '@app/pages/_app';

const Dashboard: NextPageWithLayout = () => {
  return <main>Dashboard here</main>;
};

Dashboard.getLayout = getDashboardLayout;

export default Dashboard;
