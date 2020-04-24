import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";

import { BrowserRouter } from "react-router-dom";

// React Prime
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const rootEl = document.getElementById("root");
declare const module: any;

let render = () =>
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootEl
  );

if (module.hot) {
  module.hot.accept(App, () => {
    setTimeout(render);
  });
}

render();
