import React from 'react';
import {Button, ImagePicker,InputItem, List,DatePicker,Picker} from 'antd-mobile';
import moment from 'moment';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';
import  '../style/Line.less';
import { postURL,btnTime } from '../common/Config';

let ManageDetail = React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },
    getInitialState() {
        return {
            files: [{
                url: '../images/icon/male.png',
                id: '2121',
            }],
        };
    }, nge(date) {
        this.setState({
            date,
        });
    },
    render() {
        const { getFieldProps } = this.props.form;
        /**
         * 判断 用户 个人资料修改的是哪一部分
         * image  name     mail phone address password
         * 头像   真实姓名   邮箱  电话  常用地址   密码
         */
        let infoType = this.props.infoType,
            type = (infoType && infoType[0]) ? infoType[infoType.length - 1].data : null,
            typeStr = type === null ? "" : type.infoName,
            viewCode = "";
        /**
         * 修改 头像
         */
        if (typeStr === "image") {

        }

        /**
         * 修改真实姓名
         */
        if (typeStr === "name") {
            viewCode = (
                <List.Body>
                    <InputItem className="edit-input"
                        {...getFieldProps('name', {
                            initialValue: '',
                        })}
                               placeholder="真实姓名"
                               labelNumber={4}
                               maxLength={15}
                               clear>

                        <span className="ed-ipt-lb"> 姓名:</span>
                    </InputItem>
                </List.Body>
            );
        }
        /**
         * 修改邮箱
         */
        if (typeStr === "mail") {
            viewCode = (
                <List.Body>
                    <InputItem className="edit-input"
                        {...getFieldProps('name', {
                            initialValue: '',
                        })}
                               placeholder="邮箱"
                               labelNumber={4}
                               maxLength={50}
                               clear>

                        <span className="ed-ipt-lb"> 邮箱:</span>
                    </InputItem>
                </List.Body>
            );
        }
        /**
         * 修改电话号码
         */
        if (typeStr === "phone") {
            viewCode = (
                <div>
                    <List.Body>
                        <InputItem
                            {...getFieldProps('phone', {
                                initialValue: '',
                            })}
                            placeholder="手机号码"
                            maxLength={11}
                            clear
                            onBlur={function (e) { console.log('onBlur'); console.log(e); }}
                            onFocus={function (e) { console.log('onFocus'); console.log(e); }}>

                            <span className="ed-ipt-lb"> 手机号码:</span>
                        </InputItem>
                    </List.Body>
                    <List.Body>
                        <InputItem
                            {...getFieldProps('phoneCode', {
                                initialValue: '',
                            })}
                            placeholder="验证码"
                            maxLength={6}
                            extra={<Button id="send-code" size="small" inline
                                className="ph-cd-btn"
                                onClick={this.sendCode}>获取验证码</Button>}>

                            <span className="ed-ipt-lb"> 验证码:</span>
                        </InputItem>
                    </List.Body>
                </div>
            );
        }
        /**
         * 修改常用地址
         */
        if (typeStr === "address") {
            viewCode = (
                <List.Body>
                    <InputItem className="edit-input"
                        {...getFieldProps('name', {
                            initialValue: '',
                        })}
                               placeholder="常用地址"
                               labelNumber={4}
                               maxLength={100}
                               clear>

                        <span className="ed-ipt-lb"> 常用地址:</span>
                    </InputItem>
                </List.Body>
            );
        }
        // 修改密码
        if (typeStr === "password") {
            viewCode = (
                <div>
                    <List.Body>
                        <InputItem
                            {...getFieldProps('password', {
                                initialValue: '',
                            })}
                            labelNumber={4}
                            maxLength={30}
                            type="password"
                            placeholder="****"
                            clear>

                            <span className="ed-ipt-lb"> 原密码:</span>
                        </InputItem>
                    </List.Body>
                    <List.Body>
                        <InputItem
                            {...getFieldProps('password', {
                                initialValue: '',
                            })}
                            labelNumber={4}
                            maxLength={30}
                            type="password"
                            placeholder="****"
                            clear>

                            <span className="ed-ipt-lb"> 新密码:</span>
                        </InputItem>
                    </List.Body>
                    <List.Body>
                        <InputItem
                            {...getFieldProps('passwordSec', {
                                initialValue: '',
                            })}
                            labelNumber={4}
                            maxLength={30}
                            type="password"
                            placeholder="****"
                            clear>

                            <span className="ed-ipt-lb"> 确认密码:</span>
                        </InputItem>
                    </List.Body>
                </div>
            );
        }


        return (
            <div>
                <List >
                    {viewCode}
                </List>

                <Button className="btn-setting" type="primary" onClick={()=>this.editSubmit()}>确认</Button>
            </div>
        );
    },
    goTo(link){
        this.context.router.push(link);
    },
    editSubmit(){
        this.context.router.goBack();
    },
    sendCode(){
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
    }
});


ManageDetail = createForm()(ManageDetail);
function select(state) {
    return {
        loginUser: state.login,
        infoType: state.toMgtDetail
    };
}
export default connect(select)(ManageDetail);