<template>
  <teleport to="body">
    <div class="event-modal">
      <div class="event-modal-header">
        <p>Update Event</p>
      </div>

      <div class="event-modal-form">
        <form @submit.prevent="updateEvent">
          <div class="form-group">
            <label for="event">Update your event</label>
            <input
              type="text"
              id="event"
              placeholder="Type event"
              v-model="title"
            />
          </div>
          <div class="form-group">
            <label for="time">What time?</label>
            <input
              type="text"
              id="time"
              placeholder="e.g. 5PM, Before lunch, ASAP"
              v-model="time"
            />
          </div>

          <div class="form-buttons">
            <main-btn @click="closeUpdateModal" type="button" class="danger"
              >Cancel</main-btn
            >
            <main-btn type="submit" @click="updateEvent"
              ><i class="fas fa-plus"></i> Update</main-btn
            >
          </div>
        </form>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  props: ["eventTitleUpdate", "eventTimeUpdate", "eventIdUpdate"],
  data() {
    return {
      title: "",
      time: "",
      id: null,
    };
  },
  methods: {
    closeUpdateModal() {
      this.title = "";
      this.time = "";
      this.id = null;
      this.$emit("closeUpdateModal");
    },
    updateEvent() {
      const id = this.id;
      const title = this.title;
      const time = this.time;
      this.$emit("updateEventInfo", title, time, id);
      this.closeUpdateModal();
    },
  },
  mounted() {
    this.title = this.eventTitleUpdate;
    this.time = this.eventTimeUpdate;
    this.id = this.eventIdUpdate;
  },
};
</script>

<style lang="scss" scoped>
// Transitions

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
