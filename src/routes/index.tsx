import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import { IconHome } from "@tabler/icons-react";

export const AppRoutes = () => {
  const { toggleIsDrawerOpen, setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        to: '/pagina-inicial',
        icon: <IconHome />,
        label: 'Página Inicial',
      },
    ])
  }, [setDrawerOptions]);

  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={<Button variant="contained" color="primary" onClick={toggleIsDrawerOpen}>Teste</Button>}
      />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  )
};