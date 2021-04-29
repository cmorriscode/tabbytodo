<template>
  <div class="tabby-todos">
    <div class="tabby-todos-header">
      <h6><i class="fas fa-scroll"></i> Tab it so you're able Todo it.</h6>
      <main-btn>Add Todo</main-btn>
    </div>
    <div class="tabby-todos-list">
      <tabby-task class="urgent" />
      <!-- <tabby-task class="urgent" />
      <tabby-task class="important" />
      <tabby-task class="low" />
      <tabby-task class="low" /> -->
    </div>
  </div>
</template>
<script>
import TabbyTask from "./TabbyTask.vue";
export default {
  components: {
    TabbyTask,
  },
};
</script>

<style lang="scss" scoped>
.tabby-todos {
  padding: 16px 12px;
  padding: 12px 12px;
  // border: 1px solid black;

  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h6 {
      font-size: 16px;
      font-size: 18px;
      font-weight: 600;
      color: #444;
    }
  }

  &-list {
    margin-top: 12px;
    padding: 0px 16px 24px;
    min-height: 360px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
}
</style>
