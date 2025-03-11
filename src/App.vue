<template>
  {{ $t("hello") }}
  <select
    name="locale"
    id="locale"
    @change="SwitchLanguage"
    v-model="currentLocale"
  >
    <option value="EN">{{ $t("EN") }}</option>
    <option value="ZHTW">{{ $t("ZHTW") }}</option>
  </select>
</template>

<script setup>
import { ref, onMounted } from "vue";
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

<style scoped></style>
