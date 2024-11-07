import { addProducts, removeProducs } from "./action-types";
import { ProductStoreType } from "../../../models";

type Action<T> = {
  type: string;
  payload: T;
};

export default function ReducerProducts(
  state: ProductStoreType[],
  actions: Action<ProductStoreType | number>
) {
  switch (actions.type) {
    case addProducts: {
      return [...state, actions.payload as ProductStoreType];
    }
    case removeProducs: {
      return [...state].filter(
        (item) => item.id !== (actions.payload as number)
      );
    }
    default:
      return state;
  }
}
