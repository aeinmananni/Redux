import { ChangeEvent, useRef } from "react";
import Button from "../../UI/button";
import Input from "../../UI/input";
import { useClickAway } from "react-use";
import { useSelector, useDispatch } from "react-redux";
import {
  addToDos,
  toggleModal,
  setInputValue,
  setError,
} from "../../redux-store/actions-actionsTodos";
import { TodoState } from "../../redux-store/redux-redusers/todos-reducers/todos-reducers";
import SelectComponent from "./select-component";
import Modal from "./modal";
import ToDosAddComponent from "./todos-add-components";
const TodoList = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dispatch = useDispatch();
  const showModal = useSelector(
    (state: { todos: TodoState }) => state.todos.infoObjects.showModal
  );
  const text = useSelector(
    (state: { todos: TodoState }) => state.todos.infoObjects.text
  );

  const inputValues = useSelector(
    (state: { todos: TodoState }) => state.todos.infoObjects.inputValues
  );

  const inputValue = useSelector(
    (state: { todos: TodoState }) => state.todos.infoObjects.inputValue
  );

  const error = useSelector(
    (state: { todos: TodoState }) => state.todos.infoObjects.error
  );
  useClickAway(divRef, (e) => {
    if (buttonRef.current && !buttonRef.current?.contains(e.target as Node)) {
      dispatch(toggleModal());
    }
  });

  return (
    <div className="flex flex-col bg-violet-700 h-full items-center p-2 gap-7">
      <h1 className="text-3xl text-white">To Do List Project</h1>
      <div className="flex gap-6 justify-center items-center w-full relative">
        <Input
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.value !== "") {
              dispatch(setError(""));
            } else {
              dispatch(setError("Is Not Input empty !"));
            }
            dispatch(setInputValue(e.target.value));
          }}
          errorMessage={error && error}
          className="px-3 py-3 rounded-full outline-none focus:ring-2 focus:ring-yellow-400 ring-offset-2"
        />
        <Button
          onClick={() => {
            if (inputValue !== "") {
              dispatch(addToDos(inputValue));
              dispatch(setError(""));
              dispatch(setInputValue(""));
            } else {
              dispatch(setError("Is Not Input empty !"));
            }
          }}
          text="+"
          className="bg-white w-10 h-10 rounded-lg outline-none ring-4 ring-yellow-400 ring-offset-4"
        />

        <SelectComponent text={text} ref={buttonRef} />
        {showModal && <Modal ref={divRef} />}
      </div>
      {inputValues.map((text, index) => (
        <ToDosAddComponent key={index} text={text} />
      ))}
    </div>
  );
};

export default TodoList;
