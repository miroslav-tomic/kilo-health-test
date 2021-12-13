import setStoreTypeValues from "utils/setStoreTypeValues";

let types = {
	// Get question list
	GET_QUESTION_LIST_REQUEST: "",
	GET_QUESTION_LIST_SUCCESS: "",
	GET_QUESTION_LIST_FAILURE: "",

	// Post Answers
	POST_QUESTION_ANSWER_REQUEST: "",
	POST_QUESTION_ANSWER_SUCCESS: "",
	POST_QUESTION_ANSWER_FAILURE: "",

	QUESTION_ANSWER_INIT: "",
	QUESTION_ANSWER_EDIT: "",
};

types = setStoreTypeValues(types, "question");

// eslint-disable-next-line import/no-default-export
export default types;
