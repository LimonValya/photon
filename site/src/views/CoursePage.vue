<template lang="pug">
div.MainFrame
  div.MainFrameCourse
    div.leftcol 
    p.School
     |Содержание курса
     |
     |
     |


    div.rightcol bkjbjlbj

</template>
<script>

export default {
}



</script>
<style>

.MainFrameCourse {
    position: relative;
    display: flex;
    flex-direction: row;
    background-clip: padding-box;
    outline: 0;
    height: 100vh;
    align-items: flex-start;
    
}
.leftcol{
 float: left;
  width: 250px;
  padding: 10px;
  background: #ddd;
}
.rightcol{
  margin-left: 270px;
  padding: 10px;
  background: #eee;
}
.School{
    font-family: "Inter Regular";
    color: black;
    font-size: 1.8vw;
    font-family: 'Inter Regular';
    font-style: normal;
    font-weight: 400;
}
</style>