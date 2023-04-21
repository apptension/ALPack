import { Button } from 'shared/components/Button';
import { useLogin } from './useLogin.hook';

const Login = () => {
  const { handleLogin } = useLogin();

  return (
    <div className="flex min-h-screen flex-col  justify-center p-24 max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-5xl font-bold mb-2 text-left">Hello! 👋</h1>
        <span className="text-xl text-slate-300 font-">
          To access the app please log in with Google
        </span>
      </div>

      <Button onClick={handleLogin}>Sign In With Google</Button>
    </div>
  );
};

export default Login;
