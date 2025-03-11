<template>
  H:{{ $t("hello") }}
  
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(()=>{
  document.cookie = 'locale=EN'
});
</script>

<style scoped>
</style>
