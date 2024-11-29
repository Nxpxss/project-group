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
    // ฟังก์ชันดึงข้อมูลภาพยนตร์โปรดจากเซิร์ฟเวอร์
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
        this.favoriteMovies = response.data.favorites; // บันทึกรายการโปรดจากเซิร์ฟเวอร์
      } catch (error) {
        console.error('Error loading favorite movies:', error);
      }
    },

    // ฟังก์ชันเช็คว่า movie เป็นโปรดไหม
    isFavorite(movieId) {
      return this.favoriteMovies.some(movie => movie.id === movieId);
    },

    // ฟังก์ชันจัดการการเพิ่ม/ลบภาพยนตร์จากรายการโปรด
    async handleToggleFavorite(movie, isSelected) {
      const accountName = localStorage.getItem('accountName');
      if (!accountName) {
        console.error('User is not logged in');
        return;
      }

      try {
        if (isSelected) {
          // เพิ่มภาพยนตร์เข้าไปในรายการโปรด
          await axios.post('http://localhost:3000/api/favorites', {
            movieID: movie.id,
            accountName: accountName,
          });
          this.favoriteMovies.push(movie); // Add to local favorite list
        } else {
          // ลบภาพยนตร์ออกจากรายการโปรด
          await axios.delete('http://localhost:3000/api/favorites', {
            data: { movieID: movie.id, accountName: accountName },
          });
          // Remove from local favorite list และไม่ให้แสดงในหน้า
          this.favoriteMovies = this.favoriteMovies.filter(fav => fav.id !== movie.id);
        }
      } catch (error) {
        console.error('Error updating favorite movies:', error);
      }
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
