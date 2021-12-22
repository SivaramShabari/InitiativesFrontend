import axios from "axios";
import { useContext } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import env from "../config";
import StoreContext, { actions } from "../store";
import { contribution, subscription } from "../store/types";

const contribute = (contribution: contribution) => {
	return axios.post(`${env.url}/contribution`, contribution);
};

const subscribe = (subscription: subscription) => {
	return axios.post(`${env.url}/subscription`, subscription);
};

const dashboardView = (uid: string) => {
	return axios.get(`${env.url}/dashboardView/${uid}`);
};

export const useContribute = () => {
	const query = useQueryClient();
	const { dispatch } = useContext(StoreContext);
	return useMutation(contribute, {
		onSuccess: (data) => {
			console.log(data);
			query.invalidateQueries("initiative");
			query.invalidateQueries("all");
			query.invalidateQueries("created");
			query.invalidateQueries("subscribed");
			dispatch(actions.toast.addSuccess("Contribution added"));
		},
	});
};

export const useSubscribe = () => {
	const query = useQueryClient();
	const { dispatch } = useContext(StoreContext);
	return useMutation(subscribe, {
		onSuccess: () => {
			query.invalidateQueries("initiative");
			query.invalidateQueries("all");
			query.invalidateQueries("created");
			query.invalidateQueries("subscribed");
			dispatch(
				actions.toast.addSuccess("You have subscribed to this initiative!")
			);
		},
	});
};

export const useDashboardView = (uid: string) => {
	return useQuery("dashboard", () => dashboardView(uid), {});
};
