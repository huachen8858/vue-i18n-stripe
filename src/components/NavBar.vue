<template>
  <nav class="navbar">
    <div class="wrap">
      <div class="title">iTrip.com</div>
      <select
        name="locale"
        id="locale"
        @change="SwitchLanguage"
        v-model="currentLocale"
      >
        <option value="EN">{{ $t("EN") }}</option>
        <option value="ZHTW">{{ $t("ZHTW") }}</option>
      </select>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const currentLocale = ref("EN");

const SwitchLanguage = (event) => {
  const selectedLang = event.target.value;
  document.cookie = `locale=${selectedLang}; path=/`;
  locale.value = selectedLang;
};

onMounted(() => {
  const savedLocale =
    document.cookie
      .split("; ")
      .find((row) => row.startsWith("locale="))
      ?.split("=")[1] || "EN";
  currentLocale.value = savedLocale;
  locale.value = savedLocale;
});
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 6%;
  color: #3c3c3c;
  background: #fff;
  border-bottom: #ededed 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(50, 50, 50, 0.05);
}

.wrap {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title{
  font-size: 3vmin;
  font-weight: bold;
  color: rgb(57, 97, 171);
}


/* Tablet */
@media screen and (max-width: 1023px) and (min-width: 768px) {

}

/* Mobile */
@media screen and (max-width: 430px) {

}
</style>
