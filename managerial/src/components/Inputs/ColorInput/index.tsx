import React, { useState, FC } from "react";
import { CirclePicker } from "react-color";

import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import CheckIcon from "@mui/icons-material/Check";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const colors = [
	"#f44336",
	"#e91e63",
	"#9c27b0",
	"#673ab7",
	"#3f51b5",
	"#2196f3",
	"#03a9f4",
	"#00bcd4",
	"#009688",
	"#4caf50",
	"#8bc34a",
	"#cddc39",
	"#ffeb3b",
	"#ffc107",
	"#ff9800",
	"#ff5722",
	"#795548",
	"#607d8b",
];

const CIRCLES_VISIBLE = 3;

export interface ColorInputProps {

}

export const ColorInput: FC<ColorInputProps> = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [value, onChange] = useState("");

	function createVetor() {
		const vetor = [];
		for (let i = 0; i < CIRCLES_VISIBLE; i += 1) {
			vetor.push(i);
		}
		return vetor;
	}

	const vetorAux = createVetor();

	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover-color" : undefined;

	const changeColorPopover = (newColor: any) => {
		onChange(newColor);
		handleClose();
	};

	const checkFirst = () => {
		for (let i = 0; i < CIRCLES_VISIBLE; i += 1) {
			if (value === colors[i]) {
				return false;
			}
		}
		return true;
	};

	const isCheckFirst = checkFirst();

	return (
		<>
			<Box display="flex" alignItems="center">
				<Box marginRight="10px">
					<Avatar
						sx={{
							color: isCheckFirst ? "white" : colors[colors.length - 1],
							backgroundColor: isCheckFirst ? value : colors[colors.length - 1],
							width: "28",
							height: "28",
							cursor: "pointer",
						}}
						onClick={() => onChange(colors[colors.length - 1])}
					>
						<CheckIcon />
					</Avatar>
				</Box>
				{vetorAux.map((item) => (
					<Box marginRight="10px" key={item}>
						<Avatar
							sx={{
								color: colors[item] === value ? "white" : colors[item],
								backgroundColor: colors[item],
								width: "28",
								height: "28",
								cursor: "pointer",
							}}
							onClick={() => onChange(colors[item])}
						>
							<CheckIcon />
						</Avatar>
					</Box>
				))}
				<Box>
					<Button
						variant="contained"
						sx={{
							borderRadius: "50px",
						}}
						onClick={handleClick}
					>
            Outros
					</Button>
				</Box>
			</Box>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "center",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "center",
				}}
			>
				<Paper style={{ padding: "20px" }}>
					<CirclePicker
						color={value}
						onChange={(color: any) => changeColorPopover(color.hex)}
					/>
				</Paper>
			</Popover>
		</>
	);
};

