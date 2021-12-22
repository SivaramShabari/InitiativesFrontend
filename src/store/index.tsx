import { createContext, useReducer, Reducer, Dispatch } from "react";
import { rootReducer } from "./reducers";
import { AppState, dispatchAction, employee } from "./types";

export const initialState: AppState = {
	employee: {
		uid: "",
		name: "",
		email: "",
		photoURL: "",
		createdAt: new Date(),
		updatedAt: new Date(),
		company: "",
	},
	toasts: [],
	initiatives: [],
	created: [],
	subscribed: [],
	ended: [],
};

export const useStore = (): {
	store: AppState;
	dispatch: Dispatch<dispatchAction>;
} => {
	const [store, dispatch] = useReducer<Reducer<AppState, dispatchAction>>(
		rootReducer,
		initialState
	);
	return { store, dispatch };
};

const StoreContext = createContext<{
	store: AppState;
	dispatch: Dispatch<dispatchAction>;
}>({ store: initialState, dispatch: () => {} });

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
	const { store, dispatch } = useStore();
	return (
		<StoreContext.Provider value={{ store, dispatch }}>
			{children}
		</StoreContext.Provider>
	);
};

export * as actions from "./actions";

export default StoreContext;
