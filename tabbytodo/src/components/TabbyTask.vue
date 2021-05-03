<template>
  <div class="tabby-task">
    <div class="tabby-task-header">
      <p>{{ title }}</p>
      <div class="actions" v-if="!isPlaceholder">
        <div
          class="actions-check"
          v-if="completed"
          @click="toggleCompleted(id)"
        >
          <i class="fas fa-check-square icon icon-unchecked"></i>
        </div>
        <div
          class="actions-check"
          v-if="!completed"
          @click="toggleCompleted(id)"
        >
          <i class="far fa-square icon icon-checked"></i>
        </div>
        <div
          class="actions-edit"
          @click="updateTodo(title, description, priority, id)"
        >
          <i class="fas fa-edit icon-edit"></i>
        </div>
        <div class="actions-delete" @click="deleteTodo">
          <i class="fas fa-trash-alt icon icon-delete"></i>
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
  props: [
    "title",
    "description",
    "id",
    "priority",
    "completed",
    "isPlaceholder",
  ],
  methods: {
    toggleCompleted(id) {
      this.$emit("toggleCompleted", id);
    },
    updateTodo(title, description, priority, id) {
      this.$emit("updateTodo", title, description, priority, id);
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
      color: #333;
    }

    .actions {
      display: flex;

      div {
        margin-right: 24px;
        cursor: pointer;

        .icon {
          font-size: 20px;

          &-unchecked {
            color: hsl(202, 100%, 31%);
          }

          &-checked {
            color: hsl(202, 100%, 31%);
          }

          &-edit {
            color: hsl(43, 100%, 45%);
          }

          &-delete {
            color: hsl(5, 55%, 56%);
          }
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

@media (max-width: 500px) {
  .tabby-task-header {
    flex-direction: column;
    .actions {
      margin-top: 12px;
    }
  }

  .tabby-time-events {
    margin-left: 0;
    display: flex;
    flex-direction: column;
  }

  .tabby-time-buttons {
    margin: 24px auto;
    margin-top: 24px;
  }

  .tabby-time-header {
    // text-align: center;
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
