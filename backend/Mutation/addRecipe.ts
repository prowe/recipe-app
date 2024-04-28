import type { MutationResolvers } from "./../types.generated";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { randomUUID } from "node:crypto";
import { DBRecipe, getRecipeTable } from "../database-recipe";
import { docClient } from "../document-client";

export const addRecipe: NonNullable<MutationResolvers["addRecipe"]> = async (
  _parent,
  { title },
  _ctx
) => {
  const recipe: DBRecipe = {
    userName: "unknown",
    id: randomUUID(),
    title,
  };

  await docClient.send(
    new PutCommand({
      TableName: getRecipeTable(),
      Item: recipe,
    })
  );
  return recipe;
};
