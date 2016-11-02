<?php

/**
 *  新增  BY wang
 */

namespace Admin\Controller;

use User\Api\UserApi;

class APIController extends \Think\Controller
{

    /**
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
        $this->ajaxReturn(json_encode($ret));
    }

}
