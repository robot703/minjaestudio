<template>
  <div class="movie-list">
    <div class="movie-card" v-for="movie in movies" :key="movie.id">
      <div class="movie-poster" @click="openModal(movie.id)">
        <img :src="movie.image" alt="Movie Poster" />
      </div>
      <div class="movie-info">
        <h2>{{ movie.title }}</h2>
        <p>
          <span class="release-date">{{ movie.date }}</span>
        </p>
        <p class="rating">
          <span>{{ movie.rating }}</span>
          <img class="트로피" src="../assets/트로피.png" />
        </p>
      </div>
    </div>
  </div>
  <transition name="fade">
    <div class="modal-overlay" v-if="flag">
      <div class="modal-container">
        <div class="contest-info">
          <h3><strong>{{ datas[누른거].title }}</strong></h3>
          <table>
            <tr>
              <td><strong>날짜</strong></td>
              <td>{{ datas[누른거].date }}</td>
            </tr>
            <tr>
              <td><strong>주최자</strong></td>
              <td>{{ datas[누른거].organizer }}</td>
            </tr>
            <tr>
              <td><strong>수상 제목</strong></td>
              <td>{{ datas[누른거].awardTitle }}</td>
            </tr>
            <tr>
              <td><strong>수상</strong></td>
              <td>{{ datas[누른거].award }}</td>
            </tr>
            <tr>
              <td><strong>상금</strong></td>
              <td>{{ datas[누른거].prize }}</td>
            </tr>
            <tr>
              <td><strong>수상 내역</strong></td>
              <td>{{ datas[누른거].description }}</td>
            </tr>
          </table>
          <h4>작품 주요 기능</h4>
          <ul>
            <li v-for="(feature, index) in datas[누른거].features" :key="index">{{ feature }}</li>
          </ul>
        </div>
        <div class="contest-image" >    
          <video :src="datas[누른거].image2" alt="Contest Image" autoplay muted loop/>
          <img :src="datas[누른거].image3" style="width: 50vh; height: 60vh; margin-top: -60vh;"/>
        </div>
        <button class="close-button" @click="closeModal">×</button>
      </div>
    </div>
  </transition>
</template>

<script>
import data from '../assets/Data.js';

export default {
  data() {
    return {
      movies: data,
      flag: false,
      누른거: null,
      datas: [...data],
    };
  },
  methods: {
    openModal(id) {
      this.누른거 = id;
      this.flag = true;
    },
    closeModal() {
      this.누른거 = null; // 모달이 닫힐 때 누른거를 초기화합니다.
      this.flag = false;
    },
  },
};
</script>

<style scoped>
.movie-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 10vh;
}

.movie-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vh;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
}

.movie-card:hover {
  transform: scale(1.05);
}

.movie-poster {
  width: 100%;
  height: 38vh;
  overflow: hidden;
  border-radius: 4px 4px 0 0;
}

.movie-poster img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.movie-info {
  padding: 10px;
  text-align: center;
}

.movie-info h2 {
  font-size: 2vh;
  margin-bottom: 10px;
}

.movie-info p {
  margin-bottom: 5px;
  font-size: 2vh;
  color: #666;
}

.movie-info .release-date,
.movie-info .genres {
  display: inline-block;
  margin-right: 10px;
}

.movie-info .rating {
  color: #ff9900;
  font-weight: bold;
}

.트로피 {
  width: 3vh;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-container {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
}

.contest-info h3 {
  margin-top: 0;
  font-size: 24px;
}

.contest-info table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 10px;
}

.contest-info table td {
  padding: 8px;
  border-bottom: 1px solid #ddd;
}

.contest-info table td:first-child {
  font-weight: bold;
  width: 30%;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.contest-image video {
  max-width: 100vh;
  height: 60vh;
}
</style>
