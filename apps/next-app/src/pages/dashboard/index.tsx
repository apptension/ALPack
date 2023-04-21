import { Button } from 'shared/components/Button';
import { useDashboard } from './useDashboard.hook';

const Dasboard = () => {
  const { handleLogout } = useDashboard();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl mb-8">Dashboard</h1>
      <Button className="w-36" onClick={handleLogout}>
        Log Out
      </Button>
    </div>
  );
};

export default Dasboard;
