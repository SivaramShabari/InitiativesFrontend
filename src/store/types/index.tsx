import { toast } from "./toast";
import { employee } from "./employee";
import { initiative } from "./Initiative";
export * from "./toast";
export * from "./employee";

export interface AppState {
	employee: employee;
	toasts: toast[];
	initiatives: initiative[];
	created: initiative[];
	subscribed: initiative[];
	ended: initiative[];
}

export interface ActionCreator {
	(payload: any): dispatchAction;
}

export interface dispatchAction {
	type: string;
	payload?: any;
	description?: string;
}

export interface subscription {
	id?: string;
	initiativeId: string;
	employeeId: string;
	subscriptionDate: Date;
	status: "ACTIVE" | "ENDED";
}

export interface contribution {
	id?: string;
	initiativeId: string;
	employeeId: string;
	hours: number;
}
