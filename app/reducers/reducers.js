/**
 * Created by wang on 2016/10/9.
 */
import { combineReducers } from 'redux'
import { CHECK_LOGIN,
    TO_MSG_DETAIL,
    GOOFFICE_HOME_ADDR,GOHOME_HOME_ADDR,FROM_ADDRESS,MY_LINE_HOME_ADDR,
    GOOFFICE_OFFICE_ADDR,GOHOME_OFFICE_ADDR,TO_ADDRESS,MY_LINE_OFFICE_ADDR
     } from '../actions/actions'

// 登陆用户数据带入功能页面
function login(state = [], action) {

    //console.log("------state 开始--------");
    //console.log(state);
    //console.log(action);
    //console.log("------state 结束--------");

    switch (action.type) {

        case CHECK_LOGIN:
            return [
                ...state,
                {
                    userName: action.text.name,
                    completed: false
                }

            ]
        default:
            return state
    }
}
// 消息 传递给 明细
function message(state = [], action) {

    switch (action.type) {

        case TO_MSG_DETAIL:
            return [
                ...state,
                {
                    message: action.text,
                    completed: false
                }
            ]
        default:
            return state
    }
}
// 上班约车 获取 家庭地址
function goOfficeHomeAddress(state = [], action) {

    switch (action.type) {

        case GOOFFICE_HOME_ADDR:
            return [
                ...state,
                {
                    data: action.text,
                    completed: false
                }
            ]
        default:
            return state
    }
}
// 上班约车 获取 公司地址
function goOfficeOfficeAddress(state = [], action) {

    switch (action.type) {

        case GOOFFICE_OFFICE_ADDR:
            return [
                ...state,
                {
                    data: action.text,
                    completed: false
                }
            ]
        default:
            return state
    }
}
// 下班约车 获取 家庭地址
function goHomeHomeAddress(state = [], action) {

    switch (action.type) {

        case GOHOME_HOME_ADDR:
            return [
                ...state,
                {
                    data: action.text,
                    completed: false
                }
            ]
        default:
            return state
    }
}
// 下班约车 获取 公司地址
function goHomeOfficeAddress(state = [], action) {

    switch (action.type) {

        case GOHOME_OFFICE_ADDR:
            return [
                ...state,
                {
                    data: action.text,
                    completed: false
                }
            ]
        default:
            return state
    }
}
// 马上约车 获取 出发地
function fromAddress(state = [], action) {

    switch (action.type) {

        case FROM_ADDRESS:
            return [
                ...state,
                {
                    data: action.text,
                    completed: false
                }
            ]
        default:
            return state
    }
}
// 马上约车 获取 目的地
function toAddress(state = [], action) {

    switch (action.type) {

        case TO_ADDRESS:
            return [
                ...state,
                {
                    data: action.text,
                    completed: false
                }
            ]
        default:
            return state
    }
}
// 我的线路 获取 家庭地址
function myLineHomeAddress(state = [], action) {

    switch (action.type) {

        case MY_LINE_HOME_ADDR:
            return [
                ...state,
                {
                    data: action.text,
                    completed: false
                }
            ]
        default:
            return state
    }
}
// 我的线路 获取 公司地址
function myLineOfficeAddress(state = [], action) {

    switch (action.type) {

        case MY_LINE_OFFICE_ADDR:
            return [
                ...state,
                {
                    data: action.text,
                    completed: false
                }
            ]
        default:
            return state
    }
}

const todoApp = combineReducers({
    login,
    message,
    goOfficeHomeAddress,
    goOfficeOfficeAddress,
    goHomeHomeAddress,
    goHomeOfficeAddress,
    fromAddress,
    toAddress,
    myLineHomeAddress,
    myLineOfficeAddress,
})

export default todoApp