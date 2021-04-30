<template>
  <teleport to="body">
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
              v-model="eventTitle"
            />
          </div>
          <div class="form-group">
            <label for="event">What time?</label>
            <input
              type="text"
              id="event"
              placeholder="e.g. 5PM, Before lunch, ASAP"
              v-model="eventTime"
            />
          </div>

          <div class="form-buttons">
            <main-btn @click="closeEventModal">Cancel</main-btn>
            <main-btn type="submit" @click="addEvent"
              ><i class="fas fa-plus"></i> Add</main-btn
            >
          </div>
        </form>
      </div>
    </div>
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

.event-modal {
  // height: 500px;
  width: 700px;
  position: absolute;
  background: #fff;
  top: 50%;
  left: 50%;
  z-index: 5;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  /* padding: 12px 24px 36px; */
  border: 4px solid hsl(202, 100%, 30%);
  color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);

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
</style>
