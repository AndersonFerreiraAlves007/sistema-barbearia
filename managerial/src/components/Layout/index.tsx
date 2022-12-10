import React, { FC, useState } from "react";
import { AppBar } from "../Appbar";
import { MiniDrawer } from "../Drawer";
import Box from "@mui/material/Box";

export interface LayoutProps {

}

export const Layout: FC<LayoutProps> = () => {
	const [open, setOpen] = useState(false);
	return (
		<Box sx={{ display: "flex" }}>
			<AppBar open={open} setOpen={setOpen}/>
			<MiniDrawer open={open} setOpen={setOpen}/>
		</Box>
	);
};

