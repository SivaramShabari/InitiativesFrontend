import { dispatchAction, SET_employee, SIGN_OUT, employee } from "../types";

const dummyemployee: employee = {
	name: "",
	email: "",
	createdAt: new Date(),
	updatedAt: new Date(),
	photoURL: "",
	uid: "",
	company: "",
};

const reducer = (state: employee, action: dispatchAction): employee => {
	switch (action.type) {
		case SIGN_OUT:
			return dummyemployee;
		case SET_employee:
			return action.payload;
		default:
			return state;
	}
};

export default reducer;
