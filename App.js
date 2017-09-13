// @flow
import App from './containers/app';
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
const store = configureStore();

type Props = {};
type State = {};
export default class Root extends React.Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
