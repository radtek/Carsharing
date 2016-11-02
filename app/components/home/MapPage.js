import React from 'react';
import {Button, InputItem, Radio, NavBar,List} from 'antd-mobile';

import MapView  from '../MapView';

import  '../style/Location.less';


export default React.createClass({

  contextTypes: {
    router: React.PropTypes.object
  },
  
  render() {
    return (
      <div>
        <NavBar className="App-header" mode="light" 
          iconName="left" leftContent="返回"
          onLeftClick={this.onGoBack}>
          附近可租车辆
        </NavBar>

        <div className="loc-page">
          <MapView />
        </div>
          
          </div>);
    },
    onGoBack(){
    this.context.router.goBack();
  },
});
