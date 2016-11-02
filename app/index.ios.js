/* tslint:disable:no-console */
import { View, AppRegistry } from 'react-native';
import React from 'react';
import EntryApp from './components/EntryApp';


let MobileDemo = React.createClass({
  render() {
    return (<View style={{ marginTop: 20 }}>
      <EntryApp />
    </View>);
  }
});


AppRegistry.registerComponent('MobileDemo', () => MobileDemo);
