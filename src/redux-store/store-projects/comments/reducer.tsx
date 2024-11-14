import { addComments, removeComment } from "./action-types";
import { CommentsStoreType } from "../../../models";

type Action<T> = {
  type: string;
  payload: T;
};

const initailState: CommentsStoreType[] = [];

export default function ReducerComments(
  state = initailState,
  actions: Action<CommentsStoreType | number>
) {
  switch (actions.type) {
    case addComments: {
      return [...state, actions.payload as CommentsStoreType];
    }
    case removeComment: {
      return [...state].filter(
        (item) => item.id !== (actions.payload as number)
      );
    }
    default:
      return state;
  }
}
