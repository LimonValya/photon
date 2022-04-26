<template lang="pug">
div.MainFrame
    div.imageFrame
     img(src="@/assets/image/573.jpg").imageBoss
     span.textBoss Photon- освещай счастливые мгновения!
    div.FrameSchool
     span.TitleSchool О школе
     div.FrameSchoolColums
      img(src="@/assets/image/75.jpg").imageSchool
      p.School
       | Photon – новая школа фотографии для всех. 
       | Мы поможем вам показать красоту мира правильно! 
       |Проходите бесплатные уроки по разным направлениям фотографии в любое время и из любого города. 
       |После прохождения урока вы можете выполнить задание и оставить для оценки нашим преподавателем.
       | Он даст вам свои рекомендации и советы. Лучшие работы будут выставлены в галерею.
    div.FrameGallery
     span.TitleSchool Галерея
    div.FrameCourse
     span.TitleSchool Курсы
      div.FrameCourseColums
      h2.School Основы фотографии
      div
      img(src="@/assets/image/14.jpg").imgBabyCourse
      p.School
       |Главное что нужно знать начинающему фотографу.
       |Не знаете, что такое диафрагма и баланс белого?
       |Проблемы с встроенной вспышкой? Как правильно выстроить композицию? Тогда вам сюда!
div.
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.MainFrame{
    width: 100%;
    margin: 0 auto;
  
}

.container {
    display:inline-block;   
    position:relative;
}
.container div { 
    display: none;
    position: absolute; 
    bottom: 10px; left: 0px; 
    background-color: rgba(0,0,0,.4); 
    padding: 5px 5px 5px 10px;
    color: white
}
.container:hover div {
    display: block 
}
.imageFrame{
    width: 100%;
    margin: 0 auto;
}
.TitleSchool{
    text-align: left;
    vertical-align: top;
    font-family: "Inter Regular";
    color: #214CCF;
    font-size: 2vw;
    font-family: 'Inter Regular';
    font-style: normal;
    font-weight: 400;
}

.School{
    font-family: "Inter Regular";
    color: black;
    font-size: 1.5vw;
    font-family: 'Inter Regular';
    font-style: normal;
    font-weight: 400;
}
.FrameSchool{
  padding: 5%;
  margin: 0%;
  }
.FrameSchoolColums{
    padding: 5%;
  margin: 0%;
  column-count: 2;
}
  .FrameGallery{
  padding: 5%;
  margin: 0%;
  }
  .FrameCourse{
  padding: 5%;
  margin: 0%;
  }
  .FrameCourseColums{
  padding: 5%;
  margin: 0%;
  column-count: 2;
  }
  
.imageBoss{
    width: 100%;
    z-index: -1;
}
.imageSchool{
    width: 400px;
    border: 15px solid rgba(0, 0, 0, 0.58);
}
.imgBabyCourse{
    width: 400px;
    border: 2px solid rgba(0, 0, 0, 0.58);
}
.textBoss{
    position:absolute;
    top: 90%;
    left:25%;
    font-size: 9mm;
    font-family: "Inter Regular";
    color: white;
}
</style>