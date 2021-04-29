<template>
  <div class="tabby-time">
    <div class="tabby-time-header">
      <h6><i class="far fa-calendar-alt"></i> What's Due Today?</h6>
      <main-btn>Add Event</main-btn>
    </div>
    <div class="tabby-time-events">
      <tabby-due />
      <tabby-due />
      <tabby-due />
      <tabby-due />
      <tabby-due />
      <tabby-due />
    </div>
  </div>
</template>

<script>
import TabbyDue from "./TabbyDue.vue";
export default {
  data() {
    return {};
  },
  components: {
    TabbyDue,
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
    min-height: 64px;
    // border: 1px solid rgba(0, 0, 0, 0.1);
    // box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
}
</style>
