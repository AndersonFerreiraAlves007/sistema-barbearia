import React from "react";

import './index.css'

import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from '../src/themes/default'

const StylesDecorator = storyFn => (
    <SnackbarProvider maxSnack={6}>
        <ThemeProvider theme={theme}>
            {storyFn()}
        </ThemeProvider>
    </SnackbarProvider>
);

export default StylesDecorator;