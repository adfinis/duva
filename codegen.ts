import type { CodegenConfig } from '@graphql-codegen/cli';
import { GRAPHQL_URL } from './src/config';

const config: CodegenConfig = {
  schema: GRAPHQL_URL,
  documents: ['./src/gql/*.graphql'],
  generates: {
    './src/gql/__generated__/': {
      preset: 'client',
      config: {
        useTypeImports: true,
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
