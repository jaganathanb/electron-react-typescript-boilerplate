import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default class App extends Component<Props> {
  public props: Props;

  public render() {
    const { children } = this.props;
    return <React.Fragment>{children}</React.Fragment>;
  }
}
