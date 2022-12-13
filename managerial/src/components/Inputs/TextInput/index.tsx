import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export interface TextInputProps {

}

export const TextInput: FC<TextInputProps> = () => {
	const [value, setValue] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		setValue(newValue);
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

