import { useRouter } from 'next/router';

import { ProjectVersionsView } from '../../components/projectVersionsView';

export default function Version() {
  const router = useRouter();
  return (
    <main className="min-h-screen p-24 bg-slate-900">
      <ProjectVersionsView projectId={router.query.id as string} />

      {/*<div className="text-xl p-2">Sample project</div>*/}
      {/*<div className="grid grid-flow-col justify-stretch">*/}
      {/*  {[1, 2, 3].map((key) => (*/}
      {/*    <div className="bg-white rounded-lg overflow-hidden m-2" key={key}>*/}
      {/*      <div className="p-2">*/}
      {/*        <div className="text-slate-500">Environment name</div>*/}
      {/*        <div className="text-xl font-medium text-slate-950">*/}
      {/*          <div>Env {key}</div>*/}
      {/*        </div>*/}
      {/*        <a href="#" className="text-blue-600">*/}
      {/*          Open environment*/}
      {/*        </a>*/}
      {/*      </div>*/}
      {/*      <div className="p-2">*/}
      {/*        <div className="text-slate-500">Version</div>*/}
      {/*        <div className="text-xl font-medium text-green-800">1.0.{key - 1}</div>*/}
      {/*        <div className="text-slate-400 text-sx">Updated: 6.05.23 16:41:11</div>*/}
      {/*      </div>*/}
      {/*      <div className="bg-gray-100 p-2">*/}
      {/*        <a href="#" className="text-gray-500 font-medium">*/}
      {/*          Show environment history*/}
      {/*        </a>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}

      {/*<div className="grid grid-flow-col justify-stretch">*/}
      {/*  {[1, 2, 3].map((key) => (*/}
      {/*    <div className="bg-white rounded-lg overflow-hidden m-2" key={key}>*/}
      {/*      <div className="p-2">*/}
      {/*        <div className="text-slate-500 font-medium">Environment services</div>*/}
      {/*      </div>*/}
      {/*      {[1, 2, 3].map((key) => (*/}
      {/*        <div className="p-2" key={key}>*/}
      {/*          <div className="text-slate-500 font-medium">Service {key}</div>*/}
      {/*          <div className="text-xl font-medium text-green-800">1.0.{key - 1}</div>*/}
      {/*          <div className="text-slate-400 text-sx">Updated: 6.05.23 16:41:11</div>*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}
    </main>
  );
}
