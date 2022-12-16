import React, { FC } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { OutlinedTextFieldProps } from "@mui/material";

export interface TextInputProps extends OutlinedTextFieldProps {
	value: any;
	onChange: any;
	//validator: any;
}

export const TextInput: FC<TextInputProps> = ({ value, onChange /* validator */, ...rest }) => {

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		onChange(newValue);
	};

	/* const { isError, errorMessage } = validator(value); */
	
	return (
		<Box sx={{ display: "flex" }}>
			<TextField
				{...rest}
				id="outlined-name"
				/* error={isError}
				helperText={errorMessage} */
				value={value}
				onChange={handleChange}
			/>
		</Box>
	);
};

