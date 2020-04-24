import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <div>Hasi</div>
    </Provider>
  );
};

export default App;
