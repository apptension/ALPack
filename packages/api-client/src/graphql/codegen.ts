import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  generates: {
    'src/__generated/gql/': {
      schema: {
        './src/graphql/schema/api.graphql': {
          loader: './src/graphql/schema/loader.js',
        },
      },
      documents: ['../../apps/app/src/**/*.ts', '../../apps/app/src/**/*.tsx', '!./src/__generated/*'],

      config: {
        declarationKind: 'interface',
        maybeValue: 'T | undefined | null',
        namingConvention: {
          enumValues: 'change-case#upperCase',
        },
      },

      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
        fragmentMasking: { unmaskFunctionName: 'getFragmentData' },
      },
    },
  },
};

export default config;
