<template>
    <div>
      <!-- Display Navbar -->
      <Navbar />

      <!-- Tab Buttons -->
      <div class=" francois-one-regular tabs d-flex justify-content-center flex-wrap mt-3">
    <button 
      v-for="(category, index) in categories" 
      :key="index" 
      :class="['tab-button btn btn-outline-light', { active: selectedTab === category }]" 
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
          { id: 2, title: 'AFTER EVERTHING  ' , description: 'Description 2', posterUrl: require('@/assets/Suggested2.jpg') },
          { id: 3, title: 'INVASION', description: 'Description 3', posterUrl: require('@/assets/Suggested3.jpg') },
          { id: 4, title: 'THE ARCHER', description: "Surviver it's a hard game.", posterUrl: require('@/assets/Suggested4.jpg') },
          { id: 5, title: 'BROKEN MIRRORS', description: 'DRAMA, 2019', posterUrl: require('@/assets/Suggested5.jpg') },
          { id: 6, title: 'MONEY HEIST', description: 'DRAMA, 2019', posterUrl: require('@/assets/mn1.jpg') },
          { id: 7, title: 'DEADPOOL', description: 'DRAMA, 2019', posterUrl: require('@/assets/dp.jpg') },
          { id: 8, title: 'MOANA2', description: 'DRAMA, 2019', posterUrl: require('@/assets/moana.jpg') },
          { id: 9, title: 'MEGAN', description: 'DRAMA, 2019', posterUrl: require('@/assets/megan.jpg') },
          { id: 10, title: 'STAR WARS', description: 'DRAMA, 2019', posterUrl: require('@/assets/Star wars.jpg') },
          { id: 11, title: 'SPIDERMAN', description: 'DRAMA, 2019', posterUrl: require('@/assets/Spider-man.jpg') },
          { id: 12, title: 'Stranger Things', description: 'DRAMA, 2019', posterUrl: require('@/assets/Stranger Things.jpg') },
          { id: 13, title: 'TOPGUN', description: 'DRAMA, 2019', posterUrl: require('@/assets/TopGun.jpg') },
          { id: 14, title: 'Harry Potter', description: 'DRAMA, 2019', posterUrl: require('@/assets/potter.jpg') },
          { id: 15, title: 'MARVELS : The Advengers', description: 'DRAMA, 2019', posterUrl: require('@/assets/tadvenger.jpg') },
          { id: 21, title: 'VENOM', description: 'Action Description 3', posterUrl: require('@/assets/A1.jpg') },

        ],
        
        Action: [
          { id: 17, title: 'Matrix ', description: 'Action Description 1', posterUrl: require('@/assets/Action1.webp') },
          { id: 18, title: 'SKYFALL', description: 'Action Description 2', posterUrl: require('@/assets/Action2.webp') },
          { id: 19, title: 'DUNKIRK', description: 'Action Description 3', posterUrl: require('@/assets/Action3.webp') },
          { id: 20, title: 'PULP FICTION', description: 'Action Description 3', posterUrl: require('@/assets/Action4.webp') },
          { id: 21, title: 'VENOM', description: 'Action Description 3', posterUrl: require('@/assets/A1.jpg') },
          { id: 22, title: 'MONEY HEIST', description: 'DRAMA, 2019', posterUrl: require('@/assets/mn1.jpg') },
          { id: 23, title: 'BLACK WIDOW', description: 'Action Description 2', posterUrl: require('@/assets/Action/Black widow.jpg') },
          { id: 24, title: 'DEADPOOL2', description: 'Action Description 3', posterUrl: require('@/assets/Action/DEADPOOL2.jpg') },
          { id: 25, title: 'RESIDENT EVIL', description: 'Action Description 3', posterUrl: require('@/assets/Action/RESIDENT EVIL.jpg') },
          { id: 26, title: 'SPIDERMAN', description: 'Action Description 3', posterUrl: require('@/assets/Action/Spider-man.jpg') },
          { id: 27, title: 'STAR WARS', description: 'Action Description 3', posterUrl: require('@/assets/Action/Star wars.jpg') },
          { id: 28, title: 'TOPGUN', description: 'Action Description 3', posterUrl: require('@/assets/Action/TopGun.jpg') }
        ],
        Horror: [
          { id: 28, title: 'SCREAM', description: 'Comedy Description 1', posterUrl: require('@/assets/Horror1.webp') },
          { id: 29, title: 'HELLRAISER', description: 'Comedy Description 2', posterUrl: require('@/assets/Horror2.webp') },
          { id: 30, title: 'THE EXORCIST', description: 'Comedy Description 3', posterUrl: require('@/assets/Horror3.webp') },
          { id: 31, title: 'TEXAS CHAINSAW', description: 'Comedy Description 3', posterUrl: require('@/assets/Horror4.webp') },
          { id: 32, title: 'A NIGHTMARE ON ELM STREET', description: 'Comedy Description 3', posterUrl: require('@/assets/Horror5.webp') },
          { id: 34, title: 'Annabell ', description: 'Action Description 1', posterUrl: require('@/assets/anna.jpg') },
          { id: 35, title: 'All Of Us Are Dead', description: 'Action Description 2', posterUrl: require('@/assets/zobie.jpg') },
          { id: 36, title: 'SINISTER', description: 'Action Description 3', posterUrl: require('@/assets/HORROR/Ethan.jpg') },
          { id: 37, title: 'ABIGAIL HAUNTING', description: 'Action Description 3', posterUrl: require('@/assets/HORROR/ABIGAIL.jpg') },
          { id: 38, title: 'BAGMAN', description: 'Action Description 3', posterUrl: require('@/assets/HORROR/BAGMAN.jpg') },
          { id: 39, title: 'SAVAGE', description: 'Action Description 3', posterUrl: require('@/assets/HORROR/Savage.jpg') },
          { id: 40, title: 'SCANNERS', description: 'Action Description 3', posterUrl: require('@/assets/HORROR/SCANNERS.jpg') }
        ],
        Romance: [
          { id: 41, title: 'The NOTEBOOK', description: 'Comedy Description 1', posterUrl: require('@/assets/Romance1.jpg') },
          { id: 42, title: 'Dirty Dancing', description: 'Comedy Description 2', posterUrl: require('@/assets/Romance2.webp') },
          { id: 43, title: 'Jerrry Maguire', description: 'Comedy Description 3', posterUrl: require('@/assets/Romance3.webp') },
          { id: 44, title: 'When Harry Met Sally...', description: 'Comedy Description 3', posterUrl: require('@/assets/Romance4.webp') },
          { id: 45, title: 'TITANIC', description: 'Comedy Description 3', posterUrl: require('@/assets/Romance5.jpg') },
          { id: 46, title: 'True Beauty | ความลับของนางฟ้า', description: 'Action Description 1', posterUrl: require('@/assets/R1.jpg') },
          { id: 47, title: 'The LUCKY ONE', description: 'Action Description 2', posterUrl: require('@/assets/ROMANCE/The LUCKY ONE.jpg') },
          { id: 48, title: 'STARDUST', description: 'Action Description 3', posterUrl: require('@/assets/ROMANCE/Stardust.jpg') },
          { id: 49, title: 'Home for harvest', description: 'Action Description 3', posterUrl: require('@/assets/ROMANCE/Home for harvest.jpg') },
          { id: 50, title: 'ํYOU', description: 'Action Description 3', posterUrl: require('@/assets/ROMANCE/You.jpg') },
          { id: 51, title: 'THE HALF OF IT', description: 'Action Description 3', posterUrl: require('@/assets/ROMANCE/the half of it.jpg') },
          { id: 52, title: 'LOVE RESET', description: 'Action Description 3', posterUrl: require('@/assets/ROMANCE/LoveReset.jpg') }
           
        ],
        Animation: [
          { id: 53, title: 'The Croods', description: 'Comedy Description 1', posterUrl: require('@/assets/c.jpeg') },
          { id: 54, title: 'Norm Of The NORTH', description: 'Comedy Description 2', posterUrl: require('@/assets/NN.jpg') },
          { id: 55, title: 'THE MONSTERS', description: 'Comedy Description 3', posterUrl: require('@/assets/M.webp') },
          { id: 56, title: 'THE INCREDIBLES', description: 'Comedy Description 3', posterUrl: require('@/assets/INCREDIBLES.jpg') },
          { id: 57, title: 'FINDING NEMO', description: 'Comedy Description 3', posterUrl: require('@/assets/nemo.jpg') },
          { id: 58, title: 'FINDING DORY ', description: 'Action Description 1', posterUrl: require('@/assets/dory.jpg') },
          { id: 59, title: 'Garfield: The Movie', description: 'Action Description 2', posterUrl: require('@/assets/gf.jpg') },
          { id: 60, title: 'Inside Out2', description: 'Action Description 3', posterUrl: require('@/assets/insideout.jpg') },
          { id: 61, title: 'MOANA2', description: 'DRAMA, 2019', posterUrl: require('@/assets/moana.jpg') },
          { id: 62, title: 'KUNGFU PANDA', description: 'Action Description 3', posterUrl: require('@/assets/kungfu.jpg') },
          { id: 63, title: 'DISNEY : ONWARD', description: 'DRAMA, 2019', posterUrl: require('@/assets/OW.webp') },
          { id: 64, title: 'DISNEY : BRAVE', description: 'Action Description 3', posterUrl: require('@/assets/BRAVE.jpg') }
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
  .tabs {
  flex-wrap: wrap; /* Wrap buttons to the next row on small screens */
}

/* Styles for each tab button */
.tab-button {
  color: black;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 6px;
  transition: background-color 0.3s, color 0.3s;
  min-width: 100px; /* Ensure buttons have a reasonable minimum width */
  text-align: center;
}

/* Highlight active tab */
.tab-button.active {
  background-color: rgb(162, 91, 255);
  color: white;
  border-color: rgb(162, 91, 255);
}

/* Adjust font size and padding for smaller screens */
@media (max-width: 768px) {
  .tab-button {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
}

@media (max-width: 576px) {
  .tab-button {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }
}
  
</style>