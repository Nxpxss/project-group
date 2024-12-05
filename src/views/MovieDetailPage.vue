<template>
  <div>
    <Navbar />
    <div class="movie-watch-page container-fluid">
      <div class="row movie-background">
        <!-- Video Player Section -->
        <div v-if="movie" class="movie-watch-page col-md-12 video-container">
          
          <video 
            class="video-player" 
            controls 
            autoplay 
            :poster="movie.posterUrl">
            <source :src="movie.videoUrl" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          <p class="p mb-4 mt-5">{{ movie.title }}</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

  
<script>
  import Navbar from '@/components/Navbar.vue';
  import Footer from '@/components/Footer.vue';
  
  export default {
    
    name: 'MovieWatchPage',
    props: ['id'], // รับ id จาก router
    components: {
      Navbar,
      Footer
    },
    data() {
      return {
        movie: null, // เก็บข้อมูลหนัง
      };
    },
    async created() {
    // จำลองการดึงข้อมูลหนัง
    const movies = [
  { id: 1, title: 'Goodfellas (1990)', videoUrl: require('@/assets/videos/GF.mp4') },
  { id: 2, title: 'AFTER EVERYTHING (2023)', videoUrl: require('@/assets/videos/AT.mp4') },
  { id: 3, title: 'INVASION', videoUrl: require('@/assets/videos/IVS.mp4') },
  { id: 4, title: 'THE ARCHER', videoUrl: require('@/assets/videos/ACH.mp4') },
  { id: 5, title: 'Broken Mirrors (2018)', videoUrl: require('@/assets/videos/BM.mp4') },
  { id: 6, title: 'Money Heist: Part 5 Vol. 2', videoUrl: require('@/assets/videos/mh.mp4') },
  { id: 7, title: 'DEADPOOL', videoUrl: require('@/assets/videos/DP.mp4') },
  { id: 8, title: 'Moana2', videoUrl: require('@/assets/videos/Moana2.mp4') },
  { id: 9, title: 'MEGAN', videoUrl: require('@/assets/videos/M3GAN.mp4') },
  { id: 10, title: 'STAR WARS', videoUrl: require('@/assets/videos/v1.mp4') },
  { id: 11, title: 'SPIDERMAN', videoUrl: require('@/assets/videos/v2.mp4') },
  { id: 12, title: 'Stranger Things', videoUrl: require('@/assets/videos/v3.mp4') },
  { id: 13, title: 'Top Gun: Maverick', videoUrl: require('@/assets/videos/v4.mp4') },
  { id: 14, title: "Harry Potter and the Sorcerer's Stone (2001)", videoUrl: require('@/assets/videos/v5.mp4') },
  { id: 15, title: "Marvel's The Avengers", videoUrl: require('@/assets/videos/v6.mp4') },
  { id: 21, title: 'Venom: Let There Be Carnage', videoUrl: require('@/assets/venom2.mp4') },
  { id: 17, title: 'THE Matrix', videoUrl: require('@/assets/videos/Matrix.mp4') },
  { id: 18, title: 'SKYFALL', videoUrl: require('@/assets/videos/SKYFALL.mp4') },
  { id: 19, title: 'Dunkirk', videoUrl: require('@/assets/videos/Dunkirk.mp4') },
  { id: 20, title: 'Pulp Fiction', videoUrl: require('@/assets/videos/Pulp Fiction.mp4') },
  { id: 21, title: 'Venom: Let There Be Carnage', videoUrl: require('@/assets/venom2.mp4') },
  { id: 22, title: 'Money Heist: Part 5 Vol. 2', videoUrl: require('@/assets/videos/mh.mp4') },
  { id: 23, title: 'SCREAM', videoUrl: require('@/assets/videos/Scream.mp4') },
  { id: 24, title: 'HELLRAISER JUDGMENT', videoUrl: require('@/assets/videos/H.mp4') },
  { id: 25, title: 'THE EXORCIST', videoUrl: require('@/assets/videos/TE.mp4') },
  { id: 26, title: 'The Texas Chainsaw Massacre (1974)', videoUrl: require('@/assets/videos/TAXASCHAINSAW.mp4') },
  { id: 27, title: 'A Nightmare on Elm Street', videoUrl: require('@/assets/videos/NM.mp4') },
  { id: 28, title: 'THE NOTEBOOK (2004)', videoUrl: require('@/assets/videos/NB.mp4') },
  { id: 29, title: 'Dirty Dancing (1987)', videoUrl: require('@/assets/videos/dd.mp4') },
  { id: 30, title: 'When Harry Met Sally (1989)', videoUrl: require('@/assets/videos/w.mp4') },
  { id: 31, title: 'JERRY MAGUIRE [1996]', videoUrl: require('@/assets/videos/j.mp4') },
  { id: 32, title: 'Titanic (1997)', videoUrl: require('@/assets/videos/TTN.mp4') },
  { id: 33, title: '', videoUrl: require('@/assets/videos/AT.mp4') },
  { id: 34, title: '', videoUrl: require('@/assets/videos/AT.mp4') },
  { id: 35, title: '', videoUrl: require('@/assets/videos/AT.mp4') },
  { id: 36, title: '', videoUrl: require('@/assets/videos/AT.mp4') },
  { id: 37, title: '', videoUrl: require('@/assets/videos/AT.mp4') },
  { id: 38, title: '', videoUrl: require('@/assets/videos/AT.mp4') },
  { id: 39, title: '', videoUrl: require('@/assets/videos/AT.mp4') },
  { id: 40, title: '', videoUrl: require('@/assets/videos/AT.mp4') },
  { id: 41, title: '', videoUrl: require('@/assets/videos/AT.mp4') },
  { id: 42, title: '', videoUrl: require('@/assets/videos/AT.mp4') },
  { id: 43, title: '', videoUrl: require('@/assets/videos/AT.mp4') },
  { id: 44, title: '', videoUrl: require('@/assets/videos/AT.mp4') },
  { id: 45, title: '', videoUrl: require('@/assets/videos/AT.mp4') },
  { id: 46, title: '', videoUrl: require('@/assets/videos/AT.mp4') },
  { id: 47, title: '', videoUrl: require('@/assets/videos/AT.mp4') },
  { id: 48, title: '', videoUrl: require('@/assets/videos/AT.mp4') },
  { id: 49, title: '', videoUrl: require('@/assets/videos/AT.mp4') },
  { id: 50, title: '', videoUrl: require('@/assets/videos/AT.mp4') },
  { id: 51, title: '', videoUrl: require('@/assets/videos/AT.mp4') },
  { id: 52, title: '', videoUrl: require('@/assets/videos/AT.mp4') },
  { id: 53, title: '', videoUrl: require('@/assets/videos/AT.mp4') },
  { id: 54, title: '', videoUrl: require('@/assets/venom2.mp4') },
  { id: 55, title: '', videoUrl: require('@/assets/videos/AT.mp4') },
  { id: 56, title: '', videoUrl: require('@/assets/videos/AT.mp4') },
  { id: 57, title: '', videoUrl: require('@/assets/videos/AT.mp4') },
  { id: 58, title: '', videoUrl: require('@/assets/videos/AT.mp4') },
  { id: 59, title: '', videoUrl: require('@/assets/videos/AT.mp4') },
  { id: 60, title: '', videoUrl: require('@/assets/videos/AT.mp4') },
  { id: 61, title: '', videoUrl: require('@/assets/videos/AT.mp4') },
  { id: 62, title: '', videoUrl: require('@/assets/videos/AT.mp4') },
  { id: 63, title: '', videoUrl: require('@/assets/videos/AT.mp4') },
  { id: 64, title: '', videoUrl: require('@/assets/videos/AT.mp4') },
];

      this.movie = movies.find(movie => movie.id === parseInt(this.id));
    },
    methods: {
  getYouTubeEmbedUrl(url) {
    const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&modestbranding=1&rel=0&controls=1`;
  }
  }
  };
  </script>
  
  <style scoped>
  .p{
    font-size: 16pt;
  }
  /* Custom Styles for Movie Watch Page */
  .movie-watch-page {
    color: #ffffff;
    background-color: #000;
    height: 1000px;
    width: 100%;
  }
  
  .movie-background {
    background-color: #000; /* พื้นหลังสีดำ */
    height: 100vh; /* ใช้ความสูงเต็มจอ */
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  
  .video-container {
    position: relative;
    width: 90%;
    height: 90vh; /* ความสูงของหน้าจอวิดีโอ */
    margin-bottom: 20px;
  }
  
  .video-player {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .movie-info {
    background: rgba(0, 0, 0, 0.6); /* เพิ่มความโปร่งใส */
    padding: 20px;
    border-radius: 10px;
    max-width: 800px;
    margin: 0 auto;
    position: absolute;
    bottom: 0;
    width: 100%;
    color: white;
    padding-bottom: 20px;
  }
  
  .movie-title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .movie-description {
    font-size: 1.3rem;
    margin-bottom: 20px;
  }
  
  .buttons {
    display: flex;
    gap: 15px;
  }
  
  .play-button {
    background-color: #e50914;
    color: #ffffff;
    border: none;
    font-size: 1.2rem;
  }
  
  .more-info-button {
    background-color: rgba(255, 255, 255, 0.3);
    color: #ffffff;
    border: none;
    font-size: 1.2rem;
  }
  
  .play-button:hover, .more-info-button:hover {
    opacity: 0.8;
  }
  </style>
  