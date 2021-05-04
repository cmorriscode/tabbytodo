<template>
  <div class="tabby-due">
    <p class="tabby-due--header">{{ title }}</p>
    <p class="tabby-due--time">{{ time }}</p>
    <div class="tabby-due--actions" v-if="!isPlaceholder">
      <div class="edit" @click="updateEvent(title, time)">
        <i class="fas fa-edit icon icon-edit"></i>
      </div>
      <div class="delete" @click="deleteEvent(id)">
        <i class="fas fa-trash-alt icon icon-delete"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "time", "id", "isPlaceholder"],
  methods: {
    deleteEvent(id) {
      this.$emit("deleteEvent", id);
    },
    updateEvent(title, time) {
      this.$emit("updateEvent", title, time);
    },
  },
};
</script>

<style lang="scss" scoped>
.tabby-due {
  animation: fade 0.25s ease-in;
  height: 100%;
  align-items: center;
  display: inline-block;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  padding: 8px 12px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-left: 4px solid #80d0c7;
  border-radius: 4px;
  min-width: 225px;
  max-width: 225px;
  &--header {
    font-size: 16px;
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 8px;
  }
  &--time {
    font-size: 16px;
    font-weight: 500;
    font-size: 14px;
  }

  &--actions {
    display: flex;
    justify-content: center;

    div {
      cursor: pointer;
      .icon {
        &-edit {
          color: hsl(43, 100%, 45%);
        }
        &-delete {
          color: hsl(5, 55%, 56%);
        }
      }
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  &:first-of-type {
  }
  margin-left: 24px;
  margin-top: 12px;
}

@keyframes fade {
  0% {
    transform: translateX(-200px);
    opacity: 0;
  }

  50% {
    transform: translateX(-100px);
    opacity: 0.5;
  }

  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
