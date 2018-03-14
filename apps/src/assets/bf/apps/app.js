const app = new Vue({
  router
}).$mount("#jlApp")


/*
var app = new Vue({
    el: "#jlApp",
    data: {
        verifyId: "",
        verifyImage: "",
        isLogin: false,
        isLoginTab: true,
        isChecked:false,
        loginUserName: "",
        loginPassword: "",
        loginMessage: "",
        registerUserName: "",
        registerPassword: "",
        registerCode: "",
        registerMessage: "",
        username:""
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
            this.isChecked=false;
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
            if (!verifyEmail(this.loginUserName) && !verifyPhone(this.loginUserName)) {
                this.loginMessage = "请输入正确的登录邮箱/手机号";
                $("#exampleInputEmail1").addClass("input-error");
                return;
            } else if (this.loginPassword.length < 6 || this.loginPassword.length > 16) {
                this.loginMessage = "请输入6-16位密码,区分大小写";
                $("#exampleInputPassword1").addClass("input-error");
                return;
            }
            $.post("/api/login", {
                "username": this.loginUserName,
                "password": this.loginPassword,
                "checked":this.isChecked?"on":"off"
            }, function(data) {
                data = JSON.parse(data)
                if (data.Status == "success") {
                    app.isLogin = true;
                    app.username = data.Data.Email=="NULL"?data.Data.Phone:data.Data.Email;
                    $("#CloseModel").click();
                    app.initLoginInfo();
                }
                else {
                    if (data.ErrCode == "ErrorFormatter") {
                        app.loginMessage = "请输入正确的登录邮箱/手机号";
                        $("#exampleInputEmail1").addClass("input-error");
                    } else if (data.ErrCode == "Too Long") {
                        app.loginMessage = "请输入6-16位密码,区分大小写";
                        $("#exampleInputPassword1").addClass("input-error");
                    } else if (data.ErrCode == "Authentication Failed"){
                        app.loginMessage = "用户名或密码不正确";
                    }
                }
            });
        },
        logout: function() {
            $.post("/api/logout",{},function(data){
                app.username = "";
                app.isLogin = false;
            });
        },
        validlogin:function(){
            $.post("/api/validLoginStatus",{},function(data){
                data = JSON.parse(data)
                console.log(data)
                if (data.Status == "success") {
                    app.username = data.Data.Email=="NULL"?data.Data.Phone:data.Data.Email;
                    app.isLogin = true;
                }else{
                    console.log(data.ErrorCode)
                }
            });
        },
        register: function() {
            this.initRegisterStyle();
            if (!verifyEmail(this.registerUserName) && !verifyPhone(this.registerUserName)) {
                this.registerMessage = "请输入正确的登录邮箱/手机号";
                $("#exampleInputEmail2").addClass("input-error");
                return;
            } else if (this.registerPassword.length < 6 || this.registerPassword.length > 16) {
                this.registerMessage = "请输入6-16位密码,区分大小写";
                $("#exampleInputPassword2").addClass("input-error");
                return;
            } else if (this.registerCode.length == 0) {
                this.registerMessage = "请输入验证码";
                $("#code").addClass("input-error");
                return;
            }
            $.post("/api/register", {
                "username": this.registerUserName,
                "password": this.registerPassword,
                "verifyValue":this.registerCode,
                "id":this.verifyId
            },function(data){
                data = JSON.parse(data)
                if (data.Status == "success") {
                    app.isLogin = true;
                    $("#CloseModel").click();
                    app.initRegisterInfo();
                    app.username = data.Data.Email=="NULL"?data.Data.Phone:data.Data.Email;
                }
                else {
                    if (data.ErrCode == "ErrorFormatter") {
                        app.registerMessage = "请输入正确的登录邮箱/手机号";
                        $("#exampleInputEmail2").addClass("input-error");
                    } else if (data.ErrCode == "Too Long") {
                        app.registerMessage = "请输入6-16位密码,区分大小写";
                        $("#exampleInputPassword2").addClass("input-error");
                    } else if (data.ErrCode == "Verify Code Error"){
                        app.registerMessage = "验证码验证失败";
                        $("#code").addClass("input-error");
                    } else if(data.ErrCode == "Exist"){
                        app.registerMessage = "注册用户已经存在";
                    } else if(data.ErrCode == "Insert Failed"){
                        app.registerMessage = "注册失败，请重新尝试";
                    }
                    app.getVerifycode();
                }
            });
        },
        toggleLogin: function() {
            this.isLoginTab = true;
        },
        toggleRegister: function() {
            this.isLoginTab = false;
            this.getVerifycode();
        },
        getVerifycode: function() {
            $.get("/api/getCaptcha", function(data) {
                var obj = data;
                if (obj != null) {
                    if (obj.msg == "success") {
                        app.verifyId = obj.captchaId;
                        app.verifyImage = obj.data;
                    }
                }
            });
        }
    }
});
app.validlogin();
*/