import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { createTheme } from '@mui/material/styles';
import { useSelector } from "react-redux";
import { themeSettings } from "theme";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "./views/Dashboard";
import Layout from "./views/Layout";

function App() {
  const mode = useSelector((state) => state.global.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />} >
              <Route
                path="/"
                element={<Navigate to="/dashboard" replace />} 
                />
              <Route
                path="/dashboard"
                element={<Dashboard />}
              />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
