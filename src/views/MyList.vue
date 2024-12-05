<template>
  <div>
    <!-- Display Navbar -->
    <Navbar />
    <div class="francois-one-regular" v-if="favoriteMovies && favoriteMovies.length > 0">
  <h1 class="text-center fw-bold mt-5 mb-5">My Favorite Movies</h1>
  <div class="container">
    <div class="row">
      <div 
        class="col-md-3 mb-5" 
        v-for="movie in favoriteMovies" 
        :key="movie.id"
      >
        <div class="card">
          <MovieCard
            :movie="movie"
            :isSelected="isFavorite(movie.id)"
            @toggle-favorite="handleToggleFavorite"
          />
        </div>
      </div>
    </div>
  </div>


      
    </div>
    <div v-else>
      <h2 class="text-center">No Favorite Movies Yet</h2>
    </div>

    <!-- Display Footer -->
    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import MovieCard from '@/components/MovieCard.vue';

export default {
  name: 'MyList',
  components: {
    Navbar,
    Footer,
    MovieCard,
  },
  data() {
    return {
      favoriteMovies: [], // Favorite movies list
    };
  },
  methods: {
    async loadFavoriteMovies() {
      const accountName = localStorage.getItem('accountName');
      if (!accountName) {
        console.error('User is not logged in');
        return;
      }

      try {
        const response = await axios.get('http://localhost:3000/api/favorites', {
          params: { accountName: accountName },
        });
        console.log('Favorite movies response:', response.data); // ตรวจสอบผลลัพธ์จาก API
        this.favoriteMovies = response.data.favorites || []; // บันทึกรายการโปรดจากเซิร์ฟเวอร์
      } catch (error) {
        console.error('Error loading favorite movies:', error);
      }
    },

    isFavorite(movieId) {
      return this.favoriteMovies.some(movie => movie.id === movieId);
    },
    handleToggleFavorite(movie, isSelected) {
    // เมื่อมีการเปลี่ยนแปลงสถานะโปรดให้แก้ไข favoriteMovies
    if (isSelected) {
      this.favoriteMovies.push(movie);
    } else {
      this.favoriteMovies = this.favoriteMovies.filter(fav => fav.id !== movie.id);
    }
  },
  },
  mounted() {
    this.loadFavoriteMovies(); // เรียกใช้เมื่อ component โหลดเสร็จ
  },
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Francois+One&display=swap');
.francois-one-regular {
  font-family: "Francois One", sans-serif;
  font-weight: 200;
  font-style: normal;
}
h2 {
  margin-top: 20px;
  font-size: 24px;
}

.card {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 20rem;
  height: 30rem;  /* ปรับขนาดความสูงของการ์ด */
  box-sizing: border-box;
}

footer {
  margin-top: 20px;
}
@media (max-width: 990px) {
  .card {
    max-width: 100%;      /* ใช้ความกว้างเต็ม */
    flex-direction: column; /* เปลี่ยนการ์ดให้จัดเรียงในแนวตั้ง */
    align-items: center;   /* จัดกึ่งกลาง */
    display: inline;
  }

  .card img {
    width: 100%;          /* ทำให้รูปภาพยืดเต็มการ์ด */
    height: auto;         /* รักษาสัดส่วนของภาพ */
    object-fit: cover;    /* ทำให้รูปภาพไม่เบี้ยว */
    border-radius: 5px;   /* เพิ่มมุมโค้งมน */
  }

  .movie-slider {
    padding: 0 10px;      /* เพิ่ม padding เพื่อความสมดุล */
  }

  .scroll-button {
    display: none;        /* ซ่อนปุ่มเลื่อน */
  }
}


</style>