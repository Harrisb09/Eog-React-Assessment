import React from 'react';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import store from './redux/store';
import Dashboard from './pages/dashboard';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(139,149,66)',
    },
    secondary: {
      main: 'rgb(197,208,222)',
    },
    background: {
      default: 'rgb(226,231,238)',
    },
  },
});

const App: React.FC = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <Wrapper>
        <Header />
        <Dashboard />
      </Wrapper>
    </Provider>
  </MuiThemeProvider>
);

export default App;
