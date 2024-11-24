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
      <p v-if="isSelected" class="favorite-status">This is one of your favorites!</p> <!-- แสดงข้อความเมื่อเลือกเป็นโปรด -->
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
      isSelected: false, // กำหนดสถานะการเลือกของดาว
    };
  },
  methods: {
    // ฟังก์ชันการเลือกดาว
    toggleSelection() {
      this.isSelected = !this.isSelected;
      console.log(`Movie "${this.movie.title}" favorite status: ${this.isSelected ? 'Selected' : 'Not Selected'}`);
      this.saveFavoriteStatus(); // บันทึกสถานะการเลือกดาวลงในฐานข้อมูล
      this.$emit('toggle-favorite', this.movie, this.isSelected); // ส่งข้อมูลไปยัง MyList
    },

    // ฟังก์ชันในการบันทึกสถานะการเลือกดาวในเซิร์ฟเวอร์
    async saveFavoriteStatus() {
      const accountName = localStorage.getItem('accountName'); // ดึง accountName จาก localStorage

      if (!accountName) {
        console.error('User is not logged in');
        return; // ถ้าไม่มี accountName ให้หยุดการทำงาน
      }

      try {
        console.log('Sending data to server:', {
          accountName: accountName,
          movieId: this.movie.id,
          isSelected: this.isSelected,
        });
        const response = await axios.post('http://localhost:3000/api/favorites', {
          accountName: accountName,
          movieId: this.movie.id,
          isSelected: this.isSelected,
        });
        console.log('Server response:', response.data);
      } catch (error) {
        console.error('Error saving favorite status:', error);
      }
    },

    // ฟังก์ชันในการโหลดสถานะโปรดจากเซิร์ฟเวอร์
    async loadFavoriteStatus() {
      const accountName = localStorage.getItem('accountName'); // ดึง accountName จาก localStorage
      console.log("Checking favorite status for", this.movie.title);

      if (!accountName) {
        console.error('User is not logged in');
        return; // ถ้าไม่มี accountName ให้หยุดการทำงาน
      }

      try {
        const response = await axios.get('http://localhost:3000/api/favorites', {
          params: { accountName: accountName, movieId: this.movie.id },
        });

        // เช็คว่ามีข้อมูลการเลือกดาวหรือไม่ และเก็บใน isSelected
        if (response.data && typeof response.data.isSelected !== 'undefined') {
          this.isSelected = response.data.isSelected; // โหลดสถานะโปรดจากเซิร์ฟเวอร์
        }
      } catch (error) {
        console.error('Error loading favorite status:', error);
      }
    },
  },
  mounted() {
    this.loadFavoriteStatus(); // โหลดสถานะเมื่อคอมโพเนนต์ถูกสร้าง
  },
};
</script>

<style>
/* สไตล์ของการ์ด */
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

/* สไตล์สำหรับการจัดตำแหน่งปุ่มและไอคอนรูปดาว */
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

/* สไตล์สำหรับข้อความสถานะโปรด */
.favorite-status {
  color: green;
  font-weight: bold;
  margin-top: 10px;
}
</style>
