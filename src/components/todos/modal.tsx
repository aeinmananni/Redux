import { useDispatch, useSelector } from "react-redux";
import { forwardRef, HTMLAttributes } from "react";
import { TodoState } from "../../redux-store/redux-redusers/todos-reducers/todos-reducers";
import { addToText, toggleModal } from "../../redux-store/actions-actionsTodos";

type ModalProps = {} & HTMLAttributes<HTMLDivElement>;

const Modal = forwardRef<HTMLDivElement, ModalProps>(({ ...props }, ref) => {
  const dispatch = useDispatch();
  const infoObjects = useSelector(
    (state: { todos: TodoState }) => state.todos.infoObjects
  );

  return (
    <div
      {...props}
      ref={ref}
      className=" absolute bg-white h-20 w-36 left-[60%] top-[105%] rounded-md flex flex-col justify-between p-1"
    >
      {infoObjects.state.map((text: string) => (
        <small
          onClick={() => {
            dispatch(addToText(text));
            dispatch(toggleModal());
          }}
          className="border cursor-pointer"
        >
          {text}
        </small>
      ))}
    </div>
  );
});

export default Modal;
