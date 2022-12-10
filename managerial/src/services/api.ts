import axios from "axios";

import { createQueryURL } from "../utils";
import { getRefreshToken, setNewToken } from "./alth";

const HOST_API = process.env.REACT_APP_HOST_API;

const api = axios.create({
	baseURL: HOST_API,
});

api.interceptors.response.use(
	(response) => response,
	(error) => {
		const {
			config,
			response: { status },
		} = error;
		const originalRequest = config;

		if (status === 401) {
			const retryOrigReq = new Promise((resolve) => {
				resolve(
					axios({
						method: "GET",
						url: `${HOST_API}/newToken`,
						headers: { refreshToken: getRefreshToken() },
					}),
				);
			}).then((result) => {
				setNewToken(result.data.token);
				return new Promise((resolve) => {
					originalRequest.headers.Authorization = `Bearer ${result.data.token}`;
					resolve(axios(originalRequest));
				});
			});
			return retryOrigReq;
		}
		return Promise.reject(error);
	},
);

export default api;

export async function getListAPI(resorce, sort, range, filter, nested) {
	const url = `/${resorce}?${createQueryURL(sort, range, filter, nested)}`;
	const data = await api.get(url);
	return {
		data: data.data.data,
		total: parseInt(data.data.total, 10),
	};
}

export async function getListAllAPI(resorce, sort, filter, nested) {
	const url = `/${resorce}/all?${createQueryURL(sort, null, filter, nested)}`;
	const data = await api.get(url);
	return {
		data: data.data,
	};
}

export async function getOneAPI(resorce, id, nested) {
	const url = `/${resorce}/${id}?${createQueryURL(null, null, null, nested)}`;
	const data = await api.get(url);
	return {
		data: data.data,
	};
}

export async function getManyAPI(resorce, filter, nested) {
	const url = `/${resorce}?${createQueryURL(null, null, filter, nested)}`;
	const data = await api.get(url);
	return {
		data: data.data,
	};
}

export async function updateAPI(resorce, id, body) {
	const url = `/${resorce}/${id}`;
	const data = await api.put(url, body);
	return {
		data: data.data,
	};
}

export async function updateManyAPI(resorce, filter, body) {
	const url = `/${resorce}?${createQueryURL(null, null, filter, null)}`;
	const data = await api.put(url, body);
	return {
		data: data.data,
	};
}

export async function deleteAPI(resorce, id) {
	const url = `/${resorce}/${id}`;
	const data = await api.delete(url);
	return {
		data: data.data,
	};
}

export async function deleteManyAPI(resorce, filter) {
	const url = `/${resorce}?${createQueryURL(null, null, filter, null)}`;
	const data = await api.delete(url);
	return {
		data: data.data,
	};
}

export async function createAPI(resorce, body) {
	const url = `/${resorce}`;
	const data = await api.post(url, body);
	return {
		data: data.data,
	};
}
