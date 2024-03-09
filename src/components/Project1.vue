<template>
  <div class="movie-list">
    <div class="movie-card" v-for="movie in movies" :key="movie.id">
      <div class="movie-poster">
        <img :src="movie.image" alt="Movie Poster" />
      </div>
      <div class="movie-info">
        <h2>{{ movie.title }}</h2>
        <p>
          <span class="release-date">{{ movie.date }}</span>
        </p>
        <p class="rating">
          <span>{{ movie.rating }}</span>
          <img class="트로피" src="../assets/트로피.png"> 
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../assets/Data.js';

export default {
  data() {
    return {
      movies: data,
    };
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

.트로피{
  width: 3vh;
}
</style>