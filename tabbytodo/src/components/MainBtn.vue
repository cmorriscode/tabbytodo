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
  cursor: pointer;
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  background: linear-gradient(
    to right bottom,
    hsl(173, 46%, 56%),
    hsl(173, 46%, 44%)
  );
  color: white;
  font-size: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.35s;
  font-weight: 500;

  &.danger {
    background: linear-gradient(
      to right bottom,
      hsl(5, 55%, 68%),
      hsl(5, 55%, 56%)
    );
  }

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transform: translateY(-1px);
  }

  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transform: translatey(0px);
  }
}
</style>
