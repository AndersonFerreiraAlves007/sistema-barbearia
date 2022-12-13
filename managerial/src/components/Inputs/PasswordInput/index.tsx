import React, { FC, useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export interface PasswordInputProps {

}

export const PasswordInput: FC<PasswordInputProps> = () => {
	const [value, setValue] = useState("");
	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (event: any) => {
		event.preventDefault();
	};
	
	return (
		<TextField
			id="standard-adornment-password"
			type={showPassword ? "text" : "password"}
			/* error={!!(touched && error)}
			helperText={touched && error}
			{...inputProps}
			{...props} */
			value={value}
			onChange={(e) => setValue(e.target.value)}
			fullWidth
			InputProps={{
				autoComplete: "new-password",
				startAdornment: (
					<InputAdornment position="start">
						<IconButton
							aria-label="toggle password visibility"
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
						>
							{showPassword ? <Visibility /> : <VisibilityOff />}
						</IconButton>
					</InputAdornment>
				),
			}}
		/>
	);
};

