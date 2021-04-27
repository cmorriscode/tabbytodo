<template>
  <div class="tabby-UI">
    <tabby-header />
    <tabby-time />
    <tabby-todos />
  </div>
</template>

<script>
import TabbyHeader from "./TabbyHeader.vue";
import TabbyTime from "./TabbyTime.vue";
import TabbyTodos from "./TabbyTodos.vue";
export default {
  components: { TabbyHeader, TabbyTime, TabbyTodos },
};
</script>

<style lang="scss" scoped>
.tabby-UI {
  margin: 0 auto;
  width: 960px;
  height: 640px;
  // background: linear-gradient(to right bottom, #0093e9, #80d0c7);
  background: #fff;
  border-radius: 25px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
  padding: 12px 24px;
  border: 4px solid hsl(202, 100%, 30%);
}
</style>
