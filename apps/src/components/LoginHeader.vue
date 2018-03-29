<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark row" style="margin-right:0px;background:#325987;">
      <div class="col-sm-9">
        <a class="navbar-brand" href="#/" style="float:left;">
          锦鲤阅读
        </a>
        <div class="navbar-nav" style="float:left;">
          <a class="nav-item nav-link active" href="#/">首页
            <span class="sr-only">(current)</span>
          </a>
          <a class="nav-item nav-link active" href="#">下载App</a>
        </div>
        <form class="form-inline my-2 my-lg-0" style="float:right;">
          <input class="form-control mr-sm-2" type="search" placeholder="搜索" aria-label="Search">
          <button class="btn btn-outline-light my-2 my-sm-0" type="button">搜索</button>
        </form>
      </div>
      <div class="col-sm-3" style="text-align:right;">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              <i class="ion ion-ios-bell fs-1"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">
              <i class="ion ion-ios-cart fs-1"></i>
            </a>
          </li>
          <li class="nav-item dropdown" v-if="isLogin">
            <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-text="username">拂晓</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">个人中心</a>
              <a class="dropdown-item" href="#">设置</a>
              <div class="dropdown-divider"></div>
              <span class="dropdown-item" @click="logout()">退出</span>
            </div>
          </li>
          <li class="nav-item" v-if="!isLogin">
            <span class="nav-link" data-toggle="modal" @click="initLoginDialog()" data-target="#exampleModalCenter">登录/注册</span>
          </li>
        </ul>
      </div>
    </nav>
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <nav class="nav nav-tabs">
              <a class="flex-sm-fill text-sm-center nav-link" :class="{'active':isLoginTab}" @click="toggleLogin()" href="#">登录</a>
              <a class="flex-sm-fill text-sm-center nav-link" :class="{'active':!isLoginTab}" @click="toggleRegister()" href="#">注册</a>
            </nav>
            <button type="button" id="CloseModel" class="close" data-dismiss="modal" aria-label="Close" style="margin-top: -40px;">
              <span aria-hidden="true">&times;</span>
            </button>
            <form style="margin-top:20px;" v-show="isLoginTab">
              <div class="form-group">
                <input type="email" class="form-control" v-model="loginUserName" id="exampleInputEmail1" placeholder="请输入登录邮箱/手机号">
              </div>
              <div class="form-group">
                <input type="password" class="form-control" v-model="loginPassword" id="exampleInputPassword1" placeholder="6-16位密码,区分大小写">
              </div>
              <div v-show="loginMessage" v-text="loginMessage" class="form-text error"></div>
              <div class="form-check">
                <input type="checkbox" v-model="isChecked" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">7天内自动登录</label>
                <span style="float:right;" class="form-check-label" for="exampleCheck1">
                  <a href="#" class="text-muted">忘记密码？</a>
                </span>
              </div>
              <button type="button" style="margin-top: 10px;font-size: 1rem;border-radius: 0px;" class="btn btn-primary btn-lg btn-block" @click="login()">
                登录</button>
              <div class="form-group" style="padding-top: 15px;">
                <span class="form-check-label text-muted">其他登录方式</span>
                <span class="form-check-label" style="margin: 5px;cursor:pointer;">
                  <span class="ion ion-social-tux" style="font-size:26px;position: relative;top: 5px;left: 10px;"></span>
                </span>
                <span class="form-check-label" style="margin: 10px;cursor:pointer;">
                  <span class="ion ion-social-github" style="font-size:26px;position: relative;top: 4px;left: 10px;"></span>
                </span>
                <span class="form-check-label" style="margin: 10px;cursor:pointer;">
                  <span class="ion ion-social-snapchat" style="font-size:26px;position: relative;top: 5px;left: 10px;"></span>
                </span>
                <span class="form-check-label" style="margin: 10px;cursor:pointer;">
                  <span class="ion ion-social-pinterest-outline" style="font-size:26px;position: relative;top: 5px;left: 10px;"></span>
                </span>
              </div>
            </form>
            <form style="margin-top:20px;" v-show="!isLoginTab">
              <div class="form-group">
                <input type="email" class="form-control" v-model="registerUserName" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="请输入注册邮箱/手机号">
              </div>
              <div class="form-group">
                <input type="password" class="form-control" v-model="registerPassword" id="exampleInputPassword2" placeholder="6-16位密码,区分大小写">
              </div>
              <div class="form-row">
                <div class="col-7">
                  <input type="text" style="height: 50px;" v-model="registerCode" class="form-control" id="code" placeholder="请输入验证码">
                </div>
                <div class="col">
                  <img v-bind:src="verifyImage" @click="getVerifycode()" title="点击刷新">
                </div>
              </div>
              <div v-show="registerMessage" v-text="registerMessage" style="margin-top: 5px;" class="form-text error"></div>
              <div class="form-check" style="margin-top: 10px;">
                <input type="checkbox" class="form-check-input" id="exampleCheck2">
                <label class="form-check-label" for="exampleCheck1">同意
                  <a href="#">注册协议</a>
                </label>
              </div>
              <button type="button" style="margin-top: 10px;font-size: 1rem;border-radius: 0px;" class="btn btn-primary btn-lg btn-block" @click="register()">
                注册</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { verifyEmail, verifyPhone } from "../assets/js/common.js";
