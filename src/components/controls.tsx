import { useDispatch } from "react-redux";
import { increament, decreament, reset } from "../redux-store/actions";

const Controls = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <button onClick={() => dispatch(increament())}>Increament</button>
      <button onClick={() => dispatch(decreament())}>Decreament</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
};

export default Controls;
