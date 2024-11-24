<template>
    <div>
      <!-- Display Navbar -->
      <Navbar />
      
      <!-- List of Favorite Movies -->
      <div v-if="favoriteMovies && favoriteMovies.length > 0">
        <h2>My Favorite Movies</h2>
        <ul>
          <li v-for="movie in favoriteMovies" :key="movie.id">
            {{ movie.title }}
          </li>
        </ul>
      </div>
      <div v-else>
        <h2>No Favorite Movies Yet</h2>
      </div>
      
      <!-- Display All Movies with MovieCard -->
      <div>
        <h2>All Movies</h2>
        <MovieCard
          v-for="movie in movie"
          :key="movie.id"
          :movie="movie"
          @toggle-favorite="handleToggleFavorite"
        />
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
        favoriteMovies: [], // รายการภาพยนตร์ที่ถูกเลือก
        movie: [], // รายการภาพยนตร์ทั้งหมด
      };
    },
    methods: {
      async loadFavoriteMovies() {
        const accountName = localStorage.getItem('accountName'); // ดึง accountName จาก localStorage
        
        if (!accountName) {
          console.error('User is not logged in');
          return;
        }
        
        try {
          // ดึงข้อมูลรายการ favorite จากเซิร์ฟเวอร์
          const response = await axios.get('http://localhost:3000/api/favorites', {
            params: { accountName: accountName },
          });
          
          // เก็บข้อมูลภาพยนตร์ที่ถูกเลือกใน favoriteMovies
          this.favoriteMovies = response.data.movie;
        } catch (error) {
          console.error('Error loading favorite movies:', error);
        }
      },
      async loadMovies() {
        try {
          // ดึงข้อมูลภาพยนตร์ทั้งหมดจากเซิร์ฟเวอร์
          const response = await axios.get('http://localhost:3000/api/favorites');
          this.movie = response.data.movie;
        } catch (error) {
          console.error('Error loading favorites:', error);
        }
      },
      handleToggleFavorite(movie, isSelected) {
        if (isSelected) {
          // เพิ่มภาพยนตร์ที่ถูกเลือก
          if (!this.favoriteMovies.find(fav => fav.id === movie.id)) {
            this.favoriteMovies.push(movie);
          }
        } else {
          // ลบภาพยนตร์ออก
          this.favoriteMovies = this.favoriteMovies.filter(fav => fav.id !== movie.id);
        }
      },
    },
    mounted() {
      this.loadFavoriteMovies(); // โหลดข้อมูล favorite
      this.loadMovies(); // โหลดข้อมูลภาพยนตร์ทั้งหมด
    },
  };
  </script>
  
  <style>
  /* สไตล์สำหรับ MyList */
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    font-size: 1.2rem;
    margin: 5px 0;
  }
  
  h2 {
    text-align: center;
    margin-top: 20px;
  }
  </style>
  