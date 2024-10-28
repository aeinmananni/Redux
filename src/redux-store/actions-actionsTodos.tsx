export const ADD_TEXT = "ADD_TEXT";
export const SET_INPUT_VALUE = "SET_INPUT_VALUE";
export const ADD_TODOS = "ADD_TODOS";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const ERROR_MESSAGE = "ERROR_MESSAGE";
export const DELETE_TEXT = "DELETE_TEXT";

export const addToText = (text: string) => ({ type: ADD_TEXT, payload: text });
export const addToDos = (text: string) => ({ type: ADD_TODOS, payload: text });
export const setInputValue = (value: string) => ({
  type: SET_INPUT_VALUE,
  payload: value,
});
export const setError = (error: string) => ({
  type: ERROR_MESSAGE,
  payload: error,
});
export const toggleModal = () => ({ type: TOGGLE_MODAL });
export const deleteText = (text: string) => ({
  type: DELETE_TEXT,
  payload: text,
});
