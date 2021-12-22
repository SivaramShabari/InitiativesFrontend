export interface employee {
	id?: string;
	uid: string;
	name: string;
	email: string;
	photoURL: string;
	createdAt: Date;
	updatedAt: Date;
	company: string;
}

export const SIGN_OUT = "SIGN_OUT";
export const SET_employee = "SET_employee";
