import {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: '../backend/schema.graphql',
  documents: ['**/*.graphql'],
  generates: {
    './gql/': {
      preset: 'client',
    },
  },
};

export default config;
