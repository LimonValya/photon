<template lang="pug">
div.MainFrame
  div(v-for="(item, mainindex) in lesson")
    div.MainFrameLesson
      div.lessonFrame
          span.lessonName {{item.lessonName}}
          div.lessonFrameText(v-for="(item, textindex) in item.text")
              p.LessonText {{item}}
              div.lessonFrameImg
                img(:src="`http://localhost:3001/uploads/${lesson[mainindex].img[textindex].filename}`").lessonImg
    div.lessonFrame3
      div.CommentsFrame
      div(v-for="(item, index) in item.comments")
        span.NameComments {{item.username}}
        text.commentsText {{item.text}}
      div.comment-flex
        textarea(type="text" v-model="text").text-area
        div.btn-flex
          button.btnSignUp(@click="postComment(lesson[mainindex]._id)") Добавить комментарий
</template>
<script>
import {mapState} from "vuex"
export default {
  data(){
    return {
      lesson: {},
      addComment: "",
      text: ""
    }
  },computed: {
    ...mapState({
      token: (state) => state.auth.token,
    }),
  },
  methods: {
    async postComment(id){
      const response = await fetch("auth/addcoment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
        body: JSON.stringify({
          lessonID: id,
          username: this.profileName,
          text: this.text
        })
      });
    },
    async getlesson(){
      const response = await fetch("auth/getlessons", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
      });
      const json = await response.json()
      this.lesson = json
    }
  },
  mounted(){
    this.getlesson()
  },
  computed: {
    ...mapState({
      token: (state) => state.auth.token,
      profileName: (state) => state.auth.profileName
    }),
  },
}
</script>
<style scoped>
.text-area{
  max-width: 100%;
  font-family: "Inter Medium";
  font-size: 1vw;
  font-style: normal;
}
.btn-flex{
  display: flex;
  justify-content: flex-end;
}
.comment-flex{
  display: flex;
  flex-direction: column;
  gap: 1vw;
}
.btnSignUp {
  border: none;
  padding: 0.8vw;
  width: 40%;
  padding-left: 1vw;
  padding-right: 1vw;
  border-radius: 10px;
  background: #214CCF;
  color: rgb(245, 245, 245);
  font-size: clamp(14px, 1vw, 98px);
  font-family: "Inter Regular";
  font-style: normal;
  font-weight: 600;
}

.commentsText {
  width: auto;
  flex-direction: column;
  display: flex;
  font-family: "Inter Medium";
  font-size: 1vw;
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
  padding: 1%;
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
  width: 90%;
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
  width: 100%;
}
.lessonFrame3 {
  flex-direction: column;
  display: flex;
  margin: 2vw;
  gap: 2vw;
}
.LessonText {
  font-family: "Inter Regular";
  color: rgb(0, 0, 0);
  font-size: 1vw;
  font-family: "Inter Regular";
  font-style: normal;
  font-weight: 400;
  flex-direction: column;
}
</style>
