<template>
  <footer class="francois-one-regular  footer bg-dark text-light py-5">
    <div class="container">
      <h3 class="text-center fw-bold">MEMBERS</h3><br>
      <!-- Links Section -->
      <div class="row">
        <div class="col-lg-4 text-center">
          <p class="mb-0">67708920-ณัฐวัตร สมมิตร</p>
        </div>
        <div class="col-lg-4 text-center">
          <p class="mb-0">67703223-นภัสสร คณารักษ์</p>
        </div>
        <div class="col-lg-4 text-center">
          <p class="mb-0">67700975-สมเดช สงวนดี</p>
        </div>
        <div class="col-lg-4 text-center">
          <p class="mb-0">67711436-ณัฐวุฒิ ยอดประเสริฐ</p>
        </div>
        <div class="col-lg-4 text-center">
          <p class="mb-0">67712551-วุฒิพงษ์ ชัยภูมิ</p>
        </div>
        <div class="col-lg-4 text-center">
          <p class="mb-0">67701901-กุลลดา เจริญ</p><br>
        </div>
      </div>       
      <!-- Copyright Section -->
      <div class="row">
        <div class="col-12 text-center">
          <p class="mb-0">&copy; © 2024 MOVFLIX, Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Francois+One&display=swap');
/* Custom Styles for Footer */
.francois-one-regular {
font-family: "Francois One", sans-serif;
font-weight: 400;
font-style: normal;
}
.footer-link {
  color: #737373;
  font-size: 0.875rem;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-link:hover {
  color: #ffffff;
}

.text-light i {
  font-size: 1.5rem;
  transition: color 0.3s;
}

.text-light i:hover {
  color: #e50914; /* สีแดงเมื่อ hover คล้าย Netflix */
}
</style>
