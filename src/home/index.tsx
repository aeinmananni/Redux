import Link from "../UI/link";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex justify-start items-center border border-sky-900 h-20 p-1 rounded-lg gap-4">
        <Link
          className={({ isActive }) =>
            isActive ? "text-orange-500" : "text-blue-500"
          }
          to={"/"}
        >
          ControlsCounter
        </Link>
        <Link
          className={({ isActive }) =>
            isActive ? "text-orange-500" : "text-blue-500"
          }
          to={"todo-list"}
        >
          ToDoList
        </Link>
      </div>
      <div className=" border-2 border-sky-900 rounded-lg w-full h-full w-full">
        <Outlet />
      </div>
    </>
  );
};

export default Home;
