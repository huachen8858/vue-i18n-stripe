<template>
  <div class="home">
    <NavBar />
    <section class="main-container">
      <div class="main-title">{{ $t("title") }}</div>
      <div class="main-desc">
        {{ $t("description") }}
      </div>
    </section>
    <section class="card-container">
      {{ $t("hello") }}
    </section>
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
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

.main-desc {
  max-width: 800px;
  text-align: center;
  font-size: 14px;
  color: #8f8f8f;
}

.card-container {
  width: 100%;
  height: 64%;
}
</style>
