<template>
  <div class="video"> 
    <video id="video" src="../assets/cpuVideo.mp4" autoplay muted loop></video>
  </div>
</template>

<script>
export default {
  components:{

  }
}
</script>

<style>
  .video{
    background-color: black;
    display: flex;
    justify-content: center;
  }
  #video{
    height: 80.5vh;
  }
</style>