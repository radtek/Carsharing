import React from 'react';
import {Button,Icon,SegmentedControl, ImagePicker,
   InputItem, List, WhiteSpace, Card} from 'antd-mobile';

import { createForm } from 'rc-form';
import  '../style/Line.less';
import  '../style/Rent.less';
import  '../style/Auth.less';

let CAuth = React.createClass({

  contextTypes: {
    router: React.PropTypes.object
  },


  getInitialState() {
    return {
      files: [{
        url: '../images/test/myid.jpg',
        id: '2121',
      }, {
        url: '../images/test/myid2.jpg',
        id: '2122',
      }],
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
            <List.Item
            thumb="../images/icon/click.png">
            请上传身份证正反面照片：</List.Item>
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

    <Button className="btn-setting" type="primary">点击认证</Button>
  </div>);
    }
});


CAuth = createForm()(CAuth);
export default CAuth;