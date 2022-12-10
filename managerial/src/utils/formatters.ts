function formatCPF(cpf) {
	return cpf
		? `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(
			6,
			9,
		)}-${cpf.substring(9)}`
		: "";
}

function formatCNPJ(cnpj) {
	return cnpj
		? `${cnpj.substring(0, 2)}.${cnpj.substring(2, 5)}.${cnpj.substring(
			5,
			8,
		)}/${cnpj.substring(8, 12)}-${cnpj.substring(12)}`
		: "";
}

function formatCEP(cep) {
	return cep ? `${cep.substring(0, 5)}-${cep.substring(5)}` : "";
}

function formatTelefone(telefone) {
	return telefone
		? `(${telefone.substring(0, 2)}) ${telefone.substring(
			2,
			7,
		)}-${telefone.substring(7)}`
		: "";
}

function formatMoeda(valor) {
	return valor !== null && valor !== undefined
		? valor.toLocaleString("pt-br", {
			style: "currency",
			currency: "BRL",
		})
		: "";
}

function formatPeso(valor) {
	return valor !== null && valor !== undefined
		? valor.toLocaleString("de-DE", {
			minimumFractionDigits: 3,
			maximumFractionDigits: 3,
		})
		: "";
}

function formatUnidades(valor) {
	return valor !== null && valor !== undefined
		? valor.toLocaleString("de-DE", {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		})
		: "";
}

function formatPreco(valor) {
	return valor !== null && valor !== undefined
		? valor.toLocaleString("de-DE", {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		})
		: "";
}

function formatIE(cnpj) {
	return cnpj
		? `${cnpj.substring(0, 3)}.${cnpj.substring(3, 6)}.${cnpj.substring(6, 9)}`
		: "";
}

export {
	formatCPF,
	formatCNPJ,
	formatCEP,
	formatTelefone,
	formatMoeda,
	formatPeso,
	formatPreco,
	formatIE,
	formatUnidades,
};
