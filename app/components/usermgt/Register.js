import React from 'react';

import { Toast, Result, List,InputItem,Button,Picker,Modal } from 'antd-mobile';

import { CHECK_LOGIN, checkLogin } from '../../actions/actions';

import { createForm } from 'rc-form';
import { connect } from 'react-redux';

import { postURL,btnTime } from '../common/Config';
import jquery from 'jquery';

import  '../style/Login.less';
import  { Users } from '../data/Users';
import Gender from '../data/Gender';

const alert = Modal.alert;

let phone_ode = "";

let Register = React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },
    render() {
        const { getFieldProps } = this.props.form;
        //console.log(this.props.form.getFieldProps);
        return (
            <div>
                <div className="user-reg">
                    <List>
                        <div className="reg-top">与沃通行</div>

                        <List.Body >

                            <InputItem
                                {...getFieldProps('phone', {
                                    initialValue: '',
                                })}
                                placeholder="手机号码"
                                maxLength={11}
                                clear
                                onBlur={function (e) { console.log('onBlur'); console.log(e); }}
                                onFocus={function (e) { console.log('onFocus'); console.log(e); }}
                            >手机号码:</InputItem>

                            <InputItem
                                {...getFieldProps('phoneCode', {
                                    initialValue: '',
                                })}
                                placeholder="验证码"
                                maxLength={6}
                                extra={<Button id="send-code" size="small" inline
                                className="ph-cd-btn"
                                onClick={this.sendCode}>获取验证码</Button>}
                            >验证码:</InputItem>

                            <InputItem className="login-input"
                                {...getFieldProps('username', {
                                    initialValue: '',
                                })}
                                       placeholder="用户名"
                                       labelNumber={4}
                                       maxLength={30}
                                       clear

                            >用户名:</InputItem>

                            <InputItem
                                {...getFieldProps('password', {
                                    initialValue: '',
                                })}
                                labelNumber={4}
                                maxLength={15}
                                type="password"
                                placeholder="****"
                                clear
                            >密码:</InputItem>

                            <InputItem
                                {...getFieldProps('passwordSec', {
                                    initialValue: '',
                                })}
                                labelNumber={4}
                                maxLength={15}
                                type="password"
                                placeholder="****"
                                clear
                            >确认密码:</InputItem>

                            <InputItem className="login-input"
                                {...getFieldProps('name', {
                                    initialValue: '',
                                })}
                                       placeholder="真实姓名"
                                       labelNumber={4}
                                       maxLength={15}
                                       clear
                            >姓名:</InputItem>

                            <Picker data={Gender} cols={1}
                                {...getFieldProps('gender')}
                                    className="sex-tp" title="性别">
                                <List.Item arrow="horizontal" extra="1">
                                    <span className="input-gender">性别:</span></List.Item>
                            </Picker>

                        </List.Body>
                    </List>

                </div>
                <Button className="btn-setting" onClick={this.onSubmit} type="primary">注册</Button>
                <Button className="btn-reg-setting" onClick={this.toLogin} type="ghost">返回</Button>
                <br/>
            </div>);
    },
    toLogin() {
        this.context.router.push("/login");
    },
    sendCode(){

        let phone = this.props.form.getFieldValue("phone");
        if (phone === "" || phone.length < 11) {
            Toast.fail('请先确认手机号码!', 2);
            return;
        }
        /**
         * 随机生成 4位 手机验证码
         */
        phone_ode = Math.floor(Math.random() * 8999 + 1000) + "";
        alert('手机号码: ' + phone, '短信验证码: ' + phone_ode, [
            {text: '关闭', onPress: () => console.log('')},
        ]);
        /**
         * 设置 获取验证码按钮 可使用倒计时
         */
        let wait = btnTime; //设置秒数(单位秒)
        let t;
        let btn = document.getElementById('send-code');
        console.log(btn.disabled);
        btn.disabled = true;
        for (let i = 0; i <= wait; i++) {
            t = window.setTimeout(function () {

                btn.childNodes[0].innerText = i < wait ? ( wait - i ) + "秒" : "获取验证码";
                btn.style.background = i < wait ? "#ddd" : "#29A1F7";
                btn.style.color = i < wait ? "grey" : "white";
                btn.disabled = i < wait ? true : false;

            }, i * 1000);
        }

    },
    onSubmit() {
        console.log("-------注册开始 开始-------");

        const { dispatch } = this.props;
        const { router } = this.context;
        /**
         * 获取用户录入信息
         */
        let phone = this.props.form.getFieldValue("phone"),
            phoneCode = this.props.form.getFieldValue("phoneCode"),
            username = this.props.form.getFieldValue("username"),
            password = this.props.form.getFieldValue("password"),
            passwordSec = this.props.form.getFieldValue("passwordSec"),
            name = this.props.form.getFieldValue("name"),
            gender = this.props.form.getFieldValue("gender");
        /**
         * 信息验证
         */
        if (phone === "" || phone.length < 11) {
            Toast.fail('请先确认手机号码!', 2);
            return;
        }
        if (phone_ode !== phoneCode) {
            Toast.fail('短信验证码错误!', 2);
            return;
        }
        //if ((phone === "") || (phoneCode === "") || (username === "")
        //    || (password === "") || (passwordSec === "") || (name === "") || !gender[0]) {
        //
        //    Toast.fail('信息不完整！', 2);
        //    return;
        //}
        if (password !== passwordSec) {

            Toast.fail('确认密码不一致！', 2);
            return;
        }
        /**
         * 用户信息转化为json字符串
         */
        let userInfo = {
            phone: phone,
            phoneCode: phoneCode,
            username: username,
            password: password,
            passwordSec: passwordSec,
            name: name,
            //gender: gender[0] ? gender[0] : 1
        };
        let condition = JSON.stringify(userInfo);
        // console.log(postURL + '/api/appRegister/condition/' + condition);

        /**
         * 发送json请求 , 并 返回数据  ----功能OK---
         */
            //jquery.getJSON(postURL + '/api/appRegister/condition/' + condition,
            //    function (data) {
            //        let user = JSON.parse(data);
            //        console.log(user)
            //        if (user.success === 1) {
            //            Toast.success('注册成功！', 2);
            //            dispatch(checkLogin({name: user.username, pwd: password, uid: user.result}));
            //            router.push("/home");
            //        } else {
            //            Toast.fail(user.error, 2);
            //        }
            //    }
            //);

        Toast.success('注册成功！', 2);
        dispatch(checkLogin({name: userInfo.username, pwd: userInfo.password, uid: 111}));
        router.push("/home");

    }

});

Register = createForm()(Register);

export default connect()(Register);