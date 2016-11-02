/**
 * Created by wang on 2016/10/9.
 */
/*
 * action 类型
 */
export const CHECK_LOGIN = 'CHECK_LOGIN';

export const TO_MSG_DETAIL = 'TO_MSG_DETAIL';

export const GOOFFICE_HOME_ADDR = 'GOOFFICE_HOME_ADDR';
export const GOOFFICE_OFFICE_ADDR ='GOOFFICE_OFFICE_ADDR';

export const GOHOME_HOME_ADDR = 'GOHOME_HOME_ADDR';
export const GOHOME_OFFICE_ADDR ='GOHOME_OFFICE_ADDR';

export const MY_LINE_HOME_ADDR = 'MY_LINE_HOME_ADDR';
export const MY_LINE_OFFICE_ADDR ='MY_LINE_OFFICE_ADDR';

export const FROM_ADDRESS = 'FROM_ADDRESS';
export const TO_ADDRESS ='TO_ADDRESS';

/*
 * 其它的常量
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    CHECK_LOGIN: 'CHECK_LOGIN'
};

/*
 * action 创建函数
 */

export function checkLogin(text) {
    return {type: CHECK_LOGIN, text}
};
export function msgDetail(text) {
    return {type: TO_MSG_DETAIL, text}
};
// 上班约车
export function goOfficeOfficeAddress(text) {
    return {type: GOOFFICE_OFFICE_ADDR, text}
};
export function goOfficeHomeAddress(text) {
    return {type: GOOFFICE_HOME_ADDR, text}
};
// 下班约车
export function goHomeOfficeAddress(text) {
    return {type: GOHOME_OFFICE_ADDR, text}
};
export function goHomeHomeAddress(text) {
    return {type: GOHOME_HOME_ADDR, text}
};
// 我的线路
export function myLineHomeAddress(text) {
    return {type: MY_LINE_HOME_ADDR, text}
};
export function myLineOfficeAddress(text) {
    return {type: MY_LINE_OFFICE_ADDR, text}
};
// 马上约车
export function fromAddress(text) {
    return {type: FROM_ADDRESS, text}
};
export function toAddress(text) {
    return {type: TO_ADDRESS, text}
};
