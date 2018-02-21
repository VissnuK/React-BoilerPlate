/* eslint no-undef: 0 */
/* eslint global-require: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import ApplicationContainer from './containers/AppContainer';
import configureStore from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

require('es6-promise').polyfill();

const store = configureStore();

const renderApp = (Component) => {
  ReactDOM.render(
    <MuiThemeProvider>
      <AppContainer>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route path="/" component={App} />
              <Route path="/sample" component={App} />
              <Route path="/Sample" component={App} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </AppContainer>
    </MuiThemeProvider>

    , document.getElementById('root'),
  );
};

renderApp(ApplicationContainer);

if (module.hot) {
  module.hot.accept('./containers/AppContainer.jsx', () => {
    const NextRootContainer = require('./containers/AppContainer.jsx').default;
    renderApp(NextRootContainer);
  });
}
