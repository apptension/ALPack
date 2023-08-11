import { Button } from '@ab/core/components';

import { LoginState } from '@app/components';

export function Home() {
  return (
    <main>
      <div>
        <p>
          <LoginState />
        </p>
      </div>
      <Button>Sample button</Button>
    </main>
  );
}
