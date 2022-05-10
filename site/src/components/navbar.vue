<template lang="pug">
div.MainFrame
    button.btnMainLogo Photon
    div.menuGroup <!-- -->
        div.btnMain(v-if="adminBut== false" roles="USER")
        button.btnMain(v-else="adminBut== true" roles="ADMIN" @click="this.$router.push('/Admin')") Администратор
        button.btnMain(@click="this.$router.push('/course')")  Курсы
        button(@click="goAuth()" v-if="authed == false").btnSignUp Вход
        button.btnSignUp(@click="exitMethod()" v-if="authed == true") Выход  
authModal(v-show="authmodal == true" @authmodal="goAuth()").authcomp
        div.lkOutDiv
         span(v-show="authed == true").lkStyle {{profileName}}
</template>
<script>
import { mapState } from "vuex";
import authModal from "@/components/authcomponent.vue"
export default {
    data(){
        return{
            authmodal:false,
            adminBut:true,
        };
    },
    methods: {
        goAuth(){
            this.authmodal=!this.authmodal
        },
        exitMethod(){
      const token = ""
      const profileName = ""
      this.$store.commit('auth/newToken', token)
      this.$store.commit('auth/authExit', false)
      this.$store.commit('auth/updateName', profileName)
    },
    },
    components: {
        authModal
    },
    computed: {
    ...mapState({
      authed: (state) => state.auth.authed,
    }),
  },
}
</script>
<style lang="scss" scoped>
.btnMain{
    border: none;
    background: none;
    color: #214CCF;
    font-size: 2vw;
    font-family: 'Inter Regular';
    font-style: normal;
    font-weight: 400;
}
.btnMainLogo{
    border: none;
    background: none;
    color: #214CCF;
    font-size: 2.5vw;
    font-family: 'Inter Regular';
    font-style: normal;
    font-weight: 400;
}
.btnSignUp{
    border: none;
    padding: 0.7vw;
    padding-left: 1vw;
    padding-right: 1vw;
    border-radius: 0.7vw;
    background: #214CCF;
    color: white;
    font-size: 1.4vw;
    font-family: 'Inter Regular';
    font-style: normal;
    font-weight: 400;
}
.menuGroup{
    display: flex;
    gap: 1vw
}
.MainFrame{
    display: flex;
    justify-content: space-between;
    
}
.lkOutDiv:hover > .lkOut{
  display: inherit;
  }
  .lkOutDiv{
  display: flex;
  flex-direction: column;
  position: relative;
}
.lkOut{
    display: none;
    position: absolute;
    top: 100%;
    left: 1vw;
    font-size: 0.8vw;
    border: none;
    background:#214CCF;
    color: white;
    font-family: 'Inter Regular';
}
</style>