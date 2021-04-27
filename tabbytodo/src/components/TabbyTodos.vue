<template>
  <div class="tabby-todos">
    <div class="tabby-todos-header">
      <h6>Tab it so you're able Todo it.</h6>
      <main-btn>Add Todo</main-btn>
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
  }

  h6 {
    font-size: 16px;
  }
}
</style>
