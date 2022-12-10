import React, { FC } from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	//justifyContent: "flex-end",
	//padding: theme.spacing(0, 1),
	padding: "20px",
	...theme.mixins.toolbar,
}));

export interface MiniDrawerProps {
	open: boolean,
	setOpen: any
}

export const MiniDrawer: FC<MiniDrawerProps> = ({ open, setOpen }) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("sm"));

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<MuiDrawer 
			variant={matches ? "permanent" : "temporary"} 
			open={open} anchor={"left"} 
			onClose={() => {
				setOpen(!open);
			}}
			sx={ matches ? {
				flexShrink: 0,
				whiteSpace: "nowrap",
				boxSizing: "border-box",
				backgroundColor: "red",
				transition: theme.transitions.create("width", {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.leavingScreen,
				}),
				"& .MuiDrawer-paper": {
					width: open ? drawerWidth : 50,
					overflowX: "hidden",
					transition: theme.transitions.create("width", {
						easing: theme.transitions.easing.sharp,
						duration: theme.transitions.duration.leavingScreen,
					})
				}
			} : {

			}}
		>
			<DrawerHeader>
				Luanderson
				{/* <IconButton onClick={handleDrawerClose}>
					<ChevronLeftIcon />
				</IconButton> */}
			</DrawerHeader>
			<Divider />
			<List>
				{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
					<ListItem key={text} disablePadding sx={{ display: "block" }}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: open ? "initial" : "center",
								px: 2.5,
							}}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									mr: open ? 3 : "auto",
									justifyContent: "center",
								}}
							>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{["All mail", "Trash", "Spam"].map((text, index) => (
					<ListItem key={text} disablePadding sx={{ display: "block" }}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: open ? "initial" : "center",
								px: 2.5,
							}}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									mr: open ? 3 : "auto",
									justifyContent: "center",
								}}
							>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</MuiDrawer>
	);
};
