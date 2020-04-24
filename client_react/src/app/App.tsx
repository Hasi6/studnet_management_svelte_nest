import React, { FC, useEffect } from "react";
import { Provider } from "react-redux";
import ReduxToastr, { toastr } from "react-redux-toastr";

import store from "./redux/store/store";

import { Button } from "primereact/button";

import "react-redux-toastr/lib/css/react-redux-toastr.min.css";

import Routes from "./Routes";
import Alerts from "./components/alert/Alerts";

const App: FC = (): JSX.Element => {
  const showSuccess = () => {};

  useEffect(() => {
    toastr.error("Hasi", "Hasi");
  }, []);

  return (
    <Provider store={store}>
      <ReduxToastr
        position="top-right"
        transitionIn="bounceIn"
        transitionOut="bounceOut"
        timeOut={5000}
        progressBar
        preventDuplicates
        closeOnToastrClick
      />
      <Alerts />
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
