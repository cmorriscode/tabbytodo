<template>
  <a :href="href">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: ["href"],
};
</script>

<style lang="scss" scoped>
a {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  background: linear-gradient(to right bottom, hsl(173, 46%, 71%), #80d0c7);
  color: white;
  font-size: 16px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
</style>
