import React, {
	forwardRef,
	useImperativeHandle,
	useState,
	useEffect
} from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TransitionProps } from "@mui/material/transitions";
import Slide from "@mui/material/Slide";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
	ref: React.Ref<unknown>,
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export const DialogScrool = forwardRef((props, ref) => {
	const [open, setOpen] = useState(false);
	const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper");
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
	const [fullWidth, setFullWidth] = React.useState(true);
	const [maxWidth, setMaxWidth] = React.useState<DialogProps["maxWidth"]>("sm");

	const descriptionElementRef = React.useRef<HTMLElement>(null);
	useEffect(() => {
		if (open) {
			const { current: descriptionElement } = descriptionElementRef;
			if (descriptionElement !== null) {
				descriptionElement.focus();
			}
		}
	}, [open]);

	useImperativeHandle(ref, () => ({
		handleOpen() {
			setOpen(true);
		},
	}));

	function handleClose() {
		setOpen(false);
	}

	return (
		<div>
			<Dialog
				open={open}
				onClose={handleClose}
				scroll={scroll}
				aria-labelledby="scroll-dialog-title"
				aria-describedby="scroll-dialog-description"
				TransitionComponent={Transition}
				keepMounted
				/* fullWidth={fullWidth}
        maxWidth={maxWidth} */
				//fullScreen={fullScreen}
			>
				<DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
				<DialogContent dividers={scroll === "paper"}>
					<DialogContentText
						id="scroll-dialog-description"
						ref={descriptionElementRef}
						tabIndex={-1}
					>
						{[...new Array(50)]
							.map(
								() => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
							)
							.join("\n")}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleClose}>Subscribe</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
});
