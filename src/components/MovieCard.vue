<template>
    <div class="card" style="width: 20rem;">
      <img :src="movie.posterUrl" class="card-img-top" alt="Movie Poster" />
      <div class="card-body">
        <a :href="`/movie/${movie.id}`" class="btn btn-dark">Watch Now</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MovieCard',
    props: {
      movie: Object
    }
  };
  </script>
  
  <style>
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .card-img-top {
    width: 100%;              /* รูปภาพเต็มความกว้างของการ์ด */
    height: 21rem;            /* ความสูงของรูปภาพที่เหมาะสมมากขึ้น */
    object-fit: cover;        /* ครอบภาพให้เต็มพื้นที่โดยไม่บิดเบือน */
  }
  
  .card-body {
    display: flex;
    justify-content: center;  /* Center horizontally */
    align-items: center;      /* Center vertically */
    height: 100%;             /* ทำให้ body ใช้ความสูงของการ์ดทั้งหมด */
  }
  
  .btn-dark {
    padding: 12px 24px;
    font-size: 1.2rem;
    border-radius: 30px;
  }
  </style>
  