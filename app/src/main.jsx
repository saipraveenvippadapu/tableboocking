import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store.js";
import Login from "./Login.jsx";
import Table from "./Table.jsx";
import Orders from "./Orders.jsx";
import Regestration from "./Regestration.jsx";
// import Menu from "./menu.jsx";
// import Form1 from "./form1.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
