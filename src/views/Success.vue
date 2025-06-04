<template>
  <div class="home">
    <NavBar />
    <section class="main-container">
      <div class="main-title">{{ $t("Booked Success") }}</div>
      <div class="back-btn" @click="router.push('/')">
        {{ $t("Back to home page") }}
      </div>
    </section>
  </div>
</template>

<script setup>
import NavBar from "../components/NavBar.vue";
import router from "../router";
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
}

.main-container {
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main-title {
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  color: #6495ed;
  margin-bottom: 1%;
}

.back-btn {
  max-width: 800px;
  text-align: center;
  font-size: 14px;
  color: #8f8f8f;
  text-decoration: underline;
  cursor: pointer;
}

</style>
