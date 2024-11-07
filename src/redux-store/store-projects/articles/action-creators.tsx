import { ArticlesStoreType } from "../../../models";
import { addArticles, removeArticles } from "./action-types";

export const AddArticlesAction = (
  data: ArticlesStoreType
): { type: string; payload: ArticlesStoreType } => {
  return { type: addArticles, payload: data };
};

export const RemoveArticlesAction = (
  id: number
): { type: string; payload: number } => {
  return { type: removeArticles, payload: id };
};
