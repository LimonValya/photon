<template lang="pug">
Navbar
router-view
Footer
</template>
<script>
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
export default {
    components:{
      Navbar,Footer
    }
}
</script>
<style lang="scss">
  html{}
  #app{}
@font-face {
    font-family: 'Inter Bold Italic';
    src: local('Inter Bold Italic'), local('Inter-BoldItalic'),
        url('@/assets/fonts/Inter-BoldItalic.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/Inter-BoldItalic.woff2') format('woff2'),
        url('@/assets/fonts/Inter-BoldItalic.woff') format('woff'),
        url('@/assets/fonts/Inter-BoldItalic.ttf') format('truetype');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Inter Medium Italic';
    src: local('Inter Medium Italic'), local('Inter-MediumItalic'),
        url('@/assets/fonts/Inter-MediumItalic.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/Inter-MediumItalic.woff2') format('woff2'),
        url('@/assets/fonts/Inter-MediumItalic.woff') format('woff'),
        url('@/assets/fonts/Inter-MediumItalic.ttf') format('truetype');
    font-weight: 500;
    font-style: italic;
}

@font-face {
    font-family: 'Inter Thin Italic BETA';
    src: local('Inter Thin Italic BETA'), local('Inter-ThinItalicBETA'),
        url('@/assets/fonts/Inter-ThinItalicBETA.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/Inter-ThinItalicBETA.woff2') format('woff2'),
        url('@/assets/fonts/Inter-ThinItalicBETA.woff') format('woff'),
        url('@/assets/fonts/Inter-ThinItalicBETA.ttf') format('truetype');
    font-weight: 100;
    font-style: italic;
}

@font-face {
    font-family: 'Inter Regular';
    src: local('Inter Regular'), local('Inter-Regular'),
        url('@/assets/fonts/Inter-Regular.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/Inter-Regular.woff2') format('woff2'),
        url('@/assets/fonts/Inter-Regular.woff') format('woff'),
        url('@/assets/fonts/Inter-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Inter Black';
    src: local('Inter Black'), local('Inter-Black'),
        url('@/assets/fonts/Inter-Black.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/Inter-Black.woff2') format('woff2'),
        url('@/assets/fonts/Inter-Black.woff') format('woff'),
        url('@/assets/fonts/Inter-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Inter Black Italic';
    src: local('Inter Black Italic'), local('Inter-BlackItalic'),
        url('@/assets/fonts/Inter-BlackItalic.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/Inter-BlackItalic.woff2') format('woff2'),
        url('@/assets/fonts/Inter-BlackItalic.woff') format('woff'),
        url('@/assets/fonts/Inter-BlackItalic.ttf') format('truetype');
    font-weight: 900;
    font-style: italic;
}

@font-face {
    font-family: 'Inter Light BETA';
    src: local('Inter Light BETA'), local('Inter-LightBETA'),
        url('@/assets/fonts/Inter-LightBETA.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/Inter-LightBETA.woff2') format('woff2'),
        url('@/assets/fonts/Inter-LightBETA.woff') format('woff'),
        url('@/assets/fonts/Inter-LightBETA.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Inter  Semi Bold';
    src: local('Inter Semi Bold'), local('Inter-SemiBold'),
        url('@/assets/fonts/Inter-SemiBold.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/Inter-SemiBold.woff2') format('woff2'),
        url('@/assets/fonts/Inter-SemiBold.woff') format('woff'),
        url('@/assets/fonts/Inter-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Inter Extra Bold Italic';
    src: local('Inter Extra Bold Italic'), local('Inter-ExtraBoldItalic'),
        url('@/assets/fonts/Inter-ExtraBoldItalic.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/Inter-ExtraBoldItalic.woff2') format('woff2'),
        url('@/assets/fonts/Inter-ExtraBoldItalic.woff') format('woff'),
        url('@/assets/fonts/Inter-ExtraBoldItalic.ttf') format('truetype');
    font-weight: 800;
    font-style: italic;
}

@font-face {
    font-family: 'Inter Bold';
    src: local('Inter Bold'), local('Inter-Bold'),
        url('@/assets/fonts/Inter-Bold.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/Inter-Bold.woff2') format('woff2'),
        url('@/assets/fonts/Inter-Bold.woff') format('woff'),
        url('@/assets/fonts/Inter-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Inter Extra Light Italic BETA';
    src: local('Inter Extra Light Italic BETA'), local('Inter-ExtraLightItalicBETA'),
        url('@/assets/fonts/Inter-ExtraLightItalicBETA.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/Inter-ExtraLightItalicBETA.woff2') format('woff2'),
        url('@/assets/fonts/Inter-ExtraLightItalicBETA.woff') format('woff'),
        url('@/assets/fonts/Inter-ExtraLightItalicBETA.ttf') format('truetype');
    font-weight: 200;
    font-style: italic;
}

@font-face {
    font-family: 'Inter Extra Light BETA';
    src: local('Inter Extra Light BETA'), local('Inter-ExtraLightBETA'),
        url('@/assets/fonts/Inter-ExtraLightBETA.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/Inter-ExtraLightBETA.woff2') format('woff2'),
        url('@/assets/fonts/Inter-ExtraLightBETA.woff') format('woff'),
        url('@/assets/fonts/Inter-ExtraLightBETA.ttf') format('truetype');
    font-weight: 200;
    font-style: normal;
}

@font-face {
    font-family: 'Inter Extra Bold';
    src: local('Inter Extra Bold'), local('Inter-ExtraBold'),
        url('@/assets/fonts/Inter-ExtraBold.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/Inter-ExtraBold.woff2') format('woff2'),
        url('@/assets/fonts/Inter-ExtraBold.woff') format('woff'),
        url('@/assets/fonts/Inter-ExtraBold.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
}

@font-face {
    font-family: 'Inter  Thin BETA';
    src: local('Inter Thin BETA'), local('Inter-ThinBETA'),
        url('@/assets/fonts/Inter-ThinBETA.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/Inter-ThinBETA.woff2') format('woff2'),
        url('@/assets/fonts/Inter-ThinBETA.woff') format('woff'),
        url('@/assets/fonts/Inter-ThinBETA.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
}

@font-face {
    font-family: 'Inter Light Italic BETA';
    src: local('Inter Light Italic BETA'), local('Inter-LightItalicBETA'),
        url('@/assets/fonts/Inter-LightItalicBETA.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/Inter-LightItalicBETA.woff2') format('woff2'),
        url('@/assets/fonts/Inter-LightItalicBETA.woff') format('woff'),
        url('@/assets/fonts/Inter-LightItalicBETA.ttf') format('truetype');
    font-weight: 300;
    font-style: italic;
}

@font-face {
    font-family: 'Inter Italic';
    src: local('Inter Italic'), local('Inter-Italic'),
        url('@/assets/fonts/Inter-Italic.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/Inter-Italic.woff2') format('woff2'),
        url('@/assets/fonts/Inter-Italic.woff') format('woff'),
        url('@/assets/fonts/Inter-Italic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Inter Semi Bold Italic';
    src: local('Inter Semi Bold Italic'), local('Inter-SemiBoldItalic'),
        url('@/assets/fonts/Inter-SemiBoldItalic.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/Inter-SemiBoldItalic.woff2') format('woff2'),
        url('@/assets/fonts/Inter-SemiBoldItalic.woff') format('woff'),
        url('@/assets/fonts/Inter-SemiBoldItalic.ttf') format('truetype');
    font-weight: 600;
    font-style: italic;
}

@font-face {
    font-family: 'Inter Medium';
    src: local('Inter Medium'), local('Inter-Medium'),
        url('@/assets/fonts/Inter-Medium.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/Inter-Medium.woff2') format('woff2'),
        url('@/assets/fonts/Inter-Medium.woff') format('woff'),
        url('@/assets/fonts/Inter-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}
</style>
