import { FaCheck, FaRegTrashCan } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteText } from "../../../redux-store/actions-actionsTodos";

type ToDosAddComponentProps = {
  text: string;
};
const ToDosAddComponent = ({ text }: ToDosAddComponentProps) => {
  const dispatch = useDispatch();
  return (
    <div className="w-1/5 bg-white h-12 rounded-full flex justify-start items-center border-4 border-yellow-400">
      <small className="border w-full h-full rounded-l-full pl-2 flex items-center">
        {text}
      </small>
      <FaRegTrashCan
        onClick={() => dispatch(deleteText(text))}
        className="text-red w-1/4 p-2 text-x text-red-500 border h-full cursor-pointer"
      />
      <FaCheck className="text-green-500 w-1/4 text-xl cursor-pointer" />
    </div>
  );
};

export default ToDosAddComponent;
