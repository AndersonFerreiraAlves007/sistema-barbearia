import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { OutlinedTextFieldProps } from "@mui/material";
import { NumberInput } from "../NumberInput";

export interface PriceInputProps extends OutlinedTextFieldProps {
	value: any;
	onChange: any;
	validator?: any;
}

export const PriceInput: FC<PriceInputProps> = ({ value, onChange, validator, ...rest }) => {
	
	return (
		<Box sx={{ display: "flex" }}>
			<NumberInput
				{...rest}
				id="outlined-name"
				value={value}
				onChange={onChange}
				prefix="R$: "
				decimalPlaces={2}
				validator={validator}
			/>
		</Box>
	);
};

