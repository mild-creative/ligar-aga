import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Main from './pages/main';

const theme = createMuiTheme({
  typography: {
    fontFamily: `'Open Sans', sans-serif`
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={Main}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
