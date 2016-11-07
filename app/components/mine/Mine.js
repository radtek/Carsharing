import React from 'react';
import {Button,Icon,SegmentedControl, ImagePicker,
    InputItem, List, WhiteSpace, Card,DatePicker,Picker} from 'antd-mobile';

import { createForm } from 'rc-form';
import { connect } from 'react-redux';
import moment from 'moment';
import 'moment/locale/zh-cn';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

import  '../style/Line.less';
import  '../style/Rent.less';
import  '../style/Auth.less';

const zhNow = moment().locale('zh-cn').utcOffset(8);
const initDate = moment('2000-06-15 +0800', 'YYYY-MM-DD Z').utcOffset(8);
const maxDate = moment('2018-12-03 +0800', 'YYYY-MM-DD Z').utcOffset(8);
const minDate = moment('1970-08-06 +0800', 'YYYY-MM-DD Z').utcOffset(8);

const maxTime = moment('22:00 +0800', 'HH:mm Z').utcOffset(8);
const minTime = moment('00:30 +0800', 'HH:mm Z').utcOffset(8);

const gmtNow = moment().utcOffset(0);

let Mine = React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },
    getInitialState() {
        return {
            date: zhNow,
        };
    },
    onChange(date) {
        this.setState({
            date,
        });
    },
    render() {

        const { getFieldProps } = this.props.form;
        //console.log("-----登陆用户-----");
        //console.log(this.props.loginUser);
        let users = this.props.loginUser;
        let user = users[0] ? users[users.length - 1].data : null;
        let nameStr = user === null ? "TEST" : user.name;

        return (
            <div className="rent-page">

                <List >
                    <List.Body>
                        <List.Item
                            onClick={() => {this.goTo("infomanage")}}
                            arrow="horizontal"
                            extra={<div>{nameStr} <img src='../images/icon/male.png' /></div>}>
                            姓名：
                        </List.Item>

                        <List.Item extra={<div className="username-mgt">189****1234</div>}>
                            手机号码：
                        </List.Item>

                    </List.Body>

                </List>

                <List >
                    <List.Body>
                        <List.Item
                            onClick={() => {this.goTo("cauth")}}
                            thumb="../images/icon/user.png" arrow="horizontal">
                            实名认证：</List.Item>

                        <List.Item
                            onClick={() => {this.goTo("auth")}}
                            thumb="../images/icon/auth2.png" arrow="horizontal">
                            车主认证：</List.Item>

                    </List.Body>
                </List>

                <List >
                    <List.Body>
                        <List.Item
                            thumb="../images/icon/line.png" arrow="horizontal" onClick={() =>{this.goTo("line")} }>
                            我的线路</List.Item>

                        <List.Item thumb="../images/icon/click.png" arrow="horizontal"
                                   onClick={() =>{this.goTo("booking")} }>
                            马上约车</List.Item>

                        <List.Item thumb="../images/icon/account.png" arrow="horizontal"
                                   onClick={() =>{this.goTo("orders")} }>
                            账户订单</List.Item>
                    </List.Body>
                </List>

                <Button className="btn-mine-setting" onClick={this.exit} type="ghost">退出登录</Button>
            </div>);
    },
    goTo(link){
        this.context.router.push(link);
    },
    exit(){
        this.context.router.push("");
    }
});


Mine = createForm()(Mine);
function select(state) {
    return {
        loginUser: state.login
    };
}
export default connect(select)(Mine);