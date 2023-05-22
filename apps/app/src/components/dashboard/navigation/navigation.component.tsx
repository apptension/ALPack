import Link from 'next/link';

export const Navigation = () => {
  return (
    <div className="flex flex-col flex-auto">
      <div className="grow p-4 px-2">
        <div className="grid gap-y-1">
          <Link href="/dashboard" className="p-2 rounded-lg hover:bg-indigo-900">
            Dashboard
          </Link>
          <Link href="/projects" className="p-2 rounded-lg hover:bg-indigo-900">
            Projects
          </Link>
        </div>
      </div>
      <div className="flex-none justify-self-end p-4">
        <a href="#">Logout</a>
      </div>
    </div>
  );
};
