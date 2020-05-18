import React, { FC, useEffect } from "react";
import { Provider } from "react-redux";
import ReduxToastr, { toastr } from "react-redux-toastr";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { WebSocketLink } from "apollo-link-ws";
import { InMemoryCache } from "apollo-cache-inmemory";

import store from "./redux/store/store";

import "react-redux-toastr/lib/css/react-redux-toastr.min.css";

import Routes from "./Routes";
import { setCurrentUser } from "./redux/actions/auth/auth.actions";

const App: FC = (): JSX.Element => {
  useEffect(() => {
    toastr.error("Hasi", "Hasi");
  }, []);

  const wsLink = new WebSocketLink({
    uri: "ws://localhost:5000/graphql",
    options: {
      reconnect: true
    }
  });

  const client = new ApolloClient({
    link: wsLink,
    cache: new InMemoryCache()
  });

  store.dispatch(setCurrentUser());

  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
};

export default App;
