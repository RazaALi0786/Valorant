import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Nav from "./components/Nav.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-black text-white m-0 p-0">
    <React.StrictMode>
      <Nav />
      <App />
    </React.StrictMode>
  </div>
);
