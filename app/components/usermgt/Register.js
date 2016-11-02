import React from 'react';

import { Toast, Result, List,InputItem,Button,Picker } from 'antd-mobile';

import { CHECK_LOGIN, checkLogin } from '../../actions/actions';

import { createForm } from 'rc-form';
import { connect } from 'react-redux';

import  '../style/Login.less';
import  { Users } from '../data/Users';
import Gender from '../data/Gender';

let Login = React.createClass({

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
                                type="phone"
                                placeholder="手机号码"
                                maxLength={13}
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
                                       maxLength={15}
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
                            >密码:</InputItem>

                            <InputItem
                                {...getFieldProps('passwordSec', {
                                    initialValue: '',
                                })}
                                labelNumber={4}
                                maxLength={15}
                                type="password"
                                placeholder="****"
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
        let wait = 30; //设置秒数(单位秒)
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
        const { dispatch } = this.props;

        let username = this.props.form.getFieldValue("username");
        let pwd = this.props.form.getFieldValue("password");
        let pwdSec = this.props.form.getFieldValue("passwordSec");

        console.log("-------注册开始 开始-------");
        if (pwd === pwdSec) {
            Toast.success('注册成功!', 2);
            this.context.router.push("/home");
        } else {
            Toast.fail('密码不同，请重新输入！', 2);
        }

    }

});

Login = createForm()(Login);
//export default Login

function select(state) {
    return {
        visibleTodos: state.login,
        visibilityFilter: state.visibilityFilter
    };
}
export default connect(select)(Login);