<template>
    <div>
      <!-- Display Navbar -->
      <Navbar />


  
      <!-- Display Footer -->
      <Footer />
    </div>
</template>
  
<script>
  import Navbar from '@/components/Navbar.vue';
  import Footer from '@/components/Footer.vue';
  
  export default {
    name: 'movielist',
    components: {
      Navbar,
      Footer,
    },
};

</script>
  
  
<style scoped>
  h2 {
    margin-top: 20px;
    font-size: 24px;
  }
  
  .card {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    width: 20rem;
    height: 30rem;  /* ปรับขนาดความสูงของการ์ด */
    box-sizing: border-box;
  }
  
  footer {
    margin-top: 20px;
  }
  @media (max-width: 990px) {
    .card {
      max-width: 100%;      /* ใช้ความกว้างเต็ม */
      flex-direction: column; /* เปลี่ยนการ์ดให้จัดเรียงในแนวตั้ง */
      align-items: center;   /* จัดกึ่งกลาง */
      display: inline;
    }
  
    .card img {
      width: 100%;          /* ทำให้รูปภาพยืดเต็มการ์ด */
      height: auto;         /* รักษาสัดส่วนของภาพ */
      object-fit: cover;    /* ทำให้รูปภาพไม่เบี้ยว */
      border-radius: 5px;   /* เพิ่มมุมโค้งมน */
    }
  
    .movie-slider {
      padding: 0 10px;      /* เพิ่ม padding เพื่อความสมดุล */
    }
  
    .scroll-button {
      display: none;        /* ซ่อนปุ่มเลื่อน */
    }
  }
  
  
</style>