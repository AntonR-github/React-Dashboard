import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import TopBar from './scenes/global/TopBar';
import Sidebar from './scenes/global/SideBar';
import Dashboard from './scenes/dashboard/index';
import Team from './scenes/team/index';
import Contacts from './scenes/contacts/index';
import Invoices from './scenes/invoices/index';
import Form from './scenes/form/index';
import Calendar from './scenes/calendar/index';
import FAQ from './scenes/faq/index.jsx';
import Bar from './components/BarChart/BarChart';
import Pie from './components/PieChart/PieChart';
import Line from './components/LineChart/LineChart';
import Geography from './components/GeographyChart/GeographyChart';


function App() {
  
  const [theme, colorMode] = useMode();  // use custom hook to get theme and color mode

  return (
  <ColorModeContext.Provider value={colorMode}> {/* add color mode to ColorModeContext.Provider */}
    <ThemeProvider theme={theme}> {/* add theme to ThemeProvider */}
      <CssBaseline /> {/* add CssBaseline to reset default styles*/}
    <div className="app">
      <Sidebar />
      <main className="content">
        <TopBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
           <Route path="/team" element={<Team />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/form" element={<Form />} />
          <Route path="/calendar" element={<Calendar />} /> 
          <Route path="/faq" element={<FAQ />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/pie" element={<Pie />} />
          <Route path="/line" element={<Line />} />
          <Route path="/geography" element={<Geography />} />
        </Routes>
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
