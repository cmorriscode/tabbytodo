<template>
  <teleport to="body">
    <transition>
      <div class="event-modal">
        <div class="event-modal-header">
          <p>Add Event</p>
        </div>

        <div class="event-modal-form">
          <form @submit.prevent="addEvent">
            <div class="form-group">
              <label for="event">What's getting done today?</label>
              <input
                type="text"
                id="event"
                placeholder="Type event"
                required="yes"
                v-model="eventTitle"
              />
            </div>
            <div class="form-group">
              <label for="time"><i class="far fa-clock"></i> What time?</label>
              <input
                type="text"
                id="time"
                placeholder="e.g. 5PM, Before lunch, ASAP"
                v-model="eventTime"
              />
            </div>

            <div class="form-buttons">
              <main-btn @click="closeEventModal" class="danger"
                >Cancel</main-btn
              >
              <main-btn type="submit" @click="addEvent"
                ><i class="fas fa-plus"></i> Add</main-btn
              >
            </div>
          </form>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  data() {
    return {
      eventTitle: "",
      eventTime: "",
    };
  },
  methods: {
    addEvent() {
      const title = this.eventTitle;
      const time = this.eventTime;

      this.$emit("submitted", title, time);
      this.eventTitle = "";
      this.eventTime = "";
    },
    closeEventModal() {
      this.eventTitle = "";
      this.eventTime = "";
      this.$emit("closeEventModal");
    },
  },
};
</script>

<style lang="scss" scoped>
// Transitions

.v-enter-from {
  opacity: 0;
}

.v-enter-active {
  transition: all 1s;
  opacity: 0.5;
}

.v-enter-to {
  opacity: 1;
}

.event-modal {
  width: 700px;
  position: fixed;
  background: #fff;
  top: 50%;
  left: 50%;
  z-index: 5;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  border: 4px solid hsl(202, 100%, 30%);
  color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  animation: fade 0.15s;
  max-width: 100%;

  &-header {
    background: linear-gradient(to right bottom, #0093e9, #80d0c7);
    padding: 12px 12px;

    p {
      font-size: 20px;
      font-weight: 600;
      text-align: center;
    }
  }

  &-form {
    padding: 16px 12px;

    .form-group {
      margin: 24px 0;
    }

    .form-buttons {
      margin: 48px 0 24px;
      display: flex;
      justify-content: center;

      a {
        &:first-of-type {
          margin-right: 24px;
        }
      }
    }

    form {
      label {
        color: #333;
        font-size: 18px;
        font-weight: 600;
        display: block;
      }

      input {
        width: 100%;
        font-size: 16px;
        padding: 12px 16px;
        margin-top: 16px;
        border: none;
        outline: none;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(0, 147, 233, 0.2);
      }
    }
  }
}

@media (max-width: 720px) {
  .event-modal {
    max-width: 92%;
  }
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}
</style>
