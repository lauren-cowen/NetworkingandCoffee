import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import homepageContainer from './components/homepageContainer';

const App = () => (
  <MuiThemeProvider>
    <homepageContainer />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);