<template>
    <div class="logo" style="position: absolute; top: 96vh; left: 15vh;">
      <!-- 페이스북 로고 -->
      <a href="https://www.facebook.com" target="_blank">
      <img id="logo1" src="../assets/facebook.png" alt="Facebook Logo" class="logo"></a>
      <!-- 인스타그램 로고 -->
      <a href="https://www.instagram.com" target="_blank">
      <img id="logo2" src="../assets/instagram.png" alt="Instagram Logo" class="logo"></a>
      <!-- 티스토리 로고 -->
      <a href="https://blueocean703.tistory.com/" target="_blank">
      <img id="logo3" src="../assets/tistory.png" alt="Tistory Logo" class="logo"></a>
    </div>
</template>

<script>
export default {
    name:'logo',
}
</script>

<style>
    #logo1,#logo2{
        width: 3vh;
        height: 3vh;
        margin-right: 3vh;
        cursor: pointer;
    }
    #logo3{
        width:12vh;
        height: 3vh;
        cursor: pointer;
    }
</style>