<template>
    <div>
      <!-- Navbar -->
      <div class="navbar-section">
        <Navbar />
      </div>
  
      <!-- Hero Section -->
      <div class="francois-one-regular hero-section d-flex align-items-center justify-content-center text-center text-white mb-4">
        <video autoplay loop class="w-100">
          <source :src="videoSource" type="video/mp4" />
        </video>
      </div>

  
      <!-- Tab Buttons -->
      <div class="francois-one-regular tabs d-flex justify-content-center mt-3">
        <button 
          v-for="(category, index) in categories" 
          :key="index" 
          :class="['tab-button', { active: selectedTab === category }]" 
          @click="selectedTab = category">
          {{ category }}
        </button>
      </div>
  
      <!-- Movie Sections -->
      <div v-if="selectedTab === 'Suggested'" class="francois-one-regular suggested-movies-section">
        <div class="container mt-4 mb-5 ">
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
        videoSource: require('@/assets/venom.mp4'), 
        selectedTab: 'Suggested',
        categories: ['Suggested', 'Action', 'Horror', 'Romance'],
        Suggested: [
          { id: 1, title: 'GoodFellas', description: 'Goodfellas (1990)', posterUrl: require('@/assets/Suggested1.webp') },
          { id: 2, title: 'AFTER' , description: 'Description 2', posterUrl: require('@/assets/Suggested2.jpg') },
          { id: 3, title: 'INVASION', description: 'Description 3', posterUrl: require('@/assets/Suggested3.jpg') },
          { id: 4, title: 'ARCHER', description: "Surviver it's a hard game.", posterUrl: require('@/assets/Suggested4.jpg') },
          { id: 5, title: 'BROKEN MIRRORS', description: 'DRAMA, 2019', posterUrl: require('@/assets/Suggested5.jpg') }
        ],
        
        Action: [
          { id: 17, title: 'Matrix ', description: 'Action Description 1', posterUrl: require('@/assets/Action1.webp') },
          { id: 18, title: 'SKYFALL', description: 'Action Description 2', posterUrl: require('@/assets/Action2.webp') },
          { id: 19, title: 'DUNKIRK', description: 'Action Description 3', posterUrl: require('@/assets/Action3.webp') },
          { id: 20, title: 'PULP FICTION', description: 'Action Description 3', posterUrl: require('@/assets/Action4.webp') },
          { id: 21, title: 'VENOM', description: 'Action Description 3', posterUrl: require('@/assets/A1.jpg') },
        ],
        Horror: [
          { id: 23, title: 'SCREAM', description: 'Comedy Description 1', posterUrl: require('@/assets/Horror1.webp') },
          { id: 24, title: 'HELLRAISER', description: 'Comedy Description 2', posterUrl: require('@/assets/Horror2.webp') },
          { id: 25, title: 'THE EXORCIST', description: 'Comedy Description 3', posterUrl: require('@/assets/Horror3.webp') },
          { id: 26, title: 'TEXAS CHAINSAW', description: 'Comedy Description 3', posterUrl: require('@/assets/Horror4.webp') },
          { id: 27, title: 'A NIGHTMARE ON ELM STREET', description: 'Comedy Description 3', posterUrl: require('@/assets/Horror5.webp') },
        ],
        Romance: [
          { id: 28, title: 'The NOTEBOOK', description: 'Comedy Description 1', posterUrl: require('@/assets/Romance1.jpg') },
          { id: 29, title: 'Dirty Dancing', description: 'Comedy Description 2', posterUrl: require('@/assets/Romance2.webp') },
          { id: 30, title: 'Jerrry Maguire', description: 'Comedy Description 3', posterUrl: require('@/assets/Romance3.webp') },
          { id: 31, title: 'When Harry Met Sally...', description: 'Comedy Description 3', posterUrl: require('@/assets/Romance4.webp') },
          { id: 32, title: 'TITANIC', description: 'Comedy Description 3', posterUrl: require('@/assets/Romance5.jpg') },
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
@import url('https://fonts.googleapis.com/css2?family=Francois+One&display=swap');
  /* Global styles */
  .francois-one-regular {
  font-family: "Francois One", sans-serif;
  font-weight: 400;
  font-style: normal;
}
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
  
  .tab-button {
    background-color: transparent;
    color: rgb(0, 0, 0);
    border: none;
    padding: 15px 30px;
    cursor: pointer;
    font-size: 2.5rem;
    font-weight: 800;
    transition: color 0.3s ease, transform 0.2s ease;
  }
  
  .tab-button.active {
    color: rgb(162, 91, 255);
  }
  
  .tab-button:hover {
    color: rgb(162, 91, 255);
    transform: scale(1.05);
  }
  
  /* Hero Section */
  .hero-section {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }
  .video-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  background: rgba(0, 0, 0, 0.5); /* พื้นหลังสีดำโปร่งแสง */
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
    overflow-x: hidden;
  }
  
  .movies-container {
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
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
  
  .movie-slider:hover .scroll-button {
    display: block;
  }
  
  .movie-card {
    width: 100%;
    max-width: 300px;
    margin: 10px; /* เพิ่ม margin-right */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .movie-card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 1200px) {
    .hero-section h1 {
      font-size: 2.5rem;
    }
    .hero-section p {
      font-size: 1rem;
    }
    .tab-button {
      font-size: 2rem;
      padding: 10px 20px;
    }
    .movie-card {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
    .movies-container {
    display: inline-block;
    overflow: hidden;
    height: 100%;
    margin: auto;

    }
    .tab-button {
    font-size: 1.2rem;
    padding: 8px 15px;
  }
  }
  
  @media (max-width: 480px) {
    .hero-section h1 {
      font-size: 2rem;
    }
    .hero-section p {
      font-size: 0.875rem;
    }
    .tab-button {
      font-size: 3.2rem;
      padding: 12px 17px;
    }
    .movie-card {
      width: 100%;
      max-width: 200px;
    }
    /* Movie Slider */
  .movie-slider {
    position: relative;
    display: inline-block;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
  }
  
  .movies-container {
    display: inline-block;
    flex-wrap: nowrap;
    overflow: hidden;
  }
  
  .scroll-button {
    background: none;
    border: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: transform 0.3s ease;
    z-index: 2;
    display: none;
  }
  
  .movie-slider:hover .scroll-button {
    display: block;
  }
  .tab-button {
    font-size: 3.2rem;
    padding: 12px 17px;
  }
  }
  </style>