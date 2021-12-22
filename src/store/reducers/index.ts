import { dispatchAction } from "../types";
import toast from "./Toast";
import employee from "./employee";
const combineReducers = (slices: any) => (state: any, action: dispatchAction) =>
	Object.keys(slices).reduce(
		// use for..in loop, if you prefer it
		(acc, prop) => ({
			...acc,
			[prop]: slices[prop](acc[prop], action),
		}),
		state
	);

const reducers = {
	toasts: toast,
	employee: employee,
};

export const rootReducer = combineReducers(reducers);
