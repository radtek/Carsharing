import React from 'react';
import {Button,Icon,SegmentedControl, ImagePicker,
    InputItem, List, WhiteSpace, Card,DatePicker,Picker} from 'antd-mobile';

import { createForm } from 'rc-form';
import { connect } from 'react-redux';
import moment from 'moment';
import 'moment/locale/zh-cn';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

import {toMgtDetail} from  '../../actions/actions';

import Gender from '../data/Gender';

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

let InfoManage = React.createClass({

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

        let users = this.props.loginUser;
        // console.log("-----登陆用户-----");
        // console.log(users);
        let user = (users[0] && users) ? users[users.length - 1].data : null;
        let nameStr = user === null ? "TEST" : user.name;

        return (
            <div className="rent-page">

                <List >
                    <List.Body>
                        <List.Item arrow="horizontal"
                                   extra={<div><img src='../images/icon/male.png' /></div>}>
                            头像：
                        </List.Item>
                    </List.Body>

                    <List.Body>
                        <List.Item
                            onClick={() => {this.goTo("mgtdetail","name")}}
                            arrow="horizontal" extra={nameStr}>
                            真实姓名：
                        </List.Item>
                    </List.Body>

                    <List.Body>
                        <List.Item extra={<div className="username-mgt">{nameStr}</div>}>
                            用户名：
                        </List.Item>
                    </List.Body>

                    <List.Body>
                        <Picker data={Gender} cols={1}
                            {...getFieldProps('gender')}
                                className="sex-tp" title="性别" extra="男">
                            <List.Item arrow="horizontal" extra="1">性别:</List.Item>
                        </Picker>
                    </List.Body>

                    <List.Body>
                        <DatePicker
                            mode="date"
                            title="出生日期"
                            {...getFieldProps('birthday', {
                                initialValue: initDate,
                            })}
                            minDate={minDate}>
                            <List.Item arrow="horizontal">出生日期：</List.Item>
                        </DatePicker>
                    </List.Body>

                    <List.Body>
                        <List.Item
                            onClick={() => {this.goTo("mgtdetail","mail")}}
                            arrow="horizontal" extra="123XXX@qq.com">
                            邮箱：
                        </List.Item>
                    </List.Body>

                    <List.Body>
                        <List.Item
                            onClick={() => {this.goTo("mgtdetail","phone")}}
                            arrow="horizontal" extra="189****1234">
                            手机号码：
                        </List.Item>
                    </List.Body>

                    <List.Body>
                        <List.Item
                            onClick={() => {this.goTo("mgtdetail","address")}}
                            arrow="horizontal" extra="上海中山西路XXX号">
                            常用地址：
                        </List.Item>
                    </List.Body>

                    <List.Body>
                        <List.Item
                            onClick={() => {this.goTo("mgtdetail","password")}}
                            arrow="horizontal">
                            密码修改：
                        </List.Item>
                    </List.Body>

                </List>

                <Button className="btn-setting" type="primary">确认</Button>
            </div>);
    },
    goTo(link, type){

        const { dispatch } = this.props;
        // console.log(type);
        // 个人资料类型  image name mail phone address password
        let userInfoType = {
            infoName: type
        };
        dispatch(toMgtDetail(userInfoType));

        this.context.router.push(link);
    },
    exit(){
        this.context.router.push("");
    }
});


InfoManage = createForm()(InfoManage);
function select(state) {
    return {
        loginUser: state.login
    };
}
export default connect(select)(InfoManage);