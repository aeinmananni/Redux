import { Provider } from "react-redux";
import store from "./redux-store";
import { Routes, Route } from "react-router-dom";
import ControlCounter from "./components/controls";
import TodoList from "./components/todos";
import Home from "./home";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="" element={<ControlCounter />} />
            <Route path="/todo-list" element={<TodoList />} />
          </Route>
        </Routes>
      </Provider>
    </>
  );
};

export default App;
