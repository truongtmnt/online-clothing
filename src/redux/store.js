import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer.js";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

const middleWare = [thunk];
//avoid logger on production, only log when development
if (process.env.NODE_ENV === "development") {
	middleWare.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleWare));

export const persistor = persistStore(store);