export default {
  name: "LoginHeader",
  data() {
    return {
      verifyId: "",
      verifyImage: "",
      isLogin: false,
      isLoginTab: true,
      isChecked: false,
      loginUserName: "",
      loginPassword: "",
      loginMessage: "",
      registerUserName: "",
      registerPassword: "",
      registerCode: "",
      registerMessage: "",
      username: ""
    };
  },
  mounted: function() {
    this.validlogin();
  },
  methods: {
    initLoginDialog: function() {
      this.initLoginInfo();
      this.initLoginStyle();
      this.initRegisterInfo();
      this.initRegisterStyle();
    },
    initLoginInfo: function() {
      this.loginMessage = "";
      this.loginUserName = "12345678910";
      this.loginPassword = "123456";
      this.isChecked = false;
    },
    initLoginStyle: function() {
      $("#exampleInputEmail1").removeClass("input-error");
      $("#exampleInputPassword1").removeClass("input-error");
    },
    initRegisterInfo: function() {
      this.registerMessage = "";
      this.registerUserName = "";
      this.registerCode = "";
      this.registerPassword = "";
    },
    initRegisterStyle: function() {
      $("#exampleInputEmail2").removeClass("input-error");
      $("#exampleInputPassword2").removeClass("input-error");
      $("#code").removeClass("input-error");
    },
    login: function() {
      this.initLoginStyle();
      if (
        !verifyEmail(this.loginUserName) &&
        !verifyPhone(this.loginUserName)
      ) {
        this.loginMessage = "请输入正确的登录邮箱/手机号";
        $("#exampleInputEmail1").addClass("input-error");
        return;
      } else if (
        this.loginPassword.length < 6 ||
        this.loginPassword.length > 16
      ) {
        this.loginMessage = "请输入6-16位密码,区分大小写";
        $("#exampleInputPassword1").addClass("input-error");
        return;
      }
      this.$http
        .post(this.WebApi + "/api/login", {
          username: this.loginUserName,
          password: this.loginPassword,
          checked: this.isChecked ? "on" : "off"
        })
        .then(
          function(data) {
            data = data.body;
            if (data.Status == "success") {
              this.isLogin = true;
              this.username =
                data.Data.Email == "NULL" ? data.Data.Phone : data.Data.Email;
              $("#CloseModel").click();
              this.initLoginInfo();
            } else {
              if (data.ErrCode == "ErrorFormatter") {
                this.loginMessage = "请输入正确的登录邮箱/手机号";
                $("#exampleInputEmail1").addClass("input-error");
              } else if (data.ErrCode == "Too Long") {
                this.loginMessage = "请输入6-16位密码,区分大小写";
                $("#exampleInputPassword1").addClass("input-error");
              } else if (data.ErrCode == "Authentication Failed") {
                this.loginMessage = "用户名或密码不正确";
              }
            }
          },
          function(data) {
            console.log(data);
          }
        );
    },
    logout: function() {
      this.$http.get(this.WebApi + "/api/logout", {}).then(
        function(data) {
          this.username = "";
          this.isLogin = false;
        },
        function(data) {
          console.log(data);
        }
      );
    },
    validlogin: function() {
      this.$http.get(this.WebApi + "/api/validLoginStatus", {}).then(
        function(data) {
          data = data.body;
          if (data.Status == "success") {
            this.username =
              data.Data.Email == "NULL" ? data.Data.Phone : data.Data.Email;
            this.isLogin = true;
          } else {
            console.log(data.ErrCode);
          }
        },
        function(data) {
          console.log(data);
        }
      );
    },
    register: function() {
      this.initRegisterStyle();
      if (
        !verifyEmail(this.registerUserName) &&
        !verifyPhone(this.registerUserName)
      ) {
        this.registerMessage = "请输入正确的登录邮箱/手机号";
        $("#exampleInputEmail2").addClass("input-error");
        return;
      } else if (
        this.registerPassword.length < 6 ||
        this.registerPassword.length > 16
      ) {
        this.registerMessage = "请输入6-16位密码,区分大小写";
        $("#exampleInputPassword2").addClass("input-error");
        return;
      } else if (this.registerCode.length == 0) {
        this.registerMessage = "请输入验证码";
        $("#code").addClass("input-error");
        return;
      }
      this.$http
        .post(this.WebApi + "/api/register", {
          username: this.registerUserName,
          password: this.registerPassword,
          verifyValue: this.registerCode,
          id: this.verifyId
        })
        .then(
          function(data) {
            data = data.body;
            if (data.Status == "success") {
              this.isLogin = true;
              $("#CloseModel").click();
              this.initRegisterInfo();
              this.username =
                data.Data.Email == "NULL" ? data.Data.Phone : data.Data.Email;
            } else {
              if (data.ErrCode == "ErrorFormatter") {
                this.registerMessage = "请输入正确的登录邮箱/手机号";
                $("#exampleInputEmail2").addClass("input-error");
              } else if (data.ErrCode == "Too Long") {
                this.registerMessage = "请输入6-16位密码,区分大小写";
                $("#exampleInputPassword2").addClass("input-error");
              } else if (data.ErrCode == "Verify Code Error") {
                this.registerMessage = "验证码验证失败";
                $("#code").addClass("input-error");
              } else if (data.ErrCode == "Exist") {
                this.registerMessage = "注册用户已经存在";
              } else if (data.ErrCode == "Insert Failed") {
                this.registerMessage = "注册失败，请重新尝试";
              }
              this.getVerifycode();
            }
          },
          function(data) {
            console.log(data);
          }
        );
    },
    toggleLogin: function() {
      this.isLoginTab = true;
    },
    toggleRegister: function() {
      this.isLoginTab = false;
      this.getVerifycode();
    },
    getVerifycode: function() {
      this.$http.get(this.WebApi + "/api/getCaptcha", {}).then(
        function(data) {
          var obj = data.body;
          if (obj != null) {
            if (obj.msg == "success") {
              this.verifyId = obj.captchaId;
              this.verifyImage = obj.data;
            }
          }
        },
        function(data) {
          console.log(data);
        }
      );
    }
  }
};
</script>