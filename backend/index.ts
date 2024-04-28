import { ApolloServer, BaseContext } from "@apollo/server";

import {
  startServerAndCreateLambdaHandler,
  handlers,
} from "@as-integrations/aws-lambda";
import { typeDefs } from "./typeDefs.generated";
import { resolvers } from "./resolvers.generated";

const server = new ApolloServer<BaseContext>({
  typeDefs,
  resolvers,
  csrfPrevention: false,
});

// This final export is important!

export const graphqlHandler = startServerAndCreateLambdaHandler(
  server,
  // We will be using the Proxy V2 handler
  handlers.createAPIGatewayProxyEventV2RequestHandler()
);
