<template>
  <div>
    <Navbar />
    <div class="movie-watch-page container-fluid">
      <div class="row movie-background">
        <!-- Video Player Section -->
        <div v-if="movie" class="movie-watch-page col-md-12 video-container">
          <h1 class="mb-4 mt-5">{{ movie.title }}</h1>
          <video 
            class="video-player" 
            controls 
            autoplay 
            :poster="movie.posterUrl">
            <source :src="movie.videoUrl" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          <h1 class="mb-4 mt-5">{{ movie.title }}</h1>
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
  { id: 10, title: '', videoUrl: require('@/assets/venom2.mp4'), posterUrl: require('@/assets/A1.jpg') },
  { id: 2, title: 'Movie 2', videoUrl: 'https://example.com/video2.mp4', posterUrl: 'https://example.com/poster2.jpg' }
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
  