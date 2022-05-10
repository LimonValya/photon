<template lang="pug">
div.MainFrame
  span.TitleLesson Курс: {{course.name}}
  div.MainFrameLesson
    div.lessonFrame
        span.lessonName {{lesson.lessonName}}
        div.lessonFrameText
            p.LessonText {{lesson.text}}
    div.lessonFrame2.lessonFrame 
      div.lessonFrameImg
      img(:src="require(`@/assets/${lesson.lessonName}.jpg`)").lessonImg
  div.lessonFrame3
    span.TitleComments Комментарии
    textarea.inputStyle(type="text" v-model="lesson.comments.text")
    div.CommentsFrame
    span.NameComments {{lesson.comments.username}}
    text.commentsText {{lesson.comments.text}}



</template>
<script>
import {mapState} from "vuex"
export default {
  data(){
    return {
      lesson: {
        lessonName:"",
        text: [],
        img: [],
        comments: [
        { username:"", 
        text:"" }
    ],
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
.btnSignUp {
  margin: 10px 17px 0px 17px;
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

.commentsText {
  width: auto;
  flex-direction: column;
  display: flex;
  padding-left: 1%;
}
.NameComments{
  text-align: left;
  vertical-align: top;
  font-family: "Inter Regular";
  color: #214ccf;
  font-size: 1.5vw;
  font-family: "Inter Regular";
  font-style: normal;
  font-weight: 400;
  padding: 1%;
}
.TitleComments{
  text-align: left;
  vertical-align: top;
  font-family: "Inter Regular";
  color: #214ccf;
  font-size: 2vw;
  font-family: "Inter Regular";
  font-style: normal;
  font-weight: 400;
  padding: 1%;
}
.Comments{
  width: 95%;
  height: 20%;
  margin-top: 1%;
  outline: 2px solid #000;
  border-radius: 1vw;
  display: flex;
  gap: 1vw;
  align-items:center;
}
.commetsFrame{
  width: 95%;
  margin-top: 1%;
  border-radius: 0.2vw;
  display: flex;
  gap: 1vw;
  align-items:center;
}
.lessonImg {
  width: 34vw;
  flex-direction: column;
  padding: 4%;
}
.commentsName{
  font-family: "Inter Regular";
    color: black;
    font-size: 1.2vw;
    font-family: 'Inter Regular';
    font-style: normal;
    font-weight: 400;
}
.TitleLesson {
  text-align: left;
  vertical-align: top;
  font-family: "Inter Regular";
  color: #214ccf;
  font-size: 2vw;
  font-family: "Inter Regular";
  font-style: normal;
  font-weight: 400;
  padding: 3%;
}
.lessonFrameText {
  width: auto;
  flex-direction: column;
  display: flex;
}
.lessonName {
  font-family: "Inter Regular";
  color: black;
  font-size: 1.8vw;
  font-family: "Inter Regular";
  font-style: normal;
  font-weight: 400;
}
.MainFrameLesson {
  position: relative;
  display: flex;
  flex-direction: column;
  background-clip: padding-box;
  align-items: center;
  justify-self: flex-start;
}
.lessonFrame {
  flex-direction: column;
  display: flex;
  align-items: center;
}
.lessonFrame3 {
  flex-direction: column;
  display: flex;
  height: 100vh;
}
.LessonText {
  font-family: "Inter Regular";
  color: white;
  font-size: 1vw;
  font-family: "Inter Regular";
  font-style: normal;
  font-weight: 400;
  flex-direction: column;
}
</style>
