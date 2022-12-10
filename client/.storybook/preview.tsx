import React from 'react'
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from '../src/themes/default'
import CssBaseline from "@mui/material/CssBaseline";
import { MAX_SNACK } from '../src/utils/constants'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [], 
      locales: '', 
    },
  },
}

export const decorators = [
  (Story) => (
    <SnackbarProvider maxSnack={MAX_SNACK}>
        <ThemeProvider theme={theme}>
						<CssBaseline />
            <Story/>
        </ThemeProvider>
    </SnackbarProvider>
  ),
];