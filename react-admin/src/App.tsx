import { Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import Dashboard from "./scenes/dashboard";
import Topbar from "./scenes/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import Sidebar from "./scenes/global/Sidebar";
import Team from "./scenes/Team";
import Contacts from "./scenes/Contacts";
import Invoices from "./scenes/Invoices";
import Form from "./scenes/Form";
import Calendar from "./scenes/Calendar";
import FAQ from "./scenes/FAQ";
// import Bar from "./scenes/Bar";
// import Line from "./scenes/Line";
// import Pie from "./scenes/Pie";
// import Geography from "./scenes/Geography";

function App() {
  const { theme, colorMode } = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />

            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />

              {/* 
              <Route path="/bar" element={<Bar />} />
              <Route path="/line" element={<Line />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/geography" element={<Geography />} />
            */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
