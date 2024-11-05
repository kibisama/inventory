import { Provider } from 'react-redux';
import { store } from '../src/reduxjs@toolkit/store';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { dark, light } from '../src/lib/palette';
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

const darkTheme = createTheme({
  palette: dark,
});
const lightTheme = createTheme({
  palette: light,
});

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline>
          <Story />
        </CssBaseline>
      </ThemeProvider>
    </Provider>
  ),
];

export default preview;
