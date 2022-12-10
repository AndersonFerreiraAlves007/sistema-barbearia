import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export interface CnpjInputProps {

}

export const CnpjInput: FC<CnpjInputProps> = () => {
	const [value, setValue] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		let valueFormated = newValue.replaceAll(/[^0-9]/g,"");
		valueFormated = valueFormated.replaceAll(/.-/g,"");
		if(valueFormated.length > 11) {
			valueFormated = valueFormated.substring(0, 14);
		}
		let finalString = "";
		if(valueFormated.length > 2) {
			finalString = `${finalString}${valueFormated.substring(0, 2)}.`;
			if(valueFormated.length > 5) {
				finalString = `${finalString}${valueFormated.substring(2, 5)}.`;
				if(valueFormated.length > 8) {
					finalString = `${finalString}${valueFormated.substring(5, 8)}/`;
					if(valueFormated.length > 12) {
						finalString = `${finalString}${valueFormated.substring(8, 12)}-${valueFormated.substring(12)}`;
					} else {
						finalString = `${finalString}${valueFormated.substring(8)}`;
					}
				} else {
					finalString = `${finalString}${valueFormated.substring(5)}`;
				}
			} else {
				finalString = `${finalString}${valueFormated.substring(2)}`;
			}
		} else {
			finalString = `${finalString}${valueFormated.substring(0)}`;
		}
		setValue(finalString);
	};
	
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

