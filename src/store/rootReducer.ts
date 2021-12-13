import { combineReducers } from "redux";

// reducer import
import authReducer from "./auth/reducer";
import questionReducer from "./question/reducer";

const rootReducer = combineReducers({
	auth: authReducer,
	question: questionReducer,
});

// eslint-disable-next-line import/no-default-export
export default rootReducer;
