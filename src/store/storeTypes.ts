import { IAuth } from "./auth/interface";
import { IQuestion } from "./question/interface";

// eslint-disable-next-line import/no-default-export
export default interface StoreTypes {
	auth: IAuth;
	question: IQuestion;
}
