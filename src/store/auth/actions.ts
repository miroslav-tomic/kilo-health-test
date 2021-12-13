import types from './types';
import api from 'constants/api';

export const login = (credentials: any) => (dispatch: any, getState: any) => {
	if (getState().auth.isPostingLogin) {
		return Promise.reject();
	}

	dispatch({ type: types.LOGIN_REQUEST });

	return api.auth.login(credentials)
		.then((res: any) => {

			if (!res) {
				return Promise.reject(res);
			} else {

				dispatch({
					type: types.LOGIN_SUCCESS,
					payload: res,
				});

				return res;
			}
		})
		.catch((err: any) => {
			const msg = 'Log in failed!';
			const payload = { ...err, msg };

			dispatch({
				type: types.LOGIN_FAILURE,
				payload,
			});

			return Promise.reject(payload);
		});
};
