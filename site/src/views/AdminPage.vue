<template lang="pug">
div.MainFrame
  div(v-show="delCourse == true").addStyle
    div.MainFrameCourse <!-- модальное окно удаления курса -->
      div.delCourse
        div.titleAdd
          button(@click="delCourse = !delCourse").btnAddBack ✖
        div.spanAdd
          span Удалить курс
        div.inputAdd
          span Название курса
          input.inputStyle(type="name" v-model="course.name")
        div.spanTitle
          span.spanERR1.spanERR(v-show="validation.dataErr1 == true") Данного курса нет
          span.spanOK1.spanOK(v-show="validation.dataOk1 == true") Успешно
        div.spanDell.spanAdd
          button.sendBtn(@click='delMethod()') Удалить

  div(v-show="delLesson == true").addStyle
    div.MainFrameCourse <!-- модальное окно удаления урока -->
      div.delLesson.delCourse
        div.titleAdd
          button(@click="delLesson = !delLesson").btnAddBack ✖
        div.spanAdd
          span Удалить урок
        div.inputAdd
          span id урока
          input.inputStyle(type="name" v-model="lesson.lessonName")
        div.spanTitle
          span.spanERR1.spanERR(v-show="validation.dataErr1 == true") Данного урока нет в курсе
          span.spanOK1.spanOK(v-show="validation.dataOk1 == true") Успешно
        div.spanDell.spanAdd
          button.sendBtn(@click='delMethod()') Удалить

  div(v-show="addCourse == true").addStyle
    div.MainFrameCourse <!--модальное окно добавления курса  -->
      div.addCourse
        div.titleAdd
          button(@click="addCourse = !addCourse").btnAddBack ✖
        div.spanAdd
          span Добавить курс
        div.inputAdd
          span Название курса
          input.inputStyle(type="name" v-model="course.name")
        div.inputAdd
          span Описание
          textarea.inputStyle(type="text" v-model="course.description")
        div.spanTitle
          span.spanERR(v-show="validation.dataErr == true") Ошибка 
          span.spanOK(v-show="validation.dataOk == true") Успешно
        div.spanAdd 
          button.sendBtn(@click='addMethod()') Сохранить     
   
  div(v-show="createLesson == true").addStyle
    div.MainFrameCourse <!--модальное окно добавления урока  -->
      div.createLesson
        div.titleAdd
          button(@click="createLesson = !createLesson").btnAddBack ✖
        div.spanAdd
          span Добавить урок
        div.inputAdd
          span Название урока
          input.inputStyle(type="name" v-model="lesson.name")
        div.inputAdd
          span Текст
          textarea.inputStyle(type="text" v-model="lesson.text")
        div.inputAdd
          span Изображения <!-- функция formdata  -->
          input(type="file"  accept="image/*") 
        div.spanTitle
          span.spanERR(v-show="validation.dataErr == true") Ошибка 
          span.spanOK(v-show="validation.dataOk == true") Успешно
        div.spanAdd 
          button.sendBtn(@click='createLessonK()') Сохранить     
  div.add
    button.addBtn(@click="addCourse = !addCourse") Добавить курс
  div.del
    button.delBtn.addBtn(@click="delCourse = !delCourse") Удалить курс 
  div.add
    button.addBtn(@click="createLesson = !createLesson") Добавить урок
  div.del
    button.delBtn.addBtn(@click="delLesson = !delLesson") Удалить урок <!-- по id -->


</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      a: false,
      addCourse: false,
      delCourse: false,
      createLesson: false,
      delLesson: false,
      selected: "",
      validation: {
        dataErr: false,
        dataOk: false,
        dataErr1: false,
        dataOk1: false,
      },
      course: {
        name: "",
        text: "",
      },
      lesson: {
        usernameCreate: " ",
        lessonName: " ",
        text: [],
        img: [],
        comments: [],
      },
    };
  },
  methods: {
    async createLessonK(){
      const formData = new FormData()
      formData.append('usernameCreate', "profileName")
      formData.append('lessonName', this.lesson.lessonName)
      formData.append('text', this.lesson.text)
      formData.append('img', this.lesson.img)
      const response = await fetch("auth/createlesson", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${this.token}`,
        },
        body: formData
      });
    },
    async addMethod() {
      const response = await fetch("auth/addCourse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
        body: JSON.stringify({
          name: this.course.name,
          text: this.course.text,
        }),
      });
      if (response.status == 400) {
        this.validation.dataErr = true;
      } else {
        this.validation.dataOk = true;
      }
    },
    async delMethod() {
      const response = await fetch("auth/delCourse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
        body: JSON.stringify({
          name: this.course.name,
        }),
      });
      if (response.status == 400 || response.status == 404) {
        this.validation.dataErr1 = true;
      } else {
        this.validation.dataOk1 = true;
      }
    },
  },
  computed: {
    ...mapState({
      token: (state) => state.auth.token,
      profileName: (state) => state.auth.profileName
    }),
  },
};
</script>
<style scoped>
.addBtn {
  margin: 10px 10px 10px 10px;
  text-align: center;
  border: none;
  padding: 0.8vw;
  padding-left: 1vw;
  padding-right: 1vw;
  border-radius: 10px;
  background: #214ccf;
  color: white;
  font-size: 0.5 vw;
  font-family: "Inter Regular";
  font-style: normal;
  font-weight: 400;
}
.spanTitle {
  display: flex;
  justify-content: center;
  font-size: 2vw;
  font-family: "Inter Regular";
}
.spanERR {
  color: red;
  font-size: clamp(15px, 1vw, 20px);
}
.spanOK {
  color: rgb(86, 255, 94);
  font-size: clamp(15px, 1vw, 20px);
}
.MainFrame {
  width: 100%;
  margin: 0;
}

.addStyle {
  position: fixed; /* фиксированное положение */
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5); /* цвет фона */
  z-index: 1050;
  transition: opacity 200ms ease-in; /* анимация перехода */
  pointer-events: none; /* элемент невидим для событий мыши */
  margin: 0;
  padding: 0;
  opacity: 1; /* делаем окно видимым */
  pointer-events: auto; /* элемент видим для событий мыши */
  overflow-y: auto;
}
.MainFrameCourse {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

  flex-direction: column;

  background-clip: padding-box;
  outline: 0;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
.addCourse {
  background: white;
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 70%;
  border-radius: 1vw;
  justify-content: space-between;
}
.createLesson {
  background: white;
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 70%;
  border-radius: 1vw;
  justify-content: space-between;
}
.delCourse {
  background: white;
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 50%;
  border-radius: 1vw;
  justify-content: space-between;
}
.titleAdd {
  display: flex;
  justify-content: flex-end;
}
.btnAddBack {
  border: none;
  font-size: 1.4vw;
  background: transparent;
  margin: 0.5vw 1vw 0 0;
}
.spanAdd {
  display: flex;
  justify-content: center;
  font-size: 2vw;
  font-family: "Inter Regular";
}
.inputAdd {
  display: grid;
  grid-template-columns: 9% 30%;
  justify-content: center;
  gap: 1vw;
  align-items: center;
  font-family: "Inter Regular";
  font-size: 0.9vw;
  text-align: end;
}
.inputStyle {
  font-size: 1.2vw;
  padding: 0.4vw 0 0.4vw;
}
.sendBtn {
  margin: 20px 0px 20px 0px;
  font-size: 1.5vw;
  border: none;
  padding: 0.8vw;
  padding-left: 1vw;
  padding-right: 1vw;
  border-radius: 10px;
  background: #214ccf;
  color: white;
}
</style>
