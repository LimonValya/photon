<template lang="pug">
div.authStyle
    div.MainFrameAuth 
        div.AuthBack(v-show="b")
          div.titleAuth
            button(@click="authmodal()").btnAuthBack Х
          div.spanTitle
            span Авторизация
          div.inputAuth
            span Логин
            input.inputStyle(v-model="auth.login" :class="{inpStyleERR: validation.dataErr}")
          div.inputAuth
            span Пароль
            input(type="password" v-model="auth.password" :class="{inpStyleERR: validation.dataErr}").inputStyle
          div.spanTitle
            span.spanERR(v-show="validation.dataErr == true") Неправильный пароль или логин
          div.spanTitle
            button.authBtn(@click='authMethod()') Войти
          div.regspanTitle <!--регистрация  -->
              button.regBtn(@click='changeMetod()') Регистрация
        div.registration(v-show="a").AuthBack
          div.titleReg.titleAuth
            button.btnRegBack.btnAuthBack(@click='changeMetod()')
          div.titleAuth.spanTitle
            button(@click='changeMetod()').btnAuthBack &larr;
          div.spanTitle2.spanTitle
            span Регистрация
          div.inputReg.inputAuth
            span Имя 
            input(v-model="reg.name").inputStyle
          div.inputReg.inputAuth
            span Фамилия
            input(v-model="reg.surname").inputStyle
          div.inputReg.inputAuth
            span Логин 
            input(v-model="reg.login1").inputStyle
          div.inputReg.inputAuth
            span Пароль
            input(v-model="reg.password1").inputStyle
          div.spanTitle
            span.spanERR(v-show="validation.dataErr1 == true") Ошибка регистрации
            span.spanOK(v-show="validation.dataOK == true") Регистрация успешна
          div.spanTitle2.spanTitle.buttonReg
            button.RegisBtn(@click='regMethods()').authBtn Зарегистрироваться
    </template>
<script>
import {mapState} from "vuex"
export default {
  data() {
    return {
      validation: {
        dataErr: false,
        dataOK: false
      },
      auth: {
        login: "",
        password: "",
      },
      reg: {
        name: "",
        surname:"",
        login1:"",
        password1:"",
      },
      loginIN: false,
      a:false,
      b:true,

    };
  },
  methods: {
    async regMethods(){
      const response = await fetch("auth/registration", {
        method: "POST",
          headers: {"Content-Type":"application/json"},
          body:JSON.stringify({
              name: this.reg.name,
              surname: this.reg.surname,
              username: this.reg.login1,
              password: this.reg.password1
      }),
    })
    if(response.status == 400 || response.status == 492 || response.status == 490)
    {this.validation.dataErr1 = true}
    else { this.validation.dataOK = true}
    },
  
    async authMethod() {
      const response = await fetch("auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.auth.login,
          password: this.auth.password,
        }),
      });
      if (response.status == 400) {
        this.validation.dataErr = true;
      } else {
        const resJson = await response.json();
        const token = resJson.token;
        this.$store.commit("auth/newToken", token);
        this.$store.commit("auth/authExit", true);
        this.$emit("authmodal",true)
        this.loginIN = !this.loginIN;
      }
    }, 
    changeMetod(){
      this.a=!this.a,
      this.b=!this.b
        },
    authmodal(){
            this.$emit("authmodal",true)
        },
    exitMethod() {
      const token = "";
      const profileName = "";
      this.$store.commit("auth/newToken", token);
      this.$store.commit("auth/authExit", false);
      this.$store.commit("auth/updateName", profileName);
    },
  },
  computed: {
    ...mapState({
      token: (state) => state.auth.token,
      authed: (state) => state.auth.authed,
      profileName: (state) => state.auth.profileName,
    }),
  },
};
</script>
<style lang="scss" scoped>
.lkOutDiv {
  display: flex;
  flex-direction: column;
  position: relative;
}
.lkOut {
  display: none;
  position: absolute;
  top: 100%;
  left: 1vw;
  font-size: 0.8vw;
  border: none;
  background: #214CCF;
  color: white;
  font-family: "Inter Regular";
}
.lkStyle {
  font-size: 1vw;
  margin: 0 0 0 1vw;
  font-family: "Inter Regular";
  color: #214CCF;
  font-weight: 500;
}
.lkOutDiv:hover > .lkOut {
  display: inherit;
}
.inpStyleERR {
  border: 3vw;
  border: red;
  background: rgba(232, 115, 115, 0.28);
  box-shadow: 0px 0px 0.08vw 0.08vw red;
}
.spanERR {
  color: red;
  font-size: clamp(15px, 1vw, 20px);
}
.regspanTitle {
  display: flex;
  justify-content: center;
  margin-bottom: 2vw;
}
.authBtn {
  font-size: 1.5vw;
  border: none;
  padding: 0.8vw;
  padding-left: 1vw;
  padding-right: 1vw;
  border-radius: 10px;
  background: #214CCF;
  color: white;
}
.regBtn {
  border: none;
  background: none;
  font-family: "Inter Regular";
  font-size: 1.2vw;
}
.regBtn:hover {
  cursor: pointer;}

