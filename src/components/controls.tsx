import { useDispatch, useSelector } from "react-redux";

import Button from "../UI/button";
import { decreament, increament, reset } from "../redux-store/actions-counter";

const ControlCounter = () => {
  const dispatch = useDispatch();
  const count = useSelector(
    (state: { counter: { count: number } }) => state.counter.count
  );
  return (
    <div className="h-full w-full flex flex-col justify-center items-center  gap-5  bg-sky-800 text-white p-3">
      <div className="flex gap-4 flex-col h-1/2 rounded-lg w-1/2  justify-center items-center bg-white">
        <h1 className="text-3xl text-gray-500">React ts Counter project</h1>
        <h1 className="bg-yellow-500 text-2xl  w-14 h-14 flex justify-center items-center p-3 rounded-full text-gray-100">
          {count}
        </h1>
        <div className="flex gap-5">
          <Button
            className="bg-green-500 p-1 rounded-md"
            onClick={() => dispatch(increament())}
            text="Increament"
          />

          <Button
            style={{ backgroundColor: "#ea1139" }}
            onClick={() => dispatch(decreament())}
            text="Decreament"
            className="bg-red-500 p-1 rounded-md"
          />
          <Button
            className="bg-purple-600 p-1 rounded-md"
            onClick={() => dispatch(reset())}
            text="reset"
          />
        </div>
      </div>
    </div>
  );
};

export default ControlCounter;
