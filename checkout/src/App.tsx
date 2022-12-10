import React from "react";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./themes/default";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { MAX_SNACK } from "./utils/constants";

const router = createBrowserRouter([
	{
		path: "/",
		element: <div>Hello world!</div>,
	},
]);

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
