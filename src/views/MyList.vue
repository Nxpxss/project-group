<template>
  <div>
    <!-- Display Navbar -->
    <Navbar />

    <!-- List of Favorite Movies -->
    <div v-if="favoriteMovies && favoriteMovies.length > 0">
      <h2>My Favorite Movies</h2>
      <div class="movie-cards">
        <MovieCard
          v-for="movie in favoriteMovies"
          :key="movie.id"
          :movie="movie"
          :isSelected="isFavorite(movie.id)"
          @toggle-favorite="handleToggleFavorite"
        />
      </div>
    </div>
    <div v-else>
      <h2>No Favorite Movies Yet</h2>
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
  },
  mounted() {
    this.loadFavoriteMovies(); // เรียกใช้เมื่อ component โหลดเสร็จ
  },
};
</script>


<style scoped>
h2 {
  margin-top: 20px;
  font-size: 24px;
}

.movie-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

footer {
  margin-top: 20px;
}
</style>
