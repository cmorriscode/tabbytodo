<template>
  <div class="tabby-todos">
    <div class="tabby-todos-header">
      <h6><i class="fas fa-scroll"></i> Tab it so you're able Todo it.</h6>
      <main-btn>Add Todo</main-btn>
    </div>
    <div class="tabby-todos-list">
      Oh, c'mon. There has to be something todo. Add something and then get it
      done.
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tabby-todos {
  padding: 16px 12px;
  // border: 1px solid black;

  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h6 {
      font-size: 16px;
    }
  }

  &-list {
    margin-top: 12px;
    padding: 8px;
    min-height: 360px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
}
</style>
