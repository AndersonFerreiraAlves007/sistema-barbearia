import React, { FC } from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Box from "@mui/material/Box";

export interface RatingInputProps {

}

const labels: { [index: string]: string } = {
	0.5: "Useless",
	1: "Useless+",
	1.5: "Poor",
	2: "Poor+",
	2.5: "Ok",
	3: "Ok+",
	3.5: "Good",
	4: "Good+",
	4.5: "Excellent",
	5: "Excellent+",
};

export const RatingInput: FC<RatingInputProps> = () => {
	const [value, setValue] = React.useState<number | null>(2);
	const [hover, setHover] = React.useState(-1);
	
	return (
		<>
			<Typography component="legend">Controlled</Typography>
			<Rating
				name="simple-controlled"
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
				onChangeActive={(event, newHover) => {
					setHover(newHover);
				}}
				defaultValue={2}
				getLabelText={(value: number) => `${value} Heart${value !== 1 ? "s" : ""}`}
				precision={0.5}
				size="small"
				icon={<FavoriteIcon fontSize="inherit" />}
				emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
			/>
			{value !== null && (
				<Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
			)}
		</>
	);
};

