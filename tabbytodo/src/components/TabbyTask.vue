<template>
  <div class="tabby-task">
    <div class="tabby-task-header">
      <p>{{ title }}</p>
      <div class="actions">
        <div
          class="actions-check"
          v-if="completed"
          @click="toggleCompleted(id)"
        >
          <i class="fas fa-check-square icon"></i>
        </div>
        <div
          class="actions-check"
          v-if="!completed"
          @click="toggleCompleted(id)"
        >
          <i class="far fa-square icon"></i>
        </div>
        <div class="actions-edit"><i class="fas fa-edit icon"></i></div>
        <div class="actions-delete" @click="deleteTodo">
          <i class="fas fa-trash-alt icon"></i>
        </div>
      </div>
    </div>
    <div class="tabby-task-description">
      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "description", "id", "priority", "completed"],
  methods: {
    toggleCompleted(id) {
      this.$emit("toggleCompleted", id);
    },
    deleteTodo(id) {
      this.$emit("deleteTodo", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.tabby-task {
  width: 100%;
  padding: 16px 20px;
  // background: linear-gradient(to right bottom, #80d0c7, #0093e9);
  // background: hsl(173, 46%, 60%);
  color: #333;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  margin-top: 24px;
  animation: fade 0.25s ease-in;

  &.urgent {
    border-left: 6px solid hsl(5, 55%, 56%);
  }
  &.important {
    border-left: 6px solid #0093e9;
  }

  &.low {
    border-left: 6px solid #80d0c7;
  }
  &-header {
    display: flex;
    justify-content: space-between;
    p {
      font-weight: 700;
      font-size: 20px;
      color: hsl(215, 100%, 46%);
      color: #333;
      color: hsl(30, 41%, 44%);
      color: #333;
    }

    .actions {
      display: flex;

      div {
        margin-right: 24px;

        .icon {
          font-size: 20px;
        }
        &:last-of-type {
          margin-right: 0;
        }
      }
    }
  }
  &-description {
    padding: 12px 8px;
    p {
      line-height: 1.4;
    }
  }
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
