import React from 'react';
import { Flex } from 'antd-mobile';
import FunItem from './FunItem';
import EmptyItem from './EmptyItem';

import "./grid.less";


export default React.createClass({

  render() {
    return (<div className="Grid-container">
        <Flex className="Grid-row">
          <FunItem data-image="../images/icon/office.png" data-to="gooffice">上班约车</FunItem>
          <FunItem data-image="../images/icon/home.png" data-to="gohome">下班约车</FunItem>
          <FunItem data-image="../images/icon/user.png" data-to="cauth">实名认证</FunItem>
        </Flex>

        <Flex className="Grid-row">
          <FunItem data-image="../images/icon/msg.png" data-to="msg">站内消息</FunItem>
          <FunItem data-image="../images/icon/auth2.png" data-to="auth">司机认证</FunItem>
          <FunItem data-image="../images/icon/car.png" data-to="mappage">你开我车</FunItem>
        </Flex>
    </div>);
  },

});
