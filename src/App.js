import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from 'react-redux';
import { dark, light } from './lib/palette';
import Header from './components/organisms/Header';
import DrugTreeView from './organisms/DrugTreeView';
import Main from './components/templates/Main';

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
        <Main />
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
