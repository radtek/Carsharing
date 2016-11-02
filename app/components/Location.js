import React from 'react';
import {Button, InputItem, Radio, List} from 'antd-mobile';
import { createForm } from 'rc-form';

import  './style/Location.less';


let Location = React.createClass({

    getInitialState() {
    return {
      value: 1,
    };
  },
  render() {

    const { getFieldProps } = this.props.form;

    return (<div className="loc-page">


    <List > 
    
      <List.Body>
      <InputItem {...getFieldProps('addr', {initialValue:"沃尔沃"})}
          
          placeholder="输入地点"  clear   extra={<img src="../images/icon/find.png" />}>
      </InputItem>

      <img className="loc-map" src="../images/map.jpg" />

      <Radio.RadioItem  checked={this.state.value === 1}>
        上海沃尔沃汽车技术公司
      </Radio.RadioItem>

      <Radio.RadioItem  checked={this.state.value === 2}>
        沃尔沃销售(上海)有限公司
      </Radio.RadioItem>

      <Radio.RadioItem  checked={this.state.value === 3}>
        沃尔沃汽车研发中心
      </Radio.RadioItem>

      <Radio.RadioItem  checked={this.state.value === 3}>
        上海东昌沃尔沃
      </Radio.RadioItem>
    </List.Body></List>
  </div>);
    }
});


Location = createForm()(Location);

export default Location;