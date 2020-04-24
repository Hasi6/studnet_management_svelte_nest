import React, { FC } from "react";
import { Provider } from "react-redux";
import store from "./redux/store/store";

import { Button } from "primereact/button";

import Routes from "./Routes";

interface propTypes {
  props: any;
}

const App: FC = (): JSX.Element => {
  const showSuccess = () => {};

  return (
    <Provider store={store}>
      <Button
        label="Primary"
        className="p-button-raised"
        onClick={e => console.log(e)}
      />
      <Routes />
      <Button
        onClick={showSuccess}
        label="Success"
        className="p-button-success"
      />
    </Provider>
  );
};

export default App;
