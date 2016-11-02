import React from 'react';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';
import { Toast, Result, List,InputItem,Button } from 'antd-mobile';
import { CHECK_LOGIN,checkLogin } from '../../actions/actions';

import { postURL } from '../common/Config';
import jquery from 'jquery';

import  '../style/Login.less';
import  { Users } from '../data/Users';

let Login = React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },
    render() {
        const { getFieldProps } = this.props.form;

        return (
            <div>
                <div className="user-login">
                    <Result
                        imgUrl="../images/login/volvo_login.jpg"
                        title="与沃通行"
                    />
                    <List>
                        <List.Body >
                            <InputItem className="login-input"
                                {...getFieldProps('phone', {
                                    initialValue: 'test1',
                                })}
                                       placeholder="请输入用户名"
                                       labelNumber={4}
                                       maxLength={10}
                                       clear

                            >用户名:</InputItem>
                            <InputItem
                                {...getFieldProps('password', {
                                    initialValue: 'test1',
                                })}
                                labelNumber={4}
                                maxLength={10}
                                type="password"
                                placeholder="****"
                            >密码:</InputItem>

                        </List.Body>
                    </List>

                </div>
                <Button className="btn-setting" onClick={this.onSubmit} type="primary">登录</Button>
                <Button className="btn-reg-setting" onClick={this.toRegister} type="ghost">注册</Button>
            </div>);
    },
    toRegister() {
        this.context.router.push("/register");
    },
    onSubmit() {
        const { dispatch } = this.props;
        const { router } = this.context;

        let userName = this.props.form.getFieldValue("phone");
        let password = this.props.form.getFieldValue("password");

        let str = JSON.stringify({name: userName, pwd: password});

        console.log("--------- 验证登陆:参数 ----------");
        console.log(str);

        // 发送json请求 , 并 返回数据
        jquery.getJSON(postURL + '/api/appLogin/condition/' + str,
            function (data) {
                let user = JSON.parse(data);

                console.log("--------- 验证登陆:返回结果 ----------");
                console.log(user);

                if (user.success === 1) {

                    Toast.success('登陆成功！', 2);
                    // 传递数据到App其他功能
                    dispatch(checkLogin({name: userName, pwd: password}));
                    // 页面跳转
                    router.push("/home");

                } else if (user.result === -2) {
                    Toast.fail('密码错误！', 2);

                } else {
                    Toast.fail('账号不存在！', 2);
                }

            }
        );
        //let flg = false;
        //for (let i = 0; i < Users.length; i++) {
        //    let m = Users[i];
        //    if (userName === m.name && password === m.pwd) {
        //        flg = true;
        //        break;
        //    }
        //}
        //if (flg) {
        //    Toast.success('登陆成功！', 2);
        //
        //    //fetch('/admin/index.php?s=/admin/api/login/user/' + str, {
        //    //    method: 'POST',
        //    //    headers: new Headers({
        //    //        'Accept': 'application/json',
        //    //        "Content-Type": "application/json;charset=UTF-8"
        //    //    })
        //    //})
        //    //    .then((response) => response.text())
        //    //    .then((responseText) => {
        //    //        console.log("-----success----");
        //    //        console.log(responseText)
        //    //        console.log(JSON.parse(responseText));
        //    //    })
        //    //    .catch((err) => {
        //    //        console.log("-----error----");
        //    //        console.log(err);
        //    //    });
        //
        //    dispatch(checkLogin({name: userName, pwd: password}));
        //
        //    this.context.router.push("/home");
        //}
        //else {
        //    Toast.fail('用户名或密码错误，请重试！', 2);
        //}
    }

});

Login = createForm()(Login);

export default connect()(Login);