import React from "react";
import Index from "./components/Add/Index";
import { Apps, GlobalStyle } from "./StyleApp.js";
import Show from "./components/Show/Show";
import Search from "./components/search/search";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Apps>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Index />
      <Search />
      <Show />
    </Apps>
  );
};

export default App;
