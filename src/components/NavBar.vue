<template>
  <nav class="navbar">
    <div class="wrap">
      <div class="title">iTravel</div>
      <!-- Switch language -->
      <div class="custom-dropdown" @click="toggleDropdown">
        <span>{{ displayLocale }}</span>
        <svg
          class="dropdown-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
        <ul v-if="isOpen" class="dropdown-menu">
          <li @click.stop="selectLocale('EN')">{{ $t("EN") }}</li>
          <li @click.stop="selectLocale('ZHTW')">{{ $t("ZHTW") }}</li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

const currentLocale = ref(locale.value);
const isOpen = ref(false);
const selectedLocale = ref(locale.value);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const displayLocale = computed(() => {
  return currentLocale.value === "EN" ? t("EN") : t("ZHTW");
});

const selectLocale = (lang) => {
  selectedLocale.value = lang;
  currentLocale.value = lang;

  document.cookie = `locale=${lang}; path=/`;
  locale.value = lang;
  isOpen.value = false;
};

onMounted(() => {
  const savedLocale =
    document.cookie
      .split("; ")
      .find((row) => row.startsWith("locale="))
      ?.split("=")[1] || "EN";
  selectedLocale.value = savedLocale;
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

.title {
  font-size: 3vmin;
  font-weight: bold;
  color: #3961ab;
}

.custom-dropdown {
  position: relative;
  width: 100px;
  padding: 6px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
}

.dropdown-icon {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

.custom-dropdown.open .dropdown-icon {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 5px;
  padding: 5px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.dropdown-menu li {
  padding: 8px;
  cursor: pointer;
  list-style: none;
}

.dropdown-menu li:hover {
  background: #f0f0f0;
}

/* Tablet */
@media screen and (max-width: 1023px) and (min-width: 768px) {
}

/* Mobile */
@media screen and (max-width: 430px) {
}
</style>
