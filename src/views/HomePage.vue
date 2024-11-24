<template>
    <div>
      <!-- Navbar -->
      <div class="navbar-section">
        <Navbar />
      </div>
  
      <!-- Hero Section -->
      <div class="hero-section d-flex align-items-center justify-content-center text-center text-white mb-4">
        <div class="overlay w-100 h-100 position-absolute bg-dark opacity-80"></div>
        <div class="container position-relative z-index-1">
          <h1 class="display-3 fw-bold">Welcome to Netflix Clone</h1>
          <p class="lead">Watch Movies and TV Shows anytime, anywhere</p>
          <button class="btn btn-danger btn-lg">Watch Now</button>
        </div>
      </div>
  
      <!-- Tab Buttons -->
      <div class="tabs d-flex justify-content-center mt-3">
        <button 
          v-for="(category, index) in categories" 
          :key="index" 
          :class="['tab-button', { active: selectedTab === category }]" 
          @click="selectedTab = category">
          {{ category }}
        </button>
      </div>
  
      <!-- Movie Sections -->
      <div v-if="selectedTab === 'Suggested'" class="suggested-movies-section">
        <div class="container mt-4 mb-5">
          <h1 class="text-white mb-4">Suggested</h1>
          <div class="movie-slider">
            <button @click="scrollLeft('suggestedSlider')" class="scroll-button left">
              <i class="fas fa-chevron-left"></i>
            </button>
            <div ref="suggestedSlider" class="movies-container">
              <MovieCard v-for="movie in Suggested" :key="movie.id" :movie="movie" class="movie-card" />
            </div>
            <button @click="scrollRight('suggestedSlider')" class="scroll-button right">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
  
      <div v-if="selectedTab === 'Action'" class="action-movies-section">
        <div class="container mt-4 mb-5">
          <h1 class="text-white mb-4">Action</h1>
          <div class="movie-slider">
            <button @click="scrollLeft('actionSlider')" class="scroll-button left">
              <i class="fas fa-chevron-left"></i>
            </button>
            <div ref="actionSlider" class="movies-container">
              <MovieCard v-for="movie in Action" :key="movie.id" :movie="movie" class="movie-card" />
            </div>
            <button @click="scrollRight('actionSlider')" class="scroll-button right">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
  
      <div v-if="selectedTab === 'Horror'" class="horror-movies-section">
        <div class="container mt-4 mb-5">
          <h1 class="text-white mb-4">Horror</h1>
          <div class="movie-slider">
            <button @click="scrollLeft('horrorSlider')" class="scroll-button left">
              <i class="fas fa-chevron-left"></i>
            </button>
            <div ref="horrorSlider" class="movies-container">
              <MovieCard v-for="movie in Horror" :key="movie.id" :movie="movie" class="movie-card" />
            </div>
            <button @click="scrollRight('horrorSlider')" class="scroll-button right">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
  
      <div v-if="selectedTab === 'Romance'" class="romance-movies-section">
        <div class="container mt-4 mb-5">
          <h1 class="text-white mb-4">Romance</h1>
          <div class="movie-slider">
            <button @click="scrollLeft('RomanceSlider')" class="scroll-button left">
              <i class="fas fa-chevron-left"></i>
            </button>
            <div ref="RomanceSlider" class="movies-container">
              <MovieCard v-for="movie in Romance" :key="movie.id" :movie="movie" class="movie-card" />
            </div>
            <button @click="scrollRight('RomanceSlider')" class="scroll-button right">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
  
      <!-- Footer -->
      <div class="footer-section">
        <Footer />
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue';
  import Footer from '@/components/Footer.vue';
  import MovieCard from '@/components/MovieCard.vue';
  
  export default {
    name: 'HomePage',
    components: {
      Navbar,
      Footer,
      MovieCard,
    },
    data() {
      return {
        selectedTab: 'Suggested',
        categories: ['Suggested', 'Action', 'Horror', 'Romance'],
        Suggested: [
          { id: 1, title: 'Movie 1', description: 'Description 1', posterUrl: require('@/assets/Suggested1.webp') },
          { id: 2, title: 'Movie 2', description: 'Description 2', posterUrl: require('@/assets/Suggested2.jpg') },
          { id: 3, title: 'Movie 3', description: 'Description 3', posterUrl: require('@/assets/Suggested3.jpg') },
          { id: 4, title: 'Movie 4', description: 'Description 4', posterUrl: require('@/assets/Suggested4.jpg') },
          { id: 5, title: 'Movie 5', description: 'Description 5', posterUrl: require('@/assets/Suggested5.jpg') }
        ],
        Action: [
          { id: 6, title: 'Action Movie 1', description: 'Action Description 1', posterUrl: require('@/assets/Action1.webp') },
          { id: 7, title: 'Action Movie 2', description: 'Action Description 2', posterUrl: require('@/assets/Action2.webp') },
          { id: 8, title: 'Action Movie 3', description: 'Action Description 3', posterUrl: require('@/assets/Action3.webp') },
          { id: 9, title: 'Action Movie 3', description: 'Action Description 3', posterUrl: require('@/assets/Action4.webp') },
          { id: 10, title: 'Action Movie 3', description: 'Action Description 3', posterUrl: require('@/assets/Action5.webp') }
        ],
        Horror: [
          { id: 11, title: 'Comedy Movie 1', description: 'Comedy Description 1', posterUrl: require('@/assets/Horror1.webp') },
          { id: 12, title: 'Comedy Movie 2', description: 'Comedy Description 2', posterUrl: require('@/assets/Horror2.webp') },
          { id: 13, title: 'Comedy Movie 3', description: 'Comedy Description 3', posterUrl: require('@/assets/Horror3.webp') },
          { id: 14, title: 'Comedy Movie 3', description: 'Comedy Description 3', posterUrl: require('@/assets/Horror4.webp') },
          { id: 15, title: 'Comedy Movie 3', description: 'Comedy Description 3', posterUrl: require('@/assets/Horror5.webp') }
        ],
        Romance: [
          { id: 16, title: 'Comedy Movie 1', description: 'Comedy Description 1', posterUrl: require('@/assets/Romance1.jpg') },
          { id: 17, title: 'Comedy Movie 2', description: 'Comedy Description 2', posterUrl: require('@/assets/Romance2.webp') },
          { id: 18, title: 'Comedy Movie 3', description: 'Comedy Description 3', posterUrl: require('@/assets/Romance3.webp') },
          { id: 19, title: 'Comedy Movie 3', description: 'Comedy Description 3', posterUrl: require('@/assets/Romance4.webp') },
          { id: 20, title: 'Comedy Movie 3', description: 'Comedy Description 3', posterUrl: require('@/assets/Romance5.jpg') }
        ]
      };
    },
        mounted() {
      // เมื่อ component ถูกโหลด, ดึงข้อมูล favorites จาก localStorage
      this.loadFavorites();
    },
    methods: {
      scrollLeft(sliderName) {
        const slider = this.$refs[sliderName];
        if (slider) {
          slider.scrollTo({
            left: slider.scrollLeft - 200,
            behavior: 'smooth',
          });
        }
      },
      scrollRight(sliderName) {
        const slider = this.$refs[sliderName];
        if (slider) {
          slider.scrollTo({
            left: slider.scrollLeft + 200,
            behavior: 'smooth',
          });
        }
      },
      loadFavorites() {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        this.Suggested.forEach(movie => {
          movie.isFavorite = favorites.some(fav => fav.id === movie.id);
        });
        this.Action.forEach(movie => {
          movie.isFavorite = favorites.some(fav => fav.id === movie.id);
        });
        this.Horror.forEach(movie => {
          movie.isFavorite = favorites.some(fav => fav.id === movie.id);
        });
        this.Romance.forEach(movie => {
          movie.isFavorite = favorites.some(fav => fav.id === movie.id);
        });
      }
    } 
  };
  </script>
  
  <style scoped>
  /* Tab Styles */
  .tab-button {
  background-color: transparent; /* ลบพื้นหลัง */
  color: rgb(0, 0, 0); /* สีตัวหนังสือ */
  border: none; /* ลบขอบ */
  padding: 15px 30px; /* ปรับขนาด padding */
  cursor: pointer;
  font-size: 2.5rem; /* ขนาดฟอนต์ใหญ่ขึ้น */
  transition: color 0.3s ease, transform 0.2s ease;
  font-weight: 800;
}

