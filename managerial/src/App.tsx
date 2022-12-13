import React from "react";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./themes/default";
import CssBaseline from "@mui/material/CssBaseline";
import { MAX_SNACK } from "./utils/constants";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import {
	RouterProvider,
} from "react-router-dom";
import router from "./routes";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function App() {
	return (
		<SnackbarProvider maxSnack={MAX_SNACK}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<LocalizationProvider dateAdapter={AdapterLuxon}>
					<RouterProvider router={router} />
				</LocalizationProvider>
			</ThemeProvider>
		</SnackbarProvider>
	);
}

export default App;
