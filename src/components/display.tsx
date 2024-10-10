import { useSelector } from "react-redux";

const Display = () => {
  const count = useSelector((state: { count: number }) => state.count);
  return (
    <div>
      <h1>{count ?? 0}</h1>
    </div>
  );
};

export default Display;
