import { useRef, useState } from "react";
import Button from "../UI/button";
import Input from "../UI/input";
import { AiFillCaretDown } from "react-icons/ai";
import { useClickAway } from "react-use";

const TodoList = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [infoObjects, setInfoObjects] = useState<{
    text: string;
    showModal: boolean;
    state: [];
  }>({
    text: "All",
    showModal: false,
    state: [],
  });
  useClickAway(divRef, (e) => {
    if (buttonRef.current && !buttonRef.current?.contains(e.target as Node)) {
      setInfoObjects((prev) => ({ ...prev, showModal: false }));
    }
  });
  return (
    <div className="flex flex-col bg-violet-700 h-full items-center p-2 gap-5">
      <h1 className="text-3xl text-white">To Do List Project</h1>
      <div className="flex gap-6 justify-center items-center w-full relative">
        <Input className="px-3 py-3 rounded-full outline-none focus:ring-2 focus:ring-yellow-400 ring-offset-2" />
        <Button
          text="+"
          className="bg-white w-10 h-10 rounded-lg outline-none ring-4 ring-yellow-400 ring-offset-4"
        />
        <div className="w-40 flex justify-start items-center pl-2 h-12 bg-white rounded-full relative overflow-hidden">
          <button
            role="button"
            ref={buttonRef}
            onClick={(e) => {
              e.stopPropagation();
              setInfoObjects((prev) => ({
                ...prev,
                showModal: !infoObjects.showModal,
              }));
            }}
            className="h-full w-12 flex justify-center items-center absolute right-0 bg-yellow-400 cursor-pointer"
          >
            <AiFillCaretDown className="text-xl text-white" />
          </button>
          <span className="text-yellow-500">{infoObjects.text}</span>
        </div>
        {infoObjects.showModal && (
          <div
            ref={divRef}
            className=" absolute bg-white h-20 w-32 left-[60%] top-[105%] rounded-md"
          ></div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
