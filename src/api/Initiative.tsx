import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import env from "../config";
import { initiative } from "../store/types/Initiative";

const get = (uid: string) => {
	return axios.get(env.url + "/initiative/" + uid);
};

const create = (initiative: initiative) => {
	return axios.post(env.url + "/initiative", initiative);
};

const update = (initiative: initiative) => {
	return axios.put(env.url + "/initiative", initiative);
};

const getCreated = (ownerId: string) => {
	return axios.get(env.url + "/initiative/owner/" + ownerId);
};

const getSubscribed = (uid: string) => {
	return axios.get(env.url + "/initiative/employee/" + uid);
};

const getAll = () => {
	return axios.get(env.url + "/initiative/all");
};

const getContributions = (initiativeId: string) => {
	return axios.get(env.url + "/contribution/initiative/" + initiativeId);
};

const getSubscribers = (initiativeId: string) => {
	return axios.get(env.url + "/subscription/initiative/" + initiativeId);
};

export const useCreateInitiative = () => {
	return useMutation(create, {});
};

export const useGetInitiative = (uid: string) => {
	return useQuery(["initiative", uid], () => get(uid), {});
};

export const useUpdateInitiative = () => {
	const query = useQueryClient();
	return useMutation(update, {
		onSuccess: () => {
			query.invalidateQueries("initiative");
			query.invalidateQueries("all");
			query.invalidateQueries("created");
			query.invalidateQueries("subscribed");
		},
	});
};

export const useGetCreatedInitiatives = (ownerId: string) => {
	return useQuery("created", () => getCreated(ownerId), {
		enabled: !!ownerId,
	});
};

export const useGetSubscribedInitiatives = (uid: string) => {
	return useQuery("subscribed", () => getSubscribed(uid), {
		enabled: !!uid,
	});
};

export const useGetAllInitiatves = () => {
	return useQuery("all", () => getAll(), {});
};

export const useGetInitiativeContributions = (initiativeId: string) => {
	return useQuery("contributions", () => getContributions(initiativeId), {
		enabled: !!initiativeId,
	});
};

export const useGetInitiativeSubscribers = (initiativeId: string) => {
	return useQuery("subscribers", () => getSubscribers(initiativeId), {
		enabled: !!initiativeId,
		onSuccess: (data) => {
			const subscribers = data.data.map(
				(subscriber: any) => subscriber.employeeId
			);
		},
	});
};