/* เมื่อ tab ถูกเลือก */
.tab-button.active {
  color: #e50914; /* สีเมื่อ active */
}

/* เมื่อ hover */
.tab-button:hover {
  color: #e50914; /* สีเมื่อ hover */
  transform: scale(1.05);
}
  
  /* Hero Section */
  .hero-section {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('@/assets/1595844471591.jpg');
    background-size: cover;
    background-position: center center;

  }
  
  /* Movie Slider */
  .movie-slider {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .scroll-button {
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    transition: transform 0.3s ease;
    z-index: 2;
    display: none;
  }
  
  /* Show scroll buttons when hovering over the slider */
  /* Movie Slider */
.movie-slider {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden; /* ห้ามแสดง scrollbar */
}

/* Movie Container */
.movies-container {
  display: flex;
  flex-wrap: nowrap; /* ไม่ให้แถวหัก */
  overflow: hidden; /* ห้ามแสดง scrollbar */
}

/* Scroll Buttons */
.scroll-button {
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  z-index: 2;
  display: none;
}

/* Show scroll buttons when hovering over the slider */
.movie-slider:hover .scroll-button {
  display: block;
}

/* Hover effect for the movie posters */
.movie-card {
  width: 300px;
  height: 450px;
  margin: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Hover effect only on the poster itself */
.movie-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

  </style>
  