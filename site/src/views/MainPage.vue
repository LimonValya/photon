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
       | Проходите бесплатные уроки по разным направлениям фотографии в любое время и из любого города. 
    div.FrameCourse
     span.TitleSchool Курсы
     div.FrameCourse
     span.TitleCourse Основы фотографии
      div.FrameCourseColums
       img(src="@/assets/image/14.jpg").imgBabyCourse
       p.School
         |Главное что нужно знать начинающему фотографу.
         |Не знаете, что такое диафрагма и баланс белого?
         |Проблемы с встроенной вспышкой? Как правильно выстроить композицию? Тогда вам сюда!
       
</template>

<script >
 

  export default {
    
}

</script>
<style lang="scss" scoped>

.MainFrame{
    width: 100%;
    margin: 0 auto;
}
.columnCourse
{
background: #C7E3E4; 
left: 0;
right: 50%; 
margin-right: 100px;
}

.imageFrame{
    width: 100%;
    margin: 0.2%;
    display: flex;
    align-items: center;
    justify-content: center;
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
    font-size: 1.8vw;
    font-family: 'Inter Regular';
    font-style: normal;
    font-weight: 400;
}
.FrameSchool{
  padding: 2%;
  margin: 0%;
 
  }
.FrameSchoolColums{
    padding: 2%;
  margin: 0%;
  column-count: 2;
}
  .FrameCourse{
  padding: 2%;
  margin: 0%;
  height: auto;
  }
  .FrameCourseColums{
  padding: 0%;
  margin: 0%;
  column-count: 2;
  }
  
.imageBoss{
    width: 100%;
    z-index: -1;
}
.imageSchool{
    width: 34vw;
}
.imgBabyCourse{
    width: 34vw;
}
.TitleCourse{
   text-align: left;
    vertical-align: top;
    font-family: "Inter Regular";
    color: black;
    font-size: 2vw;
    font-family: 'Inter Regular';
    font-style: normal;
    font-weight: 400; 
}
.textBoss{
    position:absolute;
    margin-top: 10vw;
    font-size: 3vw;
    font-family: "Inter Regular";
    color: white;
}
</style>