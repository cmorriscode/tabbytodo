<template>
  <div class="tabby-time">
    <div class="tabby-time-header">
      <h6>What's Due?</h6>
      <main-btn>Add Event</main-btn>
    </div>
    <div class="tabby-time-events">No events. Add one!</div>
  </div>
</template>

<script>
export default {};
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
  }

  &-events {
    margin-top: 12px;
    padding: 8px;
    min-height: 64px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
}
</style>
