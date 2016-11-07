<?php

/**
 *  新增  BY wang
 */

namespace Admin\Controller;

use User\Api\UserApi;

class AppUserController extends \Think\Controller
{
    /**
     * ---------------- add by wangyinlong 2016-10-27 ------------------------------
     * App 前台用户登录接口
     */
    public function appLogin($condition)
    {

        // app来的请求json转化为对象
        $obj = json_decode($condition);

        $ret["name"] = $obj->name;
        $ret["pwd"] = $obj->pwd;
        // 调用API验证用户名及密码
        $User = new UserApi();
        $uid = $User->appLogin($ret["name"], $ret["pwd"]);

        $ret["result"] = $uid;// 返回用户数据ID 或错误码
        $ret["success"] = $uid > 0 ? 1 : 0;// 1:登陆成功 0:登陆失败

        /* 返回JSON数据 */
        $this->ajaxReturn(json_encode($ret, JSON_UNESCAPED_UNICODE));
    }

    /**
     * ---------------- add by wangyinlong 2016-10-28 ------------------------------
     * App 前台用户注册接口
     */
    public function appRegister($condition)
    {

        // app来的请求json转化为对象
        $obj = json_decode($condition);
        // echo($obj->name);

        $flg = false;
        /* 调用注册接口注册用户 */
        $User = new UserApi;
        $uid = $User->appRegister($obj->username, $obj->password, $obj->phone, $obj->name, $obj->gender);
        //注册成功
        if ($uid > 0) {
            $right = array('uid' => $uid, 'nickname' => $obj->username, 'status' => 0);// 默认没有登陆后台的权限
            // 添加是否 有 登陆后台的权限
            if (M('Member')->add($right)) {
                $flg = true;
            } else {
                $flg = false;
            }
        } else { //注册失败，显示错误信息
            $flg = false;
            $ret["error"] = $this->showRegError($uid);
        }
        // 返回用户数据ID 或错误码
        $ret["result"] = $uid;
        $ret["username"] = $obj->username;
        $ret["success"] = $flg ? 1 : 0;// 1:注册成功 0:注册失败

        /* 返回JSON数据 */
        $this->ajaxReturn(json_encode($ret, JSON_UNESCAPED_UNICODE));
    }

    /**
     * 获取用户注册错误信息
     * @param  integer $code 错误编码
     * @return string        错误信息
     */
    private function showRegError($code = 0)
    {
        switch ($code) {
            case -1:
                $error = '用户名长度必须在16个字符以内！';
                break;
            case -2:
                $error = '用户名被禁止注册！';
                break;
            case -3:
                $error = '用户名被占用！';
                break;
            case -4:
                $error = '密码长度必须在6-30个字符之间！';
                break;
            case -5:
                $error = '邮箱格式不正确！';
                break;
            case -6:
                $error = '邮箱长度必须在1-32个字符之间！';
                break;
            case -7:
                $error = '邮箱被禁止注册！';
                break;
            case -8:
                $error = '邮箱被占用！';
                break;
            case -9:
                $error = '手机格式不正确！';
                break;
            case -10:
                $error = '手机被禁止注册！';
                break;
            case -11:
                $error = '手机号被占用！';
                break;
            default:
                $error = '未知错误';
        }
        return $error;
    }

}
