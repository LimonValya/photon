<template lang="pug">
div.MainFrame
  div(v-show="delItems == true").addStyle
    div.MainFrameItems <!-- модальное окно удаления урока -->
      div.delItems
        div.titleAdd
          button(@click="delItems = !delItems").btnAddBack ✖
        div.spanAdd
          span Удалить урок
        div.inputAdd
          span Название
          input.inputStyle(type="name" v-model="item.name")
        div.spanTitle
          span.spanERR1.spanERR(v-show="validation.dataErr1 == true") Данного урока нет в курсе
          span.spanOK1.spanOK(v-show="validation.dataOk1 == true") Успешно
        div.spanDell.spanAdd
          button.sendBtn(@click='delMethod()') Удалить
  div(v-show="addItems == true").addStyle
    div.MainFrameItems <!--модальное окно добавления  -->
      div.addItems
        div.titleAdd
          button(@click="addItems = !addItems").btnAddBack ✖
        div.spanAdd
          span Добавить урок
        div.inputAdd
          span Название
          input.inputStyle(type="name" v-model="item.name")
        div.inputAdd
         
        div.selectCategor.inputAdd
          span Выберите курс
          input.inputStyle(type="category" v-model="item.category")
        div.spanTitle
          span.spanERR(v-show="validation.dataErr == true") Ошибка 
          span.spanOK(v-show="validation.dataOk == true") Успешно
        div.spanAdd 
          button.sendBtn(@click='addMethod()') Сохранить     
  div.add
    button.addBtn(@click="addItems = !addItems") Добавить новый курс
    button.addBtn(@click="addItems = !addItems") Добавить новый урок
  div.del
    button.delBtn.addBtn(@click="delItems = !delItems") Удалить урок


</template>
<script>
import {mapState} from "vuex"
export default {
    data() {
    return {
    a: false,
    addItems: false,
    delItems: false,
    selected: "",
    validation: {
        dataErr: false,
        dataOk: false,
        dataErr1: false,
        dataOk1: false,
      },
    item: {
        name: "",
        discription: "",
      },
    }
},
methods: {
    async addMethod(){
      const response = await fetch("auth/addItems", {
        method: "POST",
         headers: {"Content-Type": "application/json",
                  "Authorization": `Bearer ${this.token}`
                  },
         body: JSON.stringify({
           name: this.item.name,
           amount: this.item.amount,
           weight: this.item.weight,
           category: this.item.category,
           price: this.item.price,
           discription: this.item.discription,
      }),        
    })
    if(response.status == 400){
      this.validation.dataErr = true
    }
    else{
      this.validation.dataOk = true
        }
    },
    async delMethod(){
      const response = await fetch("auth/delItems", {
        method: "POST",
         headers: {"Content-Type": "application/json",
                  "Authorization": `Bearer ${this.token}`
                  },
         body: JSON.stringify({
           name: this.item.name,
      }),        
    })
    if(response.status == 400 || response.status == 404){
      this.validation.dataErr1 = true
    }
    else{
      this.validation.dataOk1 = true
        }
    },
},
computed: {
    ...mapState({
            token: state => state.auth.token
    })
}
}
</script>
<style>
.spanTitle{
  display: flex;
  justify-content: center;
  font-size: 2vw;
  font-family: "Inter Regular";
}
.spanERR{
  color: red;
  font-size: clamp(15px, 1vw, 20px);
}
.spanOK{
    color: rgb(86, 255, 94);
  font-size: clamp(15px, 1vw, 20px);
}
.MainFrame{
    width: 100%;
    margin: 0;
}

.addStyle{
    position: fixed; /* фиксированное положение */
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.5); /* цвет фона */
    z-index: 1050;
    -webkit-transition: opacity 200ms ease-in; 
    -moz-transition: opacity 200ms ease-in;
    transition: opacity 200ms ease-in; /* анимация перехода */
    pointer-events: none; /* элемент невидим для событий мыши */
    margin: 0;
    padding: 0;
    opacity: 1; /* делаем окно видимым */
	  pointer-events: auto; /* элемент видим для событий мыши */
    overflow-y: auto;
}
.MainFrameItems{
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
.addItems{
    background: white;
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 70%;
    border-radius: 1vw;
    justify-content: space-between;
  }
.delItems{
    background: white;
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 50%;
    border-radius: 1vw;
    justify-content: space-between;
  }
.titleAdd{
  display: flex;
  justify-content: flex-end;
}
.btnAddBack{
  border: none;
  font-size: 1.4vw;
  background: transparent;
  margin: 0.5vw 1vw 0 0;
}
.spanAdd{
  display: flex;
  justify-content: center;
  font-size: 2vw;
  font-family: "Inter Regular";
}
.inputAdd{
  display: grid;
  grid-template-columns: 9% 30%;
  justify-content: center;
  gap: 1vw;
  align-items: center;
  font-family: "Inter Regular";
  font-size: 0.9vw;
  text-align: end;
}
.inputStyle{
  font-size: 1.2vw;
  padding: 0.4vw 0  0.4vw;
}
.sendBtn{
  margin: 20px 0px 20px 0px;
  font-size: 1.5vw;
  border: none;
  padding: 0.8vw;
  padding-left: 1vw;
  padding-right: 1vw;
  border-radius: 10px;
  background: #214CCF;
  color: white;
}
</style>