import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store/store";

import { Button } from "primereact/button";
import Routes from "./Routes";

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Button
        label="Primary"
        className="p-button-raised"
        onClick={e => console.log(e)}
      />
      <Routes />
    </Provider>
  );
};

export default App;
