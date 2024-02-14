import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main.tsx";
import Home from "./components/Home/Home.tsx";
import Fortune from "./components/Fortune/Fortune.tsx";
import Register from "./Page/Register/Register.tsx";
import FortuneView from "./Page/FortuneView/FortuneView.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/fortune",
        element: <Fortune></Fortune>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "fortune-view",
        element: <FortuneView></FortuneView>,
      },
    ],
  },
]); 

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
  
// Remove Preload scripts loading
postMessage({ payload: "removeLoading" }, "*");

// Use contextBridge
window.ipcRenderer.on("main-process-message", (_event, message) => {
  console.log(message);
});
