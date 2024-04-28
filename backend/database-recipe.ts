export type DBRecipe = {
  userName: string;
  id: string;
  title: string;
};

export function getRecipeTable() {
  const tableName = process.env["RECIPE_TABLE"];
  if (!tableName) {
    throw new Error("RECIPE_TABLE not found");
  }
  return tableName;
}
