import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export interface SelectInputProps {

}

const casas = 5;

export const SelectInput: FC<SelectInputProps> = () => {
	const [value, setValue] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		setValue(`${formatNumberMask(newValue)}`);
	};

	function getZeros(count: number) {
		let zeros = "";
		for (let i = 0; i < count; i++) {
			zeros += "0";
		}
		return zeros;
	}

	function formatNumberMask(value: string) {
		let replaceQuantity = value;
		if (value === "") {
			if(casas <= 0) {
				return "0";
			}
			return `0,${getZeros(casas)}`;
		}
		replaceQuantity = String(
			Number(value.replaceAll(/[^0-9]/g,""))
		);
		if(casas > 0) {
			if (isNaN(Number(replaceQuantity))) {
				return `0,${getZeros(casas)}`;
			} else{
				if(replaceQuantity.length <= casas) {
					return `0,${getZeros(casas - replaceQuantity.length)}${replaceQuantity}`;
				} else {
					if(replaceQuantity.length > casas && replaceQuantity.length < 3 + casas) {
						replaceQuantity = replaceQuantity.slice(0, -1 * casas) + "," + replaceQuantity.slice(-1 * casas);
					} else {
						const before = replaceQuantity.slice(0, -1 * casas);
						const after = replaceQuantity.slice(-1 * casas);
						let formated = "";
						for (let i = 0; i < before.length; i += 1) {
							let dot = "";
							if (i % 3 === 0 && i !== 0) dot = ".";
							formated = before[before.length - 1 - i] + dot + formated;
						}
						replaceQuantity = formated + "," + after;
					}
				}
			} 
		} else {
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

