import React from "react";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./themes/default";
import CssBaseline from "@mui/material/CssBaseline";
import { MAX_SNACK } from "./utils/constants";
import {
	RouterProvider,
} from "react-router-dom";
import router from "./routes";

function App() {
	return (
		<SnackbarProvider maxSnack={MAX_SNACK}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<RouterProvider router={router} />
			</ThemeProvider>
		</SnackbarProvider>
	);
}

export default App;
