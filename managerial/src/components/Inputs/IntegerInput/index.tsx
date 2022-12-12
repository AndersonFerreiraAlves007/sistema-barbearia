import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export interface IntegerInputProps {

}

export const IntegerInput: FC<IntegerInputProps> = () => {
	const [value, setValue] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		setValue(`${formatNumberMask(newValue)}`);
	};

	function formatNumberMask(value: string) {
		let replaceQuantity = value;
		if (value === "") {
			return "0";
		}
		replaceQuantity = String(
			Number(value.replaceAll(/[^0-9]/g,""))
		);
		if (isNaN(Number(replaceQuantity))) {
			replaceQuantity = "0";
		} else {
			let formated = "";
			for (let i = 0; i < replaceQuantity.length; i += 1) {
				let dot = "";
				if (i % 3 === 0 && i !== 0) dot = ".";
				formated = replaceQuantity[replaceQuantity.length - 1 - i] + dot + formated;
			}
			replaceQuantity = formated;
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

