import { InfoType } from "../../models";
import { forwardRef, HTMLAttributes } from "react";

type ModalProps = {
  infoObjects: InfoType;
  setInfoObjects: (value: InfoType) => void;
} & HTMLAttributes<HTMLDivElement>;

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ infoObjects, setInfoObjects, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className=" absolute bg-white h-20 w-36 left-[60%] top-[105%] rounded-md flex flex-col justify-between p-1"
      >
        {infoObjects.state.map((text: string) => (
          <small
            onClick={() => {
              const find = infoObjects.state.find((it) => it === text);

              setInfoObjects({ ...infoObjects, text: find ?? "" });
            }}
            className="border cursor-pointer"
          >
            {text}
          </small>
        ))}
      </div>
    );
  }
);

export default Modal;
