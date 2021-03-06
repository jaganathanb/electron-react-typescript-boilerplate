import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { Store } from '../reducers/types';
import Routes from '../Routes';

interface Props {
  store: Store;
  history: History;
}

class Root extends Component<Props> {
  public displayName: 'Root';
  public render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default process.env.PLAIN_HMR ? Root : hot(Root);
