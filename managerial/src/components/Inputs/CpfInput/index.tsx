import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export interface CpfInputProps {

}

export const CpfInput: FC<CpfInputProps> = () => {
	const [value, setValue] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		let valueFormated = newValue.replaceAll(/[^0-9]/g,"");
		valueFormated = valueFormated.replaceAll(/.-/g,"");
		if(valueFormated.length > 11) {
			valueFormated = valueFormated.substring(0, 11);
		}
		let finalString = "";
		if(valueFormated.length > 3) {
			finalString = `${finalString}${valueFormated.substring(0, 3)}.`;
			if(valueFormated.length > 6) {
				finalString = `${finalString}${valueFormated.substring(3, 6)}.`;
				if(valueFormated.length > 9) {
					finalString = `${finalString}${valueFormated.substring(6, 9)}-${valueFormated.substring(9)}`;
				} else {
					finalString = `${finalString}${valueFormated.substring(6)}`;
				}
			} else {
				finalString = `${finalString}${valueFormated.substring(3)}`;
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

