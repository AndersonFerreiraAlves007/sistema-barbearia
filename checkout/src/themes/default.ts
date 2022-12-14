import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

declare module "@mui/material/styles" {
    interface Theme {
      status: {
        danger: string;
      };
    }
    interface ThemeOptions {
      status?: {
        danger?: string;
      };
    }
  }

const theme = createTheme({
    status: {
        danger: orange[500],
    },
});

export {theme};
