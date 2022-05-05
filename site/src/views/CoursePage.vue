<template lang="pug">
div.MainFrame
  span.TitleSchool Курсы
  div.MainFrameCourse
    div.courseFrame
      div.NameCourse
      span.courseName Основы фотографии
      p.School
         |Главное что нужно знать начинающему фотографу.
         |Не знаете, что такое диафрагма и баланс белого?
         |Проблемы с встроенной вспышкой? Как правильно выстроить композицию? Тогда вам сюда!
      button(@click="this.$router.push('/lesson')").btnSignUp Читать далее
  


</template>
<script>
import {mapState} from "vuex"
export default {
  data(){
    return {
      course: {
        name: "",
        description:"",
      }
      
    }
  },computed: {
    ...mapState({
      token: (state) => state.auth.token,
    }),
  },
}


</script>
<style scoped>

.TitleSchool{
    text-align: left;
    vertical-align: top;
    font-family: "Inter Regular";
    color: #214CCF;
    font-size: 2vw;
    font-family: 'Inter Regular';
    font-style: normal;
    font-weight: 400;
    padding: 3%;
}
.MainFrameCourse {
    position: relative;
    display: flex;
    flex-direction: column;
    background-clip: padding-box;
    outline: 0;
    height: 100vh;
    align-items: center;
    justify-self: flex-start;
}
.courseFrame{
  width: 95%;
  height: 20%;
  margin-top: 1%;
  background: #214CCF;
  border-radius: 1vw;
  display: flex;
  gap: 1vw;
  align-items:center;
}
.btnSignUp {
  margin: 0px 17px 0px 17px;
  border: none;
  padding: 0.8vw;
  padding-left: 1vw;
  padding-right: 1vw;
  border-radius: 10px;
  background: white;
  color: #214CCF;
  font-size: clamp(14px, 1vw, 98px);
  font-family: "Inter Regular";
  font-style: normal;
  font-weight: 600;
}
.courseName{
  font-family: "Inter Regular";
    color: white;
    font-size: 1.8vw;
    font-family: 'Inter Regular';
    font-style: normal;
    font-weight: 400;
}
.School{
    font-family: "Inter Regular";
    color: white;
    font-size: 1vw;
    font-family: 'Inter Regular';
    font-style: normal;
    font-weight: 400;
}

</style>