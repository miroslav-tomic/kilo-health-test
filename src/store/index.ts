import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

import rootReducer from "./rootReducer";

export const store = createStore(
	rootReducer,
	(process.env.NODE_ENV === "production")
		? applyMiddleware(reduxThunk)
		: composeWithDevTools(applyMiddleware(reduxThunk, logger))
);

// eslint-disable-next-line import/no-default-export
export default store;
