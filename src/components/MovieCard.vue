<template>
  <div class="card" style="width: 20rem;">
    <img :src="movie.posterUrl" class="card-img-top" alt="Movie Poster" />
    <div class="card-body">
      <div class="button-container">
        <i
          class="fa"
          :class="isSelected ? 'fa-star' : 'fa-star-o'"
          @click="toggleSelection"
          style="font-size: 2rem; cursor: pointer; color: gold; margin-right: 10px;"
        ></i>
        <a :href="`/movie/${movie.id}`" class="btn btn-dark">Watch Now</a>
      </div>
      <p v-if="isSelected" class="favorite-status">This is one of your favorites!</p>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'MovieCard',
  props: {
    movie: Object,
  },
  data() {
    return {
      isSelected: false, // สถานะการเลือกโปรด
    };
  },
  methods: {
    // ฟังก์ชันการเลือกดาว
    toggleSelection() {
      this.isSelected = !this.isSelected;
      console.log(`Movie "${this.movie.title}" favorite status: ${this.isSelected ? 'Selected' : 'Not Selected'}`);

      // บันทึกสถานะโปรดลง localStorage
      this.saveToLocalStorage();

      if (this.isSelected) {
        this.saveFavoriteStatus(); // บันทึกสถานะการเลือกดาวลงในฐานข้อมูล
      } else {
        this.deleteFavoriteStatus(); // ลบสถานะการเลือกดาวออกจากฐานข้อมูล
      }
      this.$emit('toggle-favorite', this.movie, this.isSelected); // ส่งข้อมูลไปยัง MyList
    },

    // ฟังก์ชันในการบันทึกสถานะโปรดลง localStorage
    saveToLocalStorage() {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      const movieIndex = favorites.findIndex(fav => fav.movieId === this.movie.id);
      
      if (movieIndex > -1) {
        // ถ้ามีอยู่แล้วให้ปรับปรุงสถานะ
        favorites[movieIndex].isSelected = this.isSelected;
      } else {
        // ถ้ายังไม่มีให้เพิ่ม
        favorites.push({ movieId: this.movie.id, isSelected: this.isSelected });
      }

      localStorage.setItem('favorites', JSON.stringify(favorites)); // บันทึกลง localStorage
    },

    // ฟังก์ชันในการโหลดสถานะโปรดจาก localStorage
    loadFavoriteStatus() {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      const movie = favorites.find(fav => fav.movieId === this.movie.id);

      if (movie) {
        this.isSelected = movie.isSelected; // โหลดสถานะโปรดจาก localStorage
      }
    },

    // ฟังก์ชันในการบันทึกสถานะโปรดลงในเซิร์ฟเวอร์
    async saveFavoriteStatus() {
      const accountName = localStorage.getItem('accountName');
      const movieId = this.movie.id;

      if (!accountName) {
        console.error('User is not logged in');
        return;
      }

      try {
        console.log('Sending data to server:', {
          accountName: accountName,
          movieId: movieId,
          isSelected: this.isSelected,
        });
        const response = await axios.post('http://localhost:3000/api/favorites', {
          accountName: accountName,
          movieId: movieId,
          isSelected: this.isSelected,
        });
        console.log('Server response:', response.data);
      } catch (error) {
        console.error('Error saving favorite status:', error);
      }
    },

    // ฟังก์ชันในการลบสถานะโปรดออกจากเซิร์ฟเวอร์
    async deleteFavoriteStatus() {
      const accountName = localStorage.getItem('accountName');
      const movieId = this.movie.id;

      if (!accountName) {
        console.error('User is not logged in');
        return;
      }

      try {
        console.log('Deleting favorite from server:', {
          accountName: accountName,
          movieId: movieId,
        });
        const response = await axios.delete('http://localhost:3000/api/favorites', {
          data: { accountName: accountName, movieId: movieId },
        });
        console.log('Server response:', response.data);
      } catch (error) {
        console.error('Error deleting favorite status:', error);
      }
    },
  },
  mounted() {
    this.loadFavoriteStatus(); // โหลดสถานะเมื่อคอมโพเนนต์ถูกสร้าง
  },
};
</script>


<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-img-top {
  width: 100%;
  height: 21rem;
  object-fit: cover;
}

.card-body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.btn-dark {
  padding: 12px 24px;
  font-size: 1.2rem;
  border-radius: 30px;
}

.favorite-status {
  color: green;
  font-weight: bold;
  margin-top: 10px;
}
</style>
