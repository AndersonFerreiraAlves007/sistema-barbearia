import React, {
	forwardRef,
	useImperativeHandle,
	useState
} from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export const DialogFullscreen = forwardRef((props, ref) => {
	const [open, setOpen] = useState(false);

	useImperativeHandle(ref, () => ({
		handleOpen() {
			setOpen(true);
		},
	}));

	function handleClose() {
		setOpen(false);
	}

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="form-dialog-title"
			//disableBackdropClick
			disableEscapeKeyDown
			fullScreen
		>
			<DialogTitle id="form-dialog-title">
        teste
			</DialogTitle>
			<DialogContent dividers>
        lalala
			</DialogContent>
			<DialogActions>
				<Button onClick={() => handleClose()} color="primary">
          Cancelar (F4)
				</Button>
			</DialogActions>
		</Dialog>
	);
});

