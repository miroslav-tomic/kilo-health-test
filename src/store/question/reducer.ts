import { AnyAction } from "redux";

import types from "./types";
import { IQuestion } from "./interface";

const INITIAL_STATE: IQuestion = {
	isFetchingList: false,
	isPosting: false,

	questions: {},
	answers: {},
};

const questionReducer = (state: IQuestion = INITIAL_STATE, action: AnyAction) => {
	switch (action.type) {
		// Get question list
		case types.GET_QUESTION_LIST_REQUEST:
			return {
				...state,
				isFetchingList: true,
				questions: {}
			};
		case types.GET_QUESTION_LIST_SUCCESS:
			return {
				...state,
				isFetchingList: false,
				questions: action.payload
			};
		case types.GET_QUESTION_LIST_FAILURE:
			return {
				...state,
				isFetchingList: false,
				questions: {}
			};

		// Post Answers
		case types.POST_QUESTION_ANSWER_REQUEST:
			return {
				...state,
				isPosting: true,
				answers: {}
			};
		case types.POST_QUESTION_ANSWER_SUCCESS:
			return {
				...state,
				isPosting: false,
				answers: action.payload
			};
		case types.POST_QUESTION_ANSWER_FAILURE:
			return {
				...state,
				isPosting: false,
				answers: {}
			};

		// Init
		case types.QUESTION_ANSWER_INIT:
			return {
				...state,
				answers: {},
			};

		// Edit Sign up Step 1
		case types.QUESTION_ANSWER_EDIT:
			return {
				...state,
				answers: { ...state.answers, ...action.payload },
			};

		// Initial store
		default:
			return state;
	}
};

// eslint-disable-next-line import/no-default-export
export default questionReducer;
