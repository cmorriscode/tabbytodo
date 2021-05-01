<template>
  <div class="tabby-time">
    <div class="tabby-time-header">
      <h6><i class="far fa-calendar-alt"></i> What's Due Today?</h6>

      <div class="tabby-time-buttons">
        <main-btn @click="openEventModal"
          ><i class="fas fa-plus"></i> Add Event</main-btn
        >
        <main-btn @click="deleteEvents" class="danger"
          ><i class="fas fa-trash-alt"></i> Delete All</main-btn
        >
      </div>
    </div>
    <div class="tabby-time-events">
      <tabby-due
        v-if="dues.length === 0"
        title="Add an event!"
        time="ASAP"
      ></tabby-due>

      <!-- <div class="placeholder">
        <p v-if="dues.length === 0">
          
        </p>
      </div> -->

      <tabby-due
        v-for="due in dues"
        :key="due.id"
        :title="due.title"
        :time="due.time"
        :id="due.id"
        @deleteEvent="deleteEvent"
        @updateEvent="updateEvent"
      />
    </div>

    <event-modal
      v-if="modalOpen"
      @closeEventModal="closeEventModal"
      @submitted="addEvent"
      title="Add Event"
    />
    <update-event
      v-if="updateModalOpen"
      :eventTitleUpdate="eventTitleUpdate"
      :eventTimeUpdate="eventTimeUpdate"
      @closeUpdateModal="closeUpdateModal"
    />
  </div>
</template>

<script>
import TabbyDue from "./TabbyDue.vue";
import EventModal from "./EventModal.vue";
import UpdateEvent from "./UpdateEvent.vue";
export default {
  data() {
    return {
      dues: [],
      modalOpen: false,
      updateModalOpen: false,
      eventTitleUpdate: "",
      eventTimeUpdate: "",
    };
  },
  methods: {
    renderDues() {
      const storedDues = JSON.parse(localStorage.getItem("dues"));
      if (storedDues) {
        this.dues = storedDues;
      } else {
        this.dues = [];
      }
    },
    addEvent(title, time) {
      const event = { title: title, time: time, id: title };

      this.dues.push(event);
      localStorage.setItem("dues", JSON.stringify(this.dues));

      this.closeEventModal();
    },
    deleteEvents() {
      this.dues = [];
      this.updateDues();
    },
    deleteEvent(id) {
      console.log(id);
      const index = this.dues.findIndex((due) => due.id === id);
      this.dues.splice(index, 1);
      this.updateDues();
    },
    updateEvent(title, time) {
      this.updateModalOpen = true;
      // this.eventTitleUpdate = title;
      // this.eventTimeTime = time;
      this.updateProps(title, time);
    },
    updateDues() {
      localStorage.setItem("dues", JSON.stringify(this.dues));
    },
    openEventModal() {
      this.modalOpen = true;
    },
    closeEventModal() {
      this.modalOpen = false;
    },
    closeUpdateModal() {
      this.updateModalOpen = false;
    },
  },
  components: {
    TabbyDue,
    EventModal,
    UpdateEvent,
  },
  mounted() {
    this.renderDues();
  },
};
</script>

<style lang="scss" scoped>
.tabby-time {
  margin-top: 12px;
  padding: 16px 12px;
  // border: 1px solid black;

  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h6 {
      font-size: 16px;
      font-size: 18px;
      color: #444;
      font-weight: 600;
      // color: hsl(173, 46%, 25%);
    }
  }

  &-buttons {
    a {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  &-events {
    // margin-top: 12px;
    padding: 8px;
    min-height: 64px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    grid-gap: 16px;

    // border: 1px solid rgba(0, 0, 0, 0.1);
    // box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    .placeholder {
      margin-left: 24px;
      p {
        font-size: 20px;
        font-weight: 600;
        color: #555;
      }
    }
  }
}

// Transitions

.v-enter-from {
  transform: translateY(-400px);
  opacity: 0;
}

.v-enter-active {
  transform: translateY(-200px);
  transition: all 1s ease-in;
  opacity: 0.5;
}

.v-enter-to {
  transform: translateY(0px);
  opacity: 1;
}
</style>
