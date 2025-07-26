import { Navigate, Route, Routes } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import { IconHome } from "@tabler/icons-react";
import { Dashboard } from "../pages";

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

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
        element={<Dashboard />}
      />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  )
};