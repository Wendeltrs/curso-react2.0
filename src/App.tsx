import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import { MenuLateral } from "./shared/components";

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
        }}
      >
        <MenuLateral>
          <AppRoutes />
        </MenuLateral>
      </BrowserRouter>
    </AppThemeProvider>
  );
}
