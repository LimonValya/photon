<template lang="pug">
div.MainFrame
    button.btnMainLogo Photon
    div.menuGroup <!-- -->
        div.btnMain(v-if="adminBut== false" roles="USER")
        button.btnMain(v-else="adminBut== true" roles="ADMIN" @click="this.$router.push('/Admin')") Администратор
        button.btnMain Курсы
        button(@click="goAuth()").btnSignUp Вход
authModal(v-show="authmodal == true" @authmodal="goAuth()").authcomp
         div.lkOutDiv
              span(v-show="authed == true").lkStyle {{profileName}}
              button.lkOut(@click="exitMethod()") Выход
</template>
<script>
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
        }
    },
    components: {
        authModal
    }
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
</style>