import React from "react";
import ReactDOM from "react-dom/client";
import "../src/app/layout/styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/Routes.tsx";
import { store } from "./app/store/configureStore.ts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { configureStore } from "./app/store/configureStore.ts";

// const store = configureStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
