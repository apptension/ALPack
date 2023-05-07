import { NewProjectForm } from '@app/components/dashboard/forms';
import { getDashboardLayout } from '@app/components/layouts';
import { NextPageWithLayout } from '@app/pages/_app';

const Projects: NextPageWithLayout = () => {
  return (
    <main>
      <NewProjectForm />
    </main>
  );
};

Projects.getLayout = getDashboardLayout;

export default Projects;
