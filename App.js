import React from 'react';
import Routes from './src/routes/Index';
import { Provider } from "react-redux";
import store from "./src/reducers/store";

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}