<template>
    <div>
        <div class="container setting">
            <div class="row">
                <div class="aside">
                    <ul>
                        <li class="router-link-exact-active active">
                            <a href="/settings/basic">
                                <div class="setting-icon">
                                    <i class="ion ion-navicon-round"></i>
                                </div>
                                <span>基础设置</span>
                                <!---->
                            </a>
                        </li>
                        <li class="">
                            <a href="/settings/profile">
                                <div class="setting-icon">
                                    <i class="ion ion-ios-person"></i>
                                </div>
                                <span>个人资料</span>
                                <!---->
                            </a>
                        </li>
                        <li class="">
                            <a href="/settings/misc">
                                <div class="setting-icon">
                                    <i class="ion ion-gear-a"></i>
                                </div>
                                <span>帐号管理</span>
                                <!---->
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-xs-16 main">
                    <table>
                        <thead>
                            <tr>
                                <th class="setting-head responsive-head"></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody class="base">
                            <tr>
                                <td class="top-line">
                                    <div class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/4111605/92756e53c8b0?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/300"></div>
                                </td>
                                <td class="top-line">
                                    <a class="btn btn-hollow"><input unselectable="on" type="file" class="hide"> 更改头像
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="setting-title">
                                    昵称
                                </td>
                                <td><input type="text" placeholder="请输入昵称"></td>
                            </tr>
                            <tr>
                                <td class="setting-title">电子邮件</td>
                                <td class="setted">
                                    <div>32******43@qq.com</div>
                                    <i class="iconfont ic-collections-followed"></i>
                                    <span>已验证</span>
                                    <a class="cancel-bind">解除绑定</a>
                                </td>
                            </tr>
                            <tr>
                                <td class="setting-title">手机</td>
                                <td class="setted">
                                    <div>177****8276</div>
                                    <i class="iconfont ic-collections-followed"></i>
                                    <span>已验证</span>
                                    <a class="cancel-bind">解除绑定</a>
                                </td>
                            </tr>
                        </tbody>
                    </table> <input type="submit" class="btn btn-success setting-save" value="保存">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Settings"
};
</script>

<style>
.container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
}
.setting .aside {
    top: 0;
    bottom: 0;
    margin: 16px 0 0;
    padding: 0 0 30px;
    width: 280px;
}
.setting .aside a {
padding: 10px 15px;
font-size: 15px;
display: block;
}
.setting .aside ul {
    list-style: none;
}
.setting .aside li.active a,
.setting .aside li:hover a {
    background-color: #f0f0f0;
    border-radius: 4px;
}
.setting .aside .setting-icon {
    margin-right: 15px;
    width: 32px;
    height: 32px;
    text-align: center;
    color: #fff;
    background-color: #a0a0a0;
    border-radius: 4px;
    display: inline-block;
    vertical-align: middle;
}
.setting .aside .setting-icon i {
    margin: 6px 0 0 1px;
    font-size: 18px;
    display: block;
}
.setting .main {
    padding-left: 0;
    margin-top: 30px;
    margin-left: 50px;
}
.col-xs-offset-8 {
    margin-left: 33.33333%;
}
.col-xs-16 {
    width: 66.66667%;
}
.setting .main table {
    width: 100%;
}
.setting .main .setting-save {
    width: 100px;
    margin: 30px 0 60px;
    border-radius: 20px;
    border: none;
}
.setting .main .top-line {
    padding-top: 0;
}
.setting .main td {
    padding: 20px 0;
}
.setting .main .avatar {
    width: 100px;
    height: 100px;
}
.setting .main .btn-delete,
.setting .main .btn-hollow {
    font-size: 14px;
}
.setting .main .hide {
    position: absolute;
    display: block !important;
    width: 82px;
    opacity: 0;
}
.setting .main .setting-title {
    font-size: 15px;
    color: #969696;
}
.setting .main input[type="email"],
.setting .main input[type="text"] {
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid #c8c8c8;
    border-radius: 4px;
    background-color: hsla(0, 0%, 71%, 0.1);
}
.setting .main .setted div {
    font-size: 15px;
    display: inline-block;
}
.setting .main .setted i {
    margin: 0 0 0 10px;
    font-size: 12px;
    color: #969696;
    vertical-align: middle;
}
.setting .main .setted a,
.setting .main .setted span {
    margin: 0 0 0 3px;
    font-size: 14px;
    color: #969696;
}
.setting .main span {
    vertical-align: middle;
}
.setting .main .setted a {
    margin-left: 8px;
}
.setting .main .cancel-bind {
    display: none;
}
.setting .main .setting-save {
    width: 100px;
    margin: 30px 0 60px;
    border-radius: 20px;
    border: none;
}
</style>

