import { CodegenConfig } from '@graphql-codegen/cli';
import { loadEnvConfig } from '@next/env';

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const config: CodegenConfig = {
  schema: [
    // TODO: NEEDS REPLACING
    {
      [`${process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_URL}`]: {
        headers: {
          apikey: `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        },
      },
    },
  ],
  documents: ['src/**/*.tsx'],
  generates: {
    './src/graphql/__generated/gql/': {
      documents: ['src/**/*.graphql.ts', 'src/**/*.ts', 'src/**/*.tsx'],
      preset: 'client',
      plugins: [],
    },
  },
  ignoreNoDocuments: true,
};

export default config;
