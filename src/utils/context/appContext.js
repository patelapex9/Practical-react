import React, { createContext } from 'react';

const AppContext = createContext({
  appMode: '',
  updateAppMode: () => {},
});

export class AppProvider extends React.Component {
  updateAppMode = newMode => {
    this.setState({ appMode: newMode });
  };

  state = {
    appMode: 'user',
    updateAppMode: this.updateAppMode,
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const AppConsumer = AppContext.Consumer;