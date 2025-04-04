<template>
  <transition>
    <div class="dialog-mask" v-show="visible">
      <div class="dialog">
        <div class="dialog-content">
          <div class="dialog-header">
            <slot name="header">
              <div class="u-head">
                <slot name="title">
                  {{ title }}
                </slot>
              </div>
              <div class="u-headRightIcon">
                <slot name="titleRightIcon">
                  <img
                    @click="onClose()"
                    v-show="closeIconShow"
                    class="u-close"
                    src="/clear.svg"
                    focusable="false"
                    viewBox="64 64 896 896"
                  />
                </slot>
              </div>
            </slot>
          </div>
          <div class="dialog-body">
            <slot>{{ content }}</slot>
          </div>
          <div class="dialog-footer" v-show="footer">
            <slot name="footer">
              <div class="bottom-btn">
                <button id="secondary-btn" @click="onCancel">
                  {{ cancelText }}
                </button>
                <button id="primary-btn" @click="onConfirm">
                  {{ okText }}
                </button>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String, // string | slot
    default: "Warning",
  },
  content: {
    type: String, // string | slot
    default: "",
  },
  width: {
    type: Number,
    default: 25,
  },
  height: {
    type: Number,
    default: 25,
  },
  customWidthPixels: {
    type: String,
    default: "vw",
  },
  customHeightPixels: {
    type: String,
    default: "vh",
  },
  closeIconShow: {
    type: Boolean,
    default: true,
  },
  footer: {
    type: Boolean,
    default: false,
  },
  cancelText: {
    type: String,
    default: "Cancel",
  },
  okText: {
    type: String,
    default: "OK",
  },
});

const emits = defineEmits(["close", "ok", "cancel"]);

const dialogWidth = computed(() => {
  return props.width + props.customWidthPixels;
});

const dialogHeight = computed(() => {
  return props.height + props.customHeightPixels;
});

const onClose = () => {
  emits("close");
};

const onCancel = () => {
  emits("cancel");
};

const onConfirm = () => {
  emits("ok");
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 0px;
  height: 7px;
}

::-webkit-scrollbar-thumb {
  background-color: transparent;
  border-radius: 5px;
}

.dialog-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.45);
}

.dialog {
  margin: 0 auto;
  width: v-bind(dialogWidth);
  height: v-bind(dialogHeight);
  min-width: 350px;
  min-height: 150px;
}

.dialog-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.dialog-header {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 98%;
  height: 15%;
  padding: 1vw 1.2vw 1vw 1.8vw;
  color: rgba(0, 0, 0, 0.65);
  border-radius: 4px 4px 0 0;
  overflow: hidden;
}

.u-head {
  width: 100%;
  margin: 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  color: var(--text-color);
  font-weight: bold;
  font-size: 2.5vmin;
  word-wrap: break-word;
}

.u-headRightIcon {
  width: 10%;
  margin: 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  box-sizing: border-box;
  background-color: #fff;
}

.u-close {
  width: 1vw;
  height: 1vw;
  fill: rgba(0, 0, 0, 0.45);
  cursor: pointer;
  transition: fill 0.3s;
}

.dialog-body {
  width: 93%;
  height: 75%;
  padding: 1vh 1.8vw;
  word-wrap: break-word;
  overflow-y: scroll;
}

.dialog-footer {
  display: flex;
  height: 10%;
  padding: 1vw 0;
  position: relative;
}

.bottom-btn {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.bottom-btn > button {
  border: none;
  font-size: 0.8vw;
  width: 7vw;
  height: 4vh;
  border-radius: 80px;
  cursor: pointer;
}

#primary-btn {
  background-color:#6495ed;
  color: #fff; 
}

#secondary-btn {
  background-color: #fff;
  border: 1px solid #ebebeb;
  color: #757575;
}

/* Tablet */
@media screen and (max-width: 1023px) and (min-width: 768px) {
  .dialog {
    min-width: 320px;
    min-height: 200px;
  }

  .dialog-header {
    padding: 2vw 1.8vw 2vw 1.8vw;
  }

  .u-head {
    width: 100%;
    font-size: 2vw;
  }

  .u-headRightIcon {
    width: 10%;
    margin: 0;
  }

  .u-close {
    width: 1.8vw;
    height: 1.8vw;
  }

  .dialog-body {
    width: 87%;
    height: 50%;
    min-height: 50px;
    font-size: 1.4vw;
    overflow: scroll;
  }

  .bottom-btn > button {
    font-size: 1.1vw;
    width: 10vw;
    height: 3vw;
  }
}

/* Mobile */
@media screen and (max-width: 430px) {
  .dialog {
    min-width: 250px;
    min-height: 150px;
  }

  .dialog-header {
    padding: 5vw 4vw 2vw 4vw;
  }

  .u-head {
    width: 100%;
    font-size: 4.2vw;
  }

  .u-headRightIcon {
    width: 10%;
    margin: 0;
  }

  .u-close {
    width: 4vw;
    height: 4vw;
  }

  .dialog-body {
    width: 85%;
    height: 50%;
    padding: 2vh 4vw;
    min-height: 40px;
    font-size: 3.8vw;
    overflow: scroll;
  }

  .dialog-footer {
    padding: 2vw 0;
  }

  .bottom-btn > button {
    font-size: 3.8vw;
    width: 25vw;
    height: 8vw;
  }
}
</style>
