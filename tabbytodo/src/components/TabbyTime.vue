<template>
  <div class="tabby-time">
    <div class="tabby-time-header">
      <h6><i class="far fa-calendar-alt"></i> What's Due Today?</h6>
      <main-btn @click="openEventModal">Add Event</main-btn>
    </div>
    <div class="tabby-time-events">
      <tabby-due
        v-for="due in dues"
        :key="due.id"
        :title="due.title"
        :time="due.time"
      />
      <!-- <tabby-due title="Pet Kiko" time="9PM" />
      <tabby-due title="Call John Rhoades At Some Point" time="Before Lunch" /> -->
      <!-- <tabby-due />
      <tabby-due />
      <tabby-due /> -->
    </div>
    <transition>
      <event-modal
        v-if="modalOpen"
        @closeEventModal="closeEventModal"
        @submitted="addEvent"
      />
    </transition>
  </div>
</template>

<script>
import TabbyDue from "./TabbyDue.vue";
import EventModal from "./EventModal.vue";
export default {
  data() {
    return {
      dues: [],
      modalOpen: false,
    };
  },
  methods: {
    renderDues() {
      const storedDues = JSON.parse(localStorage.getItem("dues"));

      if (storedDues) {
        this.dues = storedDues;
      } else {
        this.dues = [{ title: "Add an event!", time: "ASAP", id: "1" }];
      }
    },
    addEvent(title, time) {
      const event = { title: title, time: time };
      this.dues.push(event);
      this.closeEventModal();
    },
    openEventModal() {
      this.modalOpen = true;
    },
    closeEventModal() {
      this.modalOpen = false;
    },
  },
  components: {
    TabbyDue,
    EventModal,
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
  }

  h6 {
    font-size: 16px;
    font-size: 18px;
    color: #444;
    font-weight: 600;
    // color: hsl(173, 46%, 25%);
  }

  &-events {
    // margin-top: 12px;
    padding: 8px;
    // min-height: 64px;
    display: flex;
    align-items: center;

    // border: 1px solid rgba(0, 0, 0, 0.1);
    // box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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
