import { AiFillCaretDown } from "react-icons/ai";
import Button from "../../UI/button";
import { forwardRef, MouseEvent } from "react";

type SelectComponentProps = {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  text: string;
};

const SelectComponent = forwardRef<HTMLButtonElement, SelectComponentProps>(
  ({ onClick, text }, ref) => {
    return (
      <div className="w-44 flex justify-start items-center pl-2 h-12 bg-white rounded-full relative overflow-hidden">
        <Button
          text={<AiFillCaretDown className="text-xl text-white" />}
          role="button"
          ref={ref}
          onClick={onClick}
          className="h-full w-12 flex justify-center items-center absolute right-0 bg-yellow-400 cursor-pointer"
        />

        <span className="text-yellow-500">{text}</span>
      </div>
    );
  }
);

export default SelectComponent;
