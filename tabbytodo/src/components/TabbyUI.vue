<template>
  <div class="tabby-UI">
    <tabby-header />
    <div class="tabby-divider">
      <div class="tabby-divider--tracker">
        <tabby-time v-if="true" />
        <tabby-todos />
      </div>
      <tabby-notes />
    </div>
  </div>
</template>

<script>
import TabbyHeader from "./TabbyHeader.vue";
import TabbyTime from "./TabbyTime.vue";
import TabbyTodos from "./TabbyTodos.vue";
import TabbyNotes from "./TabbyNotes.vue";

export default {
  components: { TabbyHeader, TabbyTime, TabbyTodos, TabbyNotes },
};
</script>

<style lang="scss" scoped>
.tabby-UI {
  // margin: 0 auto;
  // min-width: 960px;
  // min-width: 1125px;
  // width: 1280px;
  // width: 1200px;
  width: 1440px;
  max-width: 100%;
  // max-width: 960px;
  // background: linear-gradient(to right bottom, #0093e9, #80d0c7);
  background: #fff;
  border-radius: 25px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
  // box-shadow: 0 20px 1000px rgba(0, 0, 0, 0.35);
  // box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
  padding: 12px 24px 36px;
  border: 4px solid hsl(202, 100%, 30%);

  .tabby-divider {
    display: flex;
    justify-content: space-between;

    &--tracker {
      width: 100%;
    }
  }
}
</style>
