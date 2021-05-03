<template>
  <div>
    <base-CSS></base-CSS>
    <tabby-wrapper />
  </div>
</template>

<script>
import BaseCSS from "./CSS/BaseCSS.vue";
import TabbyWrapper from "./components/TabbyWrapper.vue";
export default {
  name: "App",
  components: { BaseCSS, TabbyWrapper },
};
</script>

<style lang="scss">
#app {
}
</style>
