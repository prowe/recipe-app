import type { CodegenConfig } from "@graphql-codegen/cli";
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files'

const config: CodegenConfig = {
  schema: "./schema.graphql",
  generates: {
    ".": defineConfig({
        mode: 'merged',
        scalarsModule: false,
        typesPluginsConfig: {
            contextType: './context#Context',
          }
    }),
  },
};
export default config;
