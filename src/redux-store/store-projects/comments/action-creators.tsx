import { addComments, removeComment } from "./action-types";
import { CommentsStoreType } from "../../../models";

export const addCommentsAction = (
  data: CommentsStoreType
): { type: string; payload: CommentsStoreType } => {
  return { type: addComments, payload: data };
};

export const removeCommentsAction = (
  id: number
): { type: string; payload: number } => {
  return { type: removeComment, payload: id };
};
