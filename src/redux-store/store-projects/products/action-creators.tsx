import { addProducts, removeProducs } from "./action-types";

export const addProductsAction = <T,>(
  data: T
): { type: string; payload: T } => {
  return { type: addProducts, payload: data };
};

export const removeProductAction = <T,>(
  data: T
): { type: string; payload: T } => {
  return { type: removeProducs, payload: data };
};
