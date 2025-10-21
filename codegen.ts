import type { CodegenConfig } from '@graphql-codegen/cli';
import { BASE_URL } from './src/config';

const config: CodegenConfig = {
  schema: BASE_URL,
  documents: ['./src/**/*.{graphql,tsx,ts}'],
  generates: {
    './src/graphql/__generated__/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
    './src/graphql/__generated__/types.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
