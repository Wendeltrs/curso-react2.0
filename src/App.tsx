import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { ThemeProvider } from "@mui/material";
import { LightTheme } from "./shared/themes/Light";

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
        }}
      >
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
