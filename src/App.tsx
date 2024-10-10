import { Provider } from "react-redux";
import store from "./redux-store";
import Display from "./components/display";
import Controls from "./components/controls";

const App = () => {
  return (
    <>
      <div>React js</div>
      <Provider store={store}>
        <Display />
        <Controls />
      </Provider>
    </>
  );
};

export default App;
