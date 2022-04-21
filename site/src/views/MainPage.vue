<template lang="pug">
div.MainFrame
    div.Banner 
    img(src="@/assets/image/573.jpg").imageBoss
    span.textBoss АБОБА
div.FrameScholl.TitleSchool
        span АБОБУС
        

    
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.MainFrame{
    width: 100%;
    position: absolute;
    
}
.TitleSchool{
    position: absolute;
    top: 70%;
    left:50%;
    font-family: "Inter Regular";
    color: black;
}

.FrameSchool{

    width: 25%;
    float: left;
  
}
.imageBoss{
    width: 100%;
    z-index: -1;
}
.Banner{
    width: 100vw;
    height: 100%;
    position: absolute;
    background: rgb(0, 0, 0);
    opacity: 30%;
    z-index:2 ;
}
.textBoss{
    position: absolute;
    top: 70%;
    left:50%;
    font-family: "Inter Regular";
    color: #214CCF;
}
</style>