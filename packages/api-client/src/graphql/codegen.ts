import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  generates: {
    '__generated/gql/': {
      schema: {
        './graphql/schema/api.graphql': {
          loader: './graphql/schema/loader.js',
        },
      },
      documents: ['../../apps/app/src/**/*.ts', '../../apps/app/src/**/*.tsx', '!./__generated/*'],

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
