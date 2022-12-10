import axios from "axios";

import { URL_SERVIDOR_IMPRESSORA } from "../utils";

const api = axios.create({
	baseURL: URL_SERVIDOR_IMPRESSORA,
});

async function imprimir(id, type, query) {
	try {
		const url = `/imprimir-document/${id}/${type}${query}`;
		await api.post(url, {
			url_api: process.env.REACT_APP_HOST_API,
		});
		return 1;
	} catch (e) {
		return -1;
	}
}

export async function imprimirNotaVenda(id, query = "") {
	return await imprimir(id, 1, query);
}

export async function imprimirNotaRetirada(id, query = "") {
	return await imprimir(id, 2, query);
}

export async function imprimirRelatorioCaixa(id, query = "") {
	return await imprimir(id, 3, query);
}

export async function imprimirNotaPreVenda(id, query = "") {
	return await imprimir(id, 4, query);
}

export async function imprimirNotaAbertura(id, query = "") {
	return await imprimir(id, 5, query);
}

export async function imprimirPacoteMalote(id, query = "") {
	return await imprimir(id, 6, query);
}
