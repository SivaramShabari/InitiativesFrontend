import { dispatchAction, employee } from "../types";

export const setemployee = (employee: employee): dispatchAction => {
	return {
		type: "SET_employee",
		payload: employee,
	};
};

export const signOut = (): dispatchAction => {
	return {
		type: "SIGN_OUT",
	};
};
