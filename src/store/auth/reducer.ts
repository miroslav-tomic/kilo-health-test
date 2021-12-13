import { AnyAction } from "redux";

import types from './types';
import { IAuth } from './interface';

const INITIAL_STATE: IAuth = {
	isPostingLogin: false,

	isLoggedIn: false,
};

const authReducer = (state: IAuth = INITIAL_STATE, action: AnyAction) => {
	switch (action.type) {
		// Login
		case types.LOGIN_REQUEST:
			return {
				...state,
				isPostingLogin: true,
				isLoggedIn: false,
			};
		case types.LOGIN_SUCCESS:
			return {
				...state,
				isLoggedIn: true,
			};
		case types.LOGIN_FAILURE:
			return {
				...state,
				isPostingLogin: false,
				isLoggedIn: false,
			};

		// Initial store
		default:
			return state;
	}
};

// eslint-disable-next-line import/no-default-export
export default authReducer;
