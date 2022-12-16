import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { OutlinedTextFieldProps } from "@mui/material";
import { TextInput } from "../TextInput";

export interface NumberInputProps extends OutlinedTextFieldProps {
	value: any;
	onChange: any;
	decimalPlaces: number;
	validator: any;
	prefix: any
}

export const NumberInput: FC<NumberInputProps> = ({ value, onChange, decimalPlaces, validator, prefix, ...rest }) => {

	const handleChange = (value: any) => {
		const newValue = value;
		onChange && onChange(sanitize(newValue));
	};

	function getZeros(count: number) {
		let zeros = "";
		for (let i = 0; i < count; i++) {
			zeros += "0";
		}
		return zeros;
	}

	function sanitize(value: string): number {
		let replaceQuantity = formatNumberMask(value);
		replaceQuantity = replaceQuantity.replaceAll(/[^0-9.,]/g,"");
		replaceQuantity = replaceQuantity.replaceAll(/[.]/g,"");
		replaceQuantity = replaceQuantity.replaceAll(/,/g,".");
		return Number(replaceQuantity);
	}

	function formatNumberMask(value: string) {
		let replaceQuantity = value;
		if (value === "") {
			if(decimalPlaces <= 0) {
				return "0";
			}
			return `0,${getZeros(decimalPlaces)}`;
		}
		replaceQuantity = String(
			Number(value.replaceAll(/[^0-9]/g,""))
		);
		if(decimalPlaces > 0) {
			if (isNaN(Number(replaceQuantity))) {
				return `0,${getZeros(decimalPlaces)}`;
			} else{
				if(replaceQuantity.length <= decimalPlaces) {
					return `0,${getZeros(decimalPlaces - replaceQuantity.length)}${replaceQuantity}`;
				} else {
					if(replaceQuantity.length > decimalPlaces && replaceQuantity.length < 3 + decimalPlaces) {
						replaceQuantity = replaceQuantity.slice(0, -1 * decimalPlaces) + "," + replaceQuantity.slice(-1 * decimalPlaces);
					} else {
						const before = replaceQuantity.slice(0, -1 * decimalPlaces);
						const after = replaceQuantity.slice(-1 * decimalPlaces);
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

	const valueFormated = `${prefix}${formatNumberMask( decimalPlaces <= 0 ? String(value) : value.toLocaleString("de-DE", {
		minimumFractionDigits: decimalPlaces,
		maximumFractionDigits: decimalPlaces,
	}))}`;

	const { isError, errorMessage } = validator(value);
	
	return (
		<TextInput
			{...rest}
			id="outlined-name"
			error={isError}
			helperText={errorMessage}
			value={valueFormated}
			onChange={handleChange}
			/* validator={validator} */
		/>
	);
};

