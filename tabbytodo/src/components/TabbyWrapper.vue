<template>
  <div class="tabby-wrapper">
    <tabby-UI></tabby-UI>
  </div>
</template>

<script>
import TabbyUI from "./TabbyUI.vue";

export default {
  components: { "tabby-UI": TabbyUI },
};
</script>

<style scoped>
.tabby-wrapper {
  min-height: 100vh;
  padding: 42px 24px;

  background: #d4e8f5;
  background: linear-gradient(to right bottom, #0093e9, #80d0c7);
  display: flex;
  justify-content: center;
}

@media (max-width: 720px) {
  .tabby-wrapper {
    padding: 24px 8px;
  }
}
</style>
