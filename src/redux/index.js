import { configureStore, combineReducers } from "@reduxjs/toolkit";
import store from "./reducers/store";


const reducer = combineReducers({ store });

export const setupStore = () => {
  return configureStore({ reducer });
};
export default setupStore;
