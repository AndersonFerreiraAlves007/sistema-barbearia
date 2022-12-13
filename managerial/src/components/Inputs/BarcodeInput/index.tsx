import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export interface BarcodeInputProps {

}

export const BarcodeInput: FC<BarcodeInputProps> = () => {
	const [value, setValue] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		setValue(`${formatNumberMask(newValue)}`);
	};

	function formatNumberMask(value: string) {
		let replaceQuantity = value;

		if (value === "") {
			return replaceQuantity;
		}

		replaceQuantity = value.replaceAll(/[^0-9]/g,"");

		if(replaceQuantity.length > 13) {
			replaceQuantity = replaceQuantity.substring(0,13);
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

