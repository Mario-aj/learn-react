import React from "react";
import ReactDOM from "react-dom";
import "./services/mirage";
import { App } from "./App";
import { ModalProvider } from "./context/modal-context";

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
