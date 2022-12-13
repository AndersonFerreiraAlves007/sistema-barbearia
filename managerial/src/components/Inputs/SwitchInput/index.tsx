import React, { FC } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export interface SwitchInputProps {

}

export const SwitchInput: FC<SwitchInputProps> = () => {
	const [checked, setChecked] = React.useState(true);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};
	
	return (
		<FormGroup>
			<FormControlLabel control={<Switch checked={checked}
				onChange={handleChange}
				inputProps={{ "aria-label": "controlled" }} />} label="Label" />
			{/* <FormControlLabel disabled control={<Switch />} label="Disabled" /> */}
		</FormGroup>
	);
};

