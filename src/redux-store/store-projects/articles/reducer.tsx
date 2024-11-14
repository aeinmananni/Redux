import { addArticles, removeArticles } from "./action-types";
import { ArticlesStoreType } from "../../../models";

type Action<T> = {
  type: string;
  payload: T;
};

const initialState: ArticlesStoreType[] = [];

export default function ReducerArticles(
  state = initialState,
  actions: Action<ArticlesStoreType | number>
) {
  switch (actions.type) {
    case addArticles: {
      return [...state, actions.payload as ArticlesStoreType];
    }
    case removeArticles: {
      return [...state].filter(
        (item) => item.id !== (actions.payload as number)
      );
    }
    default:
      return state;
  }
}
