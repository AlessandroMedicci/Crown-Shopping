import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./Context/userContext";
import { CategoriesContextProvider } from "./Context/categoriesContext";
import { CartDropdownContextProvider } from "./Context/cartItemContext";
import { Provider } from "react-redux";
import { store } from "./Store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <UserContextProvider>
          <CategoriesContextProvider>
            <CartDropdownContextProvider>
              <App />
            </CartDropdownContextProvider>
          </CategoriesContextProvider>
        </UserContextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
