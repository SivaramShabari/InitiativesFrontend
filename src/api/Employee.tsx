import axios from "axios";
import { useContext } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import env from "../config";
import StoreContext, { actions } from "../store";
import { employee } from "../store/types";

const get = (uid: string) => {
	return axios({
		url: env.url + "/employee/one/" + uid,
		method: "GET",
	});
};
const create = (employee: employee) => {
	return axios({
		url: env.url + "/employee",
		method: "POST",
		data: employee,
	});
};
const update = (employee: employee) => {
	return axios({
		url: env.url + "/employee",
		method: "PUT",
		data: employee,
	});
};

export const useCreateEmployee = () => {
	return useMutation(create, {});
};
export const useUpdateEmployee = () => {
	const query = useQueryClient();
	return useMutation(update, {
		onSuccess: () => {
			query.invalidateQueries("employee");
		},
	});
};
export const useGetEmployee = (uid: string) => {
	const { dispatch } = useContext(StoreContext);
	return useQuery(["employee"], () => get(uid), {
		enabled: !!uid,
		onSuccess: (data) => {
			dispatch(actions.employee.setemployee(data.data));
		},
	});
};
