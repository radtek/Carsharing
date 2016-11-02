import React from 'react';
import {Button,Icon,SegmentedControl, ImagePicker,
   InputItem, List, WhiteSpace, Card} from 'antd-mobile';

import { createForm } from 'rc-form';
import  './style/Line.less';
import  './style/Rent.less';


let RendTo = React.createClass({

  contextTypes: {
    router: React.PropTypes.object
  },


  getInitialState() {
    return {
      files: [{
        url: '/images/car/1-1.jpg',
        id: '2121',
      }, {
        url: '/images/car/1-2.jpg',
        id: '2122',
      }, {
        url: '/images/car/1-3.jpg',
        id: '2123',
      },],
    };
  },

  onChange(e) {
    let selectedIndex =  e.nativeEvent.selectedSegmentIndex;
    let link = "torent";
    if(selectedIndex>0)
    {
      link = "rentto";
    }
    this.context.router.push(link);
  },



  render() {    
  
  const { getFieldProps } = this.props.form;
    return (<div className="rent-page">
    

     <List >
        <List.Body>
          
          <InputItem {...getFieldProps('title')} value="车子状况描述： 可预约" > </InputItem>

          <List.Item thumb="../images/icon/end.png" arrow="horizontal" onClick={() =>{this.goTo("loc")} } extra="徐汇区">
            取车地址：</List.Item>

            <List.Item
            thumb="../images/icon/account.png" arrow="horizontal" onClick={() =>{this.goTo("settime")} } extra="150元/天" error >
            租赁价格：</List.Item>
        </List.Body>
    </List>

     <List >
        <List.Body>
          <ImagePicker onChange={(files) => {
                              console.log(files);
                              this.setState({
                                files,
                              });}}
                files={this.state.files}
            />
        </List.Body>
    </List>

    <Button className="btn-setting" type="primary">点击预约</Button>
  </div>);
    }
});


RendTo = createForm()(RendTo);
export default RendTo;