<template>
  <div v-for="tour in tours" :key="tour.id" class="tour-card">
    <div class="tour-img"><img :src="tour.imgLink" alt="" /></div>
    <div class="tour-center">
      <div class="tour-name">{{ tour.tour }}</div>
      <div class="tour-desc">{{ tour.description }}</div>
    </div>
    <div class="tour-bottom">
      <div class="tour-price">{{ tour.price }} USD</div>
      <div class="book-now-btn" @click="bookNow(tour)">Book Now</div>
    </div>
  </div>
</template>

<script setup>
import tours from "../test/tour.json";

const bookNow = (tour) => {
  console.log('book now clicked:', tour);
  
};
</script>

<style scoped>
.tour-card {
  box-sizing: border-box;
  width: 320px;
  height: 430px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #e7e7e7;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(50, 50, 50, 0.05);
}

.tour-img {
  width: 100%;
  height: 50%;
}

.tour-img img {
  width: 320px;
}

.tour-center {
  box-sizing: border-box;
  width: 100%;
  height: 35%;
  padding: 5px 10px;
}

.tour-center .tour-name {
  font-size: 20px;
  font-weight: bold;
  color: #3961ab;
  margin-bottom: 10px;
}

.tour-center .tour-desc {
  font-size: 14px;
  color: #8f8f8f;
}

.tour-bottom {
  box-sizing: border-box;
  width: 100%;
  height: 10%;
  padding: 5px 10px;
  background-color: #e6f6ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tour-bottom .tour-price {
  width: 50%;
  font-size: 14px;
  font-weight: bold;
  color: #3c3c3c;
}

.tour-bottom .book-now-btn {
  position: relative;
  overflow: hidden;
  width: 30%;
  height: 28px;
  background-color: #4cb655;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.book-now-btn::before {
  content: "";
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  transform: scale(0);
  opacity: 0;
  transition: transform 0.6s ease-out, opacity 0.6s ease-out;
}

.book-now-btn:hover::before {
  transform: scale(3);
  opacity: 1;
}
</style>
