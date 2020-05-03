import React, { FC, useEffect } from "react";
import { Provider } from "react-redux";
import ReduxToastr, { toastr } from "react-redux-toastr";

import store from "./redux/store/store";

import "react-redux-toastr/lib/css/react-redux-toastr.min.css";

import Routes from "./Routes";
import { setCurrentUser } from "./redux/actions/auth/auth.actions";

const App: FC = (): JSX.Element => {
  useEffect(() => {
    toastr.error("Hasi", "Hasi");
  }, []);

  store.dispatch(setCurrentUser());

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

      <Routes />
    </Provider>
  );
};

export default App;