.inputStyle {
  font-size: 1.2vw;
  padding: 0.4vw 0 0.4vw;
}
.btnAuthBack {
  border: none;
  font-size: 1.4vw;
  background: transparent;
  margin: 0.5vw 1vw 0 0;
}
.inputAuth {
  display: grid;
  grid-template-columns: 9% 30%;
  justify-content: center;
  gap: 1vw;
  align-items: center;
  font-family: "Inter Regular";
  font-size: 0.9vw;
  text-align: end;
}
.spanTitle {
  display: flex;
  justify-content: center;
  font-size: 2vw;
  font-family: "Inter Regular";
}
.titleAuth {
  display: flex;
  justify-content: flex-end;
}
.MainFrameAuth {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  outline: 0;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
.AuthBack {
  background: white;
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 50%;
  border-radius: 1vw;
  justify-content: space-between;
}
.authStyle {
  position: fixed; /* фиксированное положение */
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5); /* цвет фона */
  z-index: 1050;
  -webkit-transition: opacity 200ms ease-in;
  -moz-transition: opacity 200ms ease-in;
  transition: opacity 200ms ease-in; /* анимация перехода */
  pointer-events: none; /* элемент невидим для событий мыши */
  margin: 0;
  padding: 0;
  opacity: 1; /* делаем окно видимым */
  pointer-events: auto; /* элемент видим для событий мыши */
  overflow-y: auto; /* добавляем прокрутку по y, когда элемент не помещается на страницу */
}
.cartStyle {
  width: clamp(38px, 2vw, 98px);
}
.buttonGroup {
  display: flex;
  align-items: center;
}
.line {
  margin: 20px 0px 20px 0px;
  border-bottom: 1px solid #214CCF;
}
.btnMainLogo {
  border: none;
  background: none;
  color: #214CCF;
  font-size: 27px;
  font-family: "Inter Regular";
  font-style: normal;
  font-weight: 600;
}
.btnMain {
  margin: 0px 17px 0px 17px;
  border: none;
  background: none;
  color: #000000;
  font-size: clamp(14px, 1vw, 98px);
  font-family: "Inter Regular";
  font-style: normal;
  font-weight: 600;
}
.btnSignUp {
  margin: 0px 17px 0px 17px;
  border: none;
  padding: 0.8vw;
  padding-left: 1vw;
  padding-right: 1vw;
  border-radius: 10px;
  background: #214CCF;
  color: white;
  font-size: clamp(14px, 1vw, 98px);
  font-family: "Inter Regular";
  font-style: normal;
  font-weight: 600;
}
.btnMenu {
  margin: 0px 1vw 0px 1vw;
  border: none;
  background: none;
  color: #000;
  font-size: clamp(18px, 1.2vw, 98px);
  font-family: "Inter Regular";
  font-style: normal;
  font-weight: 600;
}
.menuGroup1 {
  display: flex;
  gap: 1vw;
  justify-content: space-around;
  align-items: center;
}
.menuGroup2 {
  display: flex;
  gap: 1vw;
  justify-content: center;
  align-items: center;
}
.MainFrame {
  display: flex;
  justify-content: space-between;
  margin: 1vw;
  flex-direction: column;
}
</style>
