<template>
  <div class="tabby-todos">
    <div class="tabby-todos-header">
      <h6><i class="fas fa-scroll"></i> Tab it so you're able Todo it.</h6>
      <div class="todos-buttons">
        <main-btn><i class="fas fa-plus"></i> Add Todo</main-btn>
        <!-- <main-btn><i class="fas fa-broom"></i> Clear Completed</main-btn> -->
        <main-btn class="danger"
          ><i class="fas fa-trash-alt"></i> Delete All</main-btn
        >
      </div>
    </div>
    <div class="tabby-todos-list">
      <!-- <div class="todos-info">
        <p>Total Todos: 5</p>
        <p>Completed: 0</p>
        <p>Incomplete: 5</p>
        <p>Urgent: 2</p>
        <p>Important: 1</p>
        <p>Low: 2</p>
      </div> -->
      <tabby-task class="urgent" />
      <tabby-task class="urgent" />
      <tabby-task class="important" />
      <tabby-task class="low" />
      <tabby-task class="low" />
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
    margin-bottom: 24px;

    h6 {
      font-size: 16px;
      font-size: 18px;
      font-weight: 600;
      color: #444;
    }

    .todos-buttons {
      a {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }
  }

  &-list {
    margin-top: 12px;
    padding: 0px 16px 24px;
    min-height: 360px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    .todos-info {
      display: grid;
      justify-content: space-between;
      grid-template-columns: repeat(6, 1fr);
      margin-top: 16px;
      padding: 12px 12px;
    }
  }
}
</style>
