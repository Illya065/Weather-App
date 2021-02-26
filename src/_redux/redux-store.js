import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import weatherReducer from "./weatherReducer";

let reducers = combineReducers({
  weatherPage: weatherReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
