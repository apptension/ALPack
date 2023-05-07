import { ProjectsList } from '@app/components/dashboard/projectsList/projectsList.component';
import { getDashboardLayout } from '@app/components/layouts';
import { NextPageWithLayout } from '@app/pages/_app';

const Projects: NextPageWithLayout = () => {
  return (
    <main>
      <ProjectsList />
    </main>
  );
};

Projects.getLayout = getDashboardLayout;

export default Projects;
