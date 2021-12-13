import types from "./types";
import api from "constants/api";

export const getQuestionList = () => (dispatch: any, getState: any) => {
	if (getState().question.isFetchingList) {
		return Promise.reject();
	}

	dispatch({ type: types.GET_QUESTION_LIST_REQUEST });

	return api.question.getList()
		.then((res: any) => {

			if (!res) {
				return Promise.reject(res);
			} else {

				dispatch({
					type: types.GET_QUESTION_LIST_SUCCESS,
					payload: res
				});

				return res;
			}
		})
		.catch((err: any) => {
			const msg = "Get List failed!";
			const payload = { ...err, msg };

			dispatch({
				type: types.GET_QUESTION_LIST_FAILURE,
				payload
			});

			return Promise.reject(payload);
		});
};

export const postAnswers = () => (dispatch: any, getState: any) => {
	if (getState().question.isPosting) {
		return Promise.reject();
	}

	dispatch({ type: types.POST_QUESTION_ANSWER_REQUEST });

	return api.question.post()
		.then((res: any) => {

			if (!res) {
				return Promise.reject(res);
			} else {

				dispatch({
					type: types.POST_QUESTION_ANSWER_SUCCESS,
					payload: res
				});

				return res;
			}
		})
		.catch((err: any) => {
			const msg = "Post List failed!";
			const payload = { ...err, msg };

			dispatch({
				type: types.POST_QUESTION_ANSWER_FAILURE,
				payload
			});

			return Promise.reject(payload);
		});
};

export const init = () => {
	return {
		type: types.QUESTION_ANSWER_INIT,
	};
};

export const edit = (data: any) => {
	return {
		type: types.QUESTION_ANSWER_EDIT,
		payload: data,
	};
};
