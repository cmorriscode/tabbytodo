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
  background: linear-gradient(
    to right bottom,
    hsl(173, 46%, 56%),
    hsl(173, 46%, 44%)
  );
  color: white;
  font-size: 16px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.35s;

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transform: translateY(-1px);
  }
}
</style>
