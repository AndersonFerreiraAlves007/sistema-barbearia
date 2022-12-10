import React from "react";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./themes/default";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
	return (
		<SnackbarProvider maxSnack={6}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
			</ThemeProvider>
		</SnackbarProvider>
	);
}

export default App;
