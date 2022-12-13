import React, { FC, useState } from "react";
import TextField from "@mui/material/TextField";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export interface TimeInputProps {

}

export const TimeInput: FC<TimeInputProps> = () => {
	const [value, setValue] = useState<any>(null);

	return (
		<TimePicker
			label="Basic example"
			value={value}
			onChange={(newValue) => {
				setValue(newValue);
			}}
			renderInput={(params) => <TextField {...params} />}
		/>
	);
};

