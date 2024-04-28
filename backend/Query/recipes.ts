import { QueryCommand } from "@aws-sdk/lib-dynamodb";
import { docClient } from "../document-client";
import type { QueryResolvers } from "./../types.generated";
import { DBRecipe, getRecipeTable } from "../database-recipe";
export const recipes: NonNullable<QueryResolvers["recipes"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  const response = await docClient.send(
    new QueryCommand({
      TableName: getRecipeTable(),
      KeyConditionExpression: "userName = :userName",
      ExpressionAttributeValues: {
        ":userName": "unknown",
      },
    })
  );

  return (response.Items ?? []) as DBRecipe[];
};
