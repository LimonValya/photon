<template lang="pug">
div.MainFrame
    button.btnMainLogo Photon
    div.menuGroup <!-- -->
        button.btnMain Курсы
        button(@click="goAuth()").btnSignUp Вход
authModal(v-show="authmodal == true" @authmodal="goAuth()").authcomp
</template>
<script>
import authModal from "@/components/authcomponent.vue"
export default {
    data(){
        return{
            authmodal:false,
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
    margin: 1.5vw;
}
</style>