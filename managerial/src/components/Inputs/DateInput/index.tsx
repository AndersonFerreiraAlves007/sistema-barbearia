import React, { FC, useState } from "react";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export interface DateInputProps {

}

export const DateInput: FC<DateInputProps> = () => {
	const [value, setValue] = useState<any>(null);

	return (
		<DatePicker
			label="Basic example"
			value={value}
			onChange={(newValue) => {
				setValue(newValue);
			}}
			renderInput={(params) => <TextField {...params} />}
		/>
	);
};

