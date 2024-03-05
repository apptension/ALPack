import { SetupExecutorSchema } from './schema';
import executor from './executor';
import type { ExecutorContext } from '@nx/devkit';

const options: SetupExecutorSchema = {
  cwd: '',
};

const context: ExecutorContext = {
  root: process.cwd(),
  cwd: '',
  isVerbose: false,
};

describe('Setup Executor', () => {
  it('can run', async () => {
    const output = await executor(options, context);
    expect(output.success).toBe(true);
  });
});
