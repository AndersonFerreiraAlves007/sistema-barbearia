import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export interface PhoneInputProps {

}

export const PhoneInput: FC<PhoneInputProps> = () => {
	const [value, setValue] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		setValue(`${formatNumberMask(newValue)}`);
	};

	function formatNumberMask(value: string) {
		let replaceQuantity = value;
		if (value === "") {
			return "";
		}
		replaceQuantity = value.replaceAll(/[^0-9]/g,"");
		if(replaceQuantity.length > 11) {
			replaceQuantity = replaceQuantity.substring(0,11);
		}

		
		if(replaceQuantity.length > 7) {
			replaceQuantity = `(${replaceQuantity.substring(0,2)})${replaceQuantity.substring(2,7)}-${replaceQuantity.substring(7)}`;
		} else {
			if(replaceQuantity.length > 2) {
				replaceQuantity = `(${replaceQuantity.substring(0,2)})${replaceQuantity.substring(2)}`;
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

