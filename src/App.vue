<template>
  <Dialog
    :visible="addBookingVisible"
    :title="$t('Add Booking')"
    :width="60"
    :height="70"
    :footer="true"
    :okText="'Submit'"
    @close="closeDialog"
    @cancel="closeDialog"
    @ok="addBooking"
  >
    <template #default>
      <div class="dialog-content">
        <div class="current-tour">
          <div class="tour-img"><img :src="currentTour.imgLink" alt="" /></div>
          <div class="tour-info">
            <div class="tour-name">{{ $t(currentTour.tour) }}</div>
            <div class="tour-desc">{{ $t(currentTour.description) }}</div>
            <div class="tour-tag">
              <span v-for="(tag, index) in currentTour.tag" :key="index">
                #{{ $t(tag) }}&nbsp;
              </span>
            </div> 
          </div>
        </div>
        <div class="form">
          <div class="form-group">
            <label>{{ $t("Guest Name") }}</label>
            <input
              v-model="bookingForm.name"
              type="text"
              :placeholder="$t('Please enter') + ' ' + $t('Guest Name')"
            />
            <div class="error">
              <div v-if="errors.name">{{ errors.name }}</div>
            </div>
          </div>

          <div class="form-group">
            <label>{{ $t("Email") }}</label>
            <input
              v-model="bookingForm.email"
              type="email"
              :placeholder="$t('Please enter') + ' ' + $t('Email')"
            />
            <div class="error">
              <div v-if="errors.email">{{ errors.email }}</div>
            </div>
          </div>

          <div class="form-group">
            <label>{{ $t("Number of People") }}</label>
            <input
              v-model.number="bookingForm.people"
              type="number"
              min="1"
              :placeholder="$t('Please enter') + ' ' + $t('Number of People')"
            />
          </div>

          <div class="form-group">
            <label>{{ $t("Date") }}</label>
            <input v-model="bookingForm.date" type="date" :min="minDate" />
          </div>
        </div>
      </div>
    </template>
  </Dialog>

  <div class="home">
    <NavBar />
    <section class="main-container">
      <div class="main-title">{{ $t("title") }}</div>
      <div class="main-desc">
        {{ $t("description") }}
      </div>
    </section>
    <section class="card-container">
      <TourCard @book-now="showAddBookingDialog" />
    </section>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import dayjs from "dayjs";
import NavBar from "./components/NavBar.vue";
import TourCard from "./components/TourCard.vue";
import Dialog from "./components/Dialog.vue";

const { t } = useI18n();

const addBookingVisible = ref(false);

const minDate = dayjs().add(1, "day").format("YYYY-MM-DD");
const bookingForm = ref({
  name: "",
  email: "",
  people: 1,
  date: minDate,
});

const errors = ref({
  name: "",
  email: "",
});

const currentTour = ref({});

const showAddBookingDialog = (tour) => {
  currentTour.value = tour;
  addBookingVisible.value = true;
};

const closeDialog = () => {
  resetForm();
  addBookingVisible.value = false;
};

const validators = {
  name: (val) => {
    if (!val.trim()) return t("Guest name is required");
    if (val.length > 100)
      return t("Guest name must be less than 100 characters");
    return "";
  },
  email: (val) => {
    if (!val.trim()) return t("Email is required");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(val)) return t("Invalid email format");
    return "";
  },
};

watch(
  () => bookingForm.value.name,
  (val) => (errors.value.name = validators.name(val))
);

watch(
  () => bookingForm.value.email,
  (val) => (errors.value.email = validators.email(val))
);

const validateForm = () => {
  let isValid = true;
  Object.keys(validators).forEach((key) => {
    const error = validators[key](bookingForm.value[key]);
    errors.value[key] = error;
    if (error) isValid = false;
  });
  return isValid;
};

const resetForm = () => {
  bookingForm.value = {
    name: "",
    email: "",
    people: 1,
    date: minDate,
  };
  errors.value = {
    name: "",
    email: "",
  };
};

const addBooking = () => {
  if (!validateForm()) return;

  console.log("add", bookingForm.value);
};
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
  height: 60%;
  display: flex;
  justify-content: space-evenly;
}

/* Dialog */
.dialog-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.current-tour {
  width: 48%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* .tour-img {
  width: 100%;
  height: 55%;
}

.tour-img img {
  width: 280px;
} */

.tour-img img {
  width: 100%;
  height: auto;
}

.tour-info {
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.tour-info .tour-name {
  font-size: 20px;
  font-weight: bold;
  color: #3961ab;
  margin-bottom: 10px;
}

.tour-info .tour-desc {
  font-size: 14px;
  color: #8f8f8f;
  margin-bottom: 10px;
}

.tour-info .tour-tag {
  width: 100%;
  font-size: 14px;
  color: #6392cc;
}

.form {
  width: 48%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  width: 100%;
  height: 74px;
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-size: 1.5vmin;
}

.form-group input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.error {
  color: red;
  font-size: 0.6rem;
  margin-top: 0.2rem;
}

::placeholder {
  color: #a9a9a9;
}
</style>
