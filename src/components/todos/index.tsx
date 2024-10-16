import { ChangeEvent, useRef, useState } from "react";
import Button from "../../UI/button";
import Input from "../../UI/input";
import { useClickAway } from "react-use";
import SelectComponent from "./select-component";
import { InfoType } from "../../models";
import Modal from "./modal";

const TodoList = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [infoObjects, setInfoObjects] = useState<InfoType>({
    text: "All",
    showModal: false,
    state: ["contians", "not-completed", "All"],
    inputValues: [],
  });
  useClickAway(divRef, (e) => {
    if (buttonRef.current && !buttonRef.current?.contains(e.target as Node)) {
      setInfoObjects((prev) => ({ ...prev, showModal: false }));
    }
  });
  console.log(infoObjects.inputValues);
  return (
    <div className="flex flex-col bg-violet-700 h-full items-center p-2 gap-5">
      <h1 className="text-3xl text-white">To Do List Project</h1>
      <div className="flex gap-6 justify-center items-center w-full relative">
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
          className="px-3 py-3 rounded-full outline-none focus:ring-2 focus:ring-yellow-400 ring-offset-2"
        />
        <Button
          onClick={() => {
            setInfoObjects((prev) => ({
              ...prev,
              inputValues: [...prev.inputValues, inputValue],
            }));
          }}
          text="+"
          className="bg-white w-10 h-10 rounded-lg outline-none ring-4 ring-yellow-400 ring-offset-4"
        />
        <SelectComponent
          ref={buttonRef}
          text={infoObjects.text}
          onClick={() => {
            setInfoObjects((prev) => ({
              ...prev,
              showModal: !infoObjects.showModal,
            }));
          }}
        />
        {infoObjects.showModal && (
          <Modal
            ref={divRef}
            infoObjects={infoObjects}
            setInfoObjects={setInfoObjects}
          />
        )}
      </div>
    </div>
  );
};

export default TodoList;
