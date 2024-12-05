<template>
    <div>
      <!-- Display Navbar -->
      <Navbar />

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
  <div class="container mt-4 mb-5">
    <h1 class="text-white mb-4">Suggested</h1>
    <div class="row">
      <div class="col-md-3" v-for="movie in Suggested" :key="movie.id">
        <MovieCard :movie="movie" class="movie-card mt-5" />
      </div>
    </div>
  </div>
</div>

<div v-if="selectedTab === 'Action'" class="action-movies-section">
  <div class="container mt-4 mb-5">
    <h1 class="text-white mb-4">Action</h1>
    <div class="row">
      <div class="col-md-3" v-for="movie in Action" :key="movie.id">
        <MovieCard :movie="movie" class="movie-card mt-5" />
      </div>
    </div>
  </div>
</div>

<div v-if="selectedTab === 'Horror'" class="horror-movies-section">
  <div class="container mt-4 mb-5">
    <h1 class="text-white mb-4">Horror</h1>
    <div class="row">
      <div class="col-md-3" v-for="movie in Horror" :key="movie.id">
        <MovieCard :movie="movie" class="movie-card mt-5" />
      </div>
    </div>
  </div>
</div>

<div v-if="selectedTab === 'Romance'" class="romance-movies-section">
  <div class="container mt-4 mb-5">
    <h1 class="text-white mb-4">Romance</h1>
    <div class="row">
      <div class="col-md-3" v-for="movie in Romance" :key="movie.id">
        <MovieCard :movie="movie" class="movie-card mt-5" />
      </div>
    </div>
  </div>
</div>

<div v-if="selectedTab === 'Animation'" class="Animation-movies-section">
  <div class="container mt-4 mb-5">
    <h1 class="text-white mb-4">Animation</h1>
    <div class="row">
      <div class="col-md-3" v-for="movie in Animation" :key="movie.id">
        <MovieCard :movie="movie" class="movie-card mt-5" />
      </div>
    </div>
  </div>
</div>



  
      <!-- Display Footer -->
      <Footer />
    </div>
</template>
  
<script>
  import Navbar from '@/components/Navbar.vue';
  import Footer from '@/components/Footer.vue';
  import MovieCard from '@/components/MovieCard.vue';
  
  export default {
    name: 'movielist',
    components: {
      Navbar,
      Footer,
      MovieCard,
    },
    data() {
      return {
        selectedTab: 'Suggested',
        categories: ['Suggested', 'Action', 'Horror', 'Romance','Animation'],
        Suggested: [
          { id: 1, title: 'GoodFellas', description: 'Goodfellas (1990)', posterUrl: require('@/assets/Suggested1.webp') },
          { id: 2, title: 'AFTER' , description: 'Description 2', posterUrl: require('@/assets/Suggested2.jpg') },
          { id: 3, title: 'INVASION', description: 'Description 3', posterUrl: require('@/assets/Suggested3.jpg') },
          { id: 4, title: 'ARCHER', description: "Surviver it's a hard game.", posterUrl: require('@/assets/Suggested4.jpg') },
          { id: 5, title: 'BROKEN MIRRORS', description: 'DRAMA, 2019', posterUrl: require('@/assets/Suggested5.jpg') },
          { id: 21, title: 'MONEY HEIST', description: 'DRAMA, 2019', posterUrl: require('@/assets/mn1.jpg') },
          { id: 22, title: 'DEADPOOL', description: 'DRAMA, 2019', posterUrl: require('@/assets/dp.jpg') },
          { id: 23, title: 'MOANA2', description: 'DRAMA, 2019', posterUrl: require('@/assets/moana.jpg') },
          { id: 24, title: 'MEGAN', description: 'DRAMA, 2019', posterUrl: require('@/assets/megan.jpg') },
          { id: 25, title: 'BROKEN MIRRORS', description: 'DRAMA, 2019', posterUrl: require('@/assets/Suggested5.jpg') },
          { id: 26, title: 'BROKEN MIRRORS', description: 'DRAMA, 2019', posterUrl: require('@/assets/Suggested5.jpg') },
          { id: 27, title: 'BROKEN MIRRORS', description: 'DRAMA, 2019', posterUrl: require('@/assets/Suggested5.jpg') },
        ],
        
        Action: [
          { id: 6, title: 'Matrix ', description: 'Action Description 1', posterUrl: require('@/assets/Action1.webp') },
          { id: 7, title: 'SKYFALL', description: 'Action Description 2', posterUrl: require('@/assets/Action2.webp') },
          { id: 8, title: 'DUNKIRK', description: 'Action Description 3', posterUrl: require('@/assets/Action3.webp') },
          { id: 9, title: 'PULP FICTION', description: 'Action Description 3', posterUrl: require('@/assets/Action4.webp') },
          { id: 10, title: 'VENOM', description: 'Action Description 3', posterUrl: require('@/assets/A1.jpg') }
        ],
        Horror: [
          { id: 11, title: 'SCREAM', description: 'Comedy Description 1', posterUrl: require('@/assets/Horror1.webp') },
          { id: 12, title: 'HELLRAISER', description: 'Comedy Description 2', posterUrl: require('@/assets/Horror2.webp') },
          { id: 13, title: 'THE EXORCIST', description: 'Comedy Description 3', posterUrl: require('@/assets/Horror3.webp') },
          { id: 14, title: 'TEXAS CHAINSAW', description: 'Comedy Description 3', posterUrl: require('@/assets/Horror4.webp') },
          { id: 15, title: 'A NIGHTMARE ON ELM STREET', description: 'Comedy Description 3', posterUrl: require('@/assets/Horror5.webp') }
        ],
        Romance: [
          { id: 16, title: 'The NOTEBOOK', description: 'Comedy Description 1', posterUrl: require('@/assets/Romance1.jpg') },
          { id: 17, title: 'Dirty Dancing', description: 'Comedy Description 2', posterUrl: require('@/assets/Romance2.webp') },
          { id: 18, title: 'Terrry Maguire', description: 'Comedy Description 3', posterUrl: require('@/assets/Romance3.webp') },
          { id: 19, title: 'When Harry Met Sally...', description: 'Comedy Description 3', posterUrl: require('@/assets/Romance4.webp') },
          { id: 20, title: 'TITANIC', description: 'Comedy Description 3', posterUrl: require('@/assets/Romance5.jpg') }
        ],
        Animation: [
          { id: 16, title: 'The NOTEBOOK', description: 'Comedy Description 1', posterUrl: require('@/assets/Romance1.jpg') },
          { id: 17, title: 'Dirty Dancing', description: 'Comedy Description 2', posterUrl: require('@/assets/Romance2.webp') },
          { id: 18, title: 'Terrry Maguire', description: 'Comedy Description 3', posterUrl: require('@/assets/Romance3.webp') },
          { id: 19, title: 'When Harry Met Sally...', description: 'Comedy Description 3', posterUrl: require('@/assets/Romance4.webp') },
          { id: 20, title: 'TITANIC', description: 'Comedy Description 3', posterUrl: require('@/assets/Romance5.jpg') }
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
.movie-card {
    width: 100%;
    max-width: 300px;
    margin: 10px; /* เพิ่ม margin-right */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
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
  h2 {
    margin-top: 20px;
    font-size: 24px;
  }
  footer {
    margin-top: 20px;
  }
  
  
</style>