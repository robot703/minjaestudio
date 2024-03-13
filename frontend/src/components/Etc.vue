<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@800&family=Roboto+Mono:wght@600&display=swap" rel="stylesheet">

  <div id="app" v-bind:style="{ backgroundColor: color }">
    <div class="color">
      <input type="color" v-model="color">
      <p style="margin:0.5vh 0 0 1vh; font-size: 2.5vh;"><b>Click</b></p>
    </div>

    <div class="container">
      <div style="z-index: 1;">
        <button class="open-button" @click="openModal" v-on:mouseenter="hovered = true" v-on:mouseleave="hovered = false" 
        v-bind:style="{ backgroundColor: hovered ? 'gold' : color }">OPEN</button>
      </div>

   <Logo></Logo>

      <transition name="fade">
        <div class="modal-overlay" v-if="flag">
          <div class="modal-container">
            <button class="close-button" @click="closeModal">×</button>
            <input class="comment1" v-model="nickname" placeholder="NickName">
            <input class="comment2" v-model="comment" placeholder="Comment">
            <button class="savebtn"  @click="saveAndClose" v-bind:style="{ backgroundColor: color }">SAVE</button>
          </div>
        </div>
      </transition>
      
      <div class="styled-div">
        <div v-for="(position, index) in randomPositions" :key="index" class="randombox" 
          v-bind:style="{ top: position.top + 'vh', left: position.left + 'vh' ,backgroundColor: color  }">
          <!-- 여기에 사용자 데이터를 표시합니다 -->
            <p>{{ index }}</p>
            <p>{{ userData[index].nickname }}</p>
            <p>{{ userData[index].comment }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// localStorage.clear();//localstorage삭제
import Navbar from './Navbar.vue';
import Logo from './Logo.vue'

export default {
  data() {
    return {
      flag: false,
      color: '#C0C5CE',
      hovered: false,
      nickname: '',
      comment: '',
      userData: [],
      randomPositions: [], 
    };
  },
  components: {
    Navbar,
    Logo,
  },
    mounted() {
    this.setRandomPositions(); // 컴포넌트가 마운트되면 랜덤 위치를 설정합니다.
    this.loadUserData();
  },
  methods: {
    openModal() {
      this.flag = true;
    },
    closeModal() {
      this.flag = false;
    },
    saveAndClose(event) {

      const newData = {
        id: Date.now(),
        nickname: this.nickname,
        comment: this.comment,
      };

      if (this.nickname === "") {
        alert("Nickname을 입력하세요");
      } else if (this.comment === "") {
        alert("Comment를 입력하세요");
      } else {
        this.userData.push(newData);
        localStorage.setItem("userData", JSON.stringify(this.userData));
        this.flag = false;
        this.nickname = "";
        this.comment = "";

        location.reload();
      }
    },
      setRandomPositions() {
        const MAX_TRIES = 100; // 최대 시도 횟수 설정
        const boxWidth = 23; // random box의 가로 크기
        const boxHeight = 23; // random box의 세로 크기

        for (let i = 0; i < 7; i++) {
          let top, left;
          let tries = 0;
          let overlapping;

          do {
            // 랜덤한 위치 생성
            top = this.randomPositiontop();
            left = this.randomPositionleft();

            // 겹치는지 확인
            overlapping = this.randomPositions.some(position => {
              return (
                top >= position.top - boxHeight &&
                top <= position.top + boxHeight &&
                left >= position.left - boxWidth &&
                left <= position.left + boxWidth
              );
            });

            tries++;
            // 겹치는 경우 다시 위치 생성을 시도
          } while (overlapping && tries < MAX_TRIES);

          // 최대 시도 횟수를 초과하면 기본 위치로 설정
          if (tries === MAX_TRIES) {
            top = 50; // 기본 위치
            left = 50; // 기본 위치
          }
          this.randomPositions.push({ top, left });
        }
      },
    randomPositiontop() {
      let position = Math.floor(Math.random() * (70 - 28 + 1)) + 28;
      position = Math.round(position /14) * 14;
      if (position >= 70) {
        position = 70;
      }
      return position;
    },
    randomPositionleft() {
      let position = Math.floor(Math.random() * (180 - 10 + 1)) + 10;
      position = Math.round(position /23) * 23;
      if (position <=0) {
        position = 10;
      }
      if (position >=180) {
        position = 160;
      }
      return position;
    },
    loadUserData() {
      const storedData = localStorage.getItem('userData');
      if (storedData) {
        // 저장된 데이터를 가져옵니다.
        const allUserData = JSON.parse(storedData);

        // 마지막에서 5개의 데이터만 추출하여 userData에 할당합니다.
        this.userData = allUserData.slice(-7);
      }
    },
  }
};
</script>


<style>

.randombox{
  font-family: 'Nanum Gothic', sans-serif;
  width: 23vh; 
  height: 23vh; 
  position: inherit; 
  box-shadow: 0 0.5vh 1vh rgba(0, 0, 0, 0.8);
  animation: slideUp 1s ease-in-out; /* 슬라이드 업 애니메이션 추가 */
}

@keyframes slideUp {
  from {
    transform: translateY(100vh); /* 시작 위치: 아래에서 위로 */
    opacity: 0; /* 투명도 0으로 시작 */
  }
  to {
    transform: translateY(0); /* 최종 위치: 위로 이동하지 않음 */
    opacity: 1; /* 투명도 1로 최종 설정 */
  }
}
@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }

  .styled-div {
    width: 80%;
    top: 18vh;
    height: 60vh;
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .container {
    flex-direction: column;
    align-items: center;
  }

  .styled-div {
    width: 70%;
    top: 15vh;
    height: 70vh;
  }
}

@media screen and (min-width: 1025px) {
  .container {
    flex-direction: column;
    align-items: center;
  }

  .styled-div {
    width: 95%;
    top: 20vh;
    height: 75vh;
  }
}
@import url('https://fonts.googleapis.com/css?family=Proza+Libre|Fira+Mono');
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  overflow: auto;
}

.color {
  display: flex;
  align-items: center;
}

input[type="color"] {
  width: 4vh;
  height: 4vh;
  border: 0.3vh solid rgb(0, 0, 0);
  margin: 0.5vh 0 0 0.7vh;
  padding: 0;
  cursor: pointer;
}

.container {
  margin-top: 0vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  /* position: relative; */
}

.open-button {
  position: fixed;
  top: 22vh;
  padding: 1vh 2vh;
  font-size: 2vh;
  border: none;
  cursor: pointer;
  border-radius: 0.5vh;
  transition: background-color 0.3s;
  box-shadow: 0 0.8vh 1vh rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.open-button:hover{
  background-color: #333;
}


.modal-overlay {
  position: fixed;
  top: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.modal-container {
  position: fixed;
  left: 41%;
  height: 100%;
  width: 100%;
  max-width: 46vh;
  max-height: 40vh;
  background-color: rgba(252, 252, 252, 0.514);
  border-radius: 1vh;
  padding: 1vh;
  box-shadow: 0 0.4vh 0.8vh rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.close-button {
  position: absolute;
  right: 0.5vh;
  top: 0vh;
  background: none;
  border: none;
  font-size: 3vh;
  cursor: pointer;
  color: #555;
  transition: color 0.3s;
}

.close-button:hover {
  color: #333;
}

.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-leave-to {
  opacity: 0;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter-to {
  opacity: 1;
}


.styled-div {
  background-color: white;
  position: fixed;
  border-radius: 1vh;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  opacity: 0.5;
  z-index: 0;
  display: flex;
  flex-direction: column;
}

.comment1 {
  border-radius: 1vh;
  margin-top: 2vh;
  margin-bottom: 1vh;
  max-width: 38vh;
  width: 100%;
  border: none;
  font-size: 2vh;
}

.comment2 {
  border-radius: 1vh;
  margin-bottom: 1vh;
  max-width: 38vh;
  max-height: 40vh;
  height: 100%;
  width: 100%;
  border: none;
  font-size: 2vh;
}

.savebtn {
  border-radius: 1vh;
  width: 10vh;
  border: none;
  color: white;
  font-size: 2vh;
}


</style>
