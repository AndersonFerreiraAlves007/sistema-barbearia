import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export interface FloatInputProps {

}

export const FloatInput: FC<FloatInputProps> = () => {
	const [value, setValue] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		setValue(`${formatNumberMask(newValue)}`);
	};

	function formatNumberMask(value: string) {
		let replaceQuantity = value;
		if (value === "") {
			return "0,00";
		}
		replaceQuantity = String(
			Number(value.replaceAll(/[^0-9]/g,""))
		);
		if (isNaN(Number(replaceQuantity))) {
			replaceQuantity = "0,00";
		} else if (replaceQuantity.length === 1) {
			replaceQuantity = "0,0" + replaceQuantity;
		} else if (replaceQuantity.length === 2) {
			replaceQuantity = "0," + replaceQuantity;
		} else if (replaceQuantity.length >= 3 && replaceQuantity.length < 6) {
			replaceQuantity =
				replaceQuantity.slice(0, -2) + "," + replaceQuantity.slice(-2);
		} else if (replaceQuantity.length >= 6) {
			const before = replaceQuantity.slice(0, -2);
			const after = replaceQuantity.slice(-2);
			let formated = "";
			for (let i = 0; i < before.length; i += 1) {
				let dot = "";
				if (i % 3 === 0 && i !== 0) dot = ".";
				formated = before[before.length - 1 - i] + dot + formated;
			}
			replaceQuantity = formated + "," + after;
		}
		return replaceQuantity;
	}
	
	return (
		<Box sx={{ display: "flex" }}>
			<TextField
				id="outlined-name"
				label="Name"
				value={value}
				onChange={handleChange}
			/>
		</Box>
	);
};

