import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from 'react-redux';
import { dark, light } from './lib/palette';
import Header from './organisms/Header';
import DrugTreeView from './organisms/DrugTreeView';

const darkTheme = createTheme({
  palette: dark,
});
const lightTheme = createTheme({
  palette: light,
});

const App = () => {
  const { darkMode } = useSelector((state) => state.global);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline>
        <Header />
        <DrugTreeView />
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
