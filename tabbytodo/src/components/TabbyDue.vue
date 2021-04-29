<template>
  <div class="tabby-due">
    <p class="tabby-due--header">Pet Smokey Eat the best food ever</p>
    <p class="tabby-due--time">5PM</p>
  </div>
</template>

<style lang="scss" scoped>
.tabby-due {
  height: 100%;

  // justify-content: center;
  align-items: center;
  display: inline-block;
  // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  padding: 8px 12px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-left: 4px solid #80d0c7;
  border-radius: 4px;
  max-width: 240px;
  &--header {
    // background: linear-gradient(to right bottom, #80d0c7, #0093e9);
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
  }
  &--time {
    font-size: 16px;
    font-weight: 500;
  }

  &:first-of-type {
    // margin-left: 0;
  }
  margin-left: 24px;
  margin-top: 12px;
}
</style>
