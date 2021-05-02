<template>
  <div class="tabby-todos">
    <div class="tabby-todos-header">
      <h6><i class="fas fa-scroll"></i> Tab it so you're able Todo it.</h6>
      <div class="todos-buttons">
        <main-btn @click="openTodoModal"
          ><i class="fas fa-plus"></i> Add Todo</main-btn
        >
        <!-- <main-btn><i class="fas fa-broom"></i> Clear Completed</main-btn> -->
        <main-btn class="danger" @click="deleteTodos"
          ><i class="fas fa-trash-alt"></i> Delete All</main-btn
        >
      </div>
    </div>
    <div class="tabby-todos-list">
      <tabby-task
        class="urgent"
        title="Add a todo!"
        description="Create a task so you can get it done."
        v-if="todos.length === 0"
      />
      <tabby-task
        v-for="todo in todos"
        :title="todo.title"
        :description="todo.description"
        :key="todo.title"
        :id="todo.id"
        :completed="todo.completed"
        :class="{
          low: todo.priority === 'low',
          important: todo.priority === 'important',
          urgent: todo.priority === 'urgent',
        }"
      />
      <todos-modal
        v-if="todoModalIsOpen"
        @closeTodoModal="closeTodoModal"
        @addTodo="addTodo"
      />
    </div>
  </div>
</template>
<script>
import TabbyTask from "./TabbyTask.vue";
import TodosModal from "./TodosModal.vue";
export default {
  data() {
    return {
      todos: [],
      todoModalIsOpen: false,
    };
  },
  components: {
    TabbyTask,
    TodosModal,
  },
  methods: {
    renderTodos() {
      const storedTodos = JSON.parse(localStorage.getItem("tabbyTodos"));
      if (storedTodos) {
        this.todos = storedTodos;
      } else {
        this.todos = [];
      }
    },
    openTodoModal() {
      this.todoModalIsOpen = true;
      console.log(this.todoModalIsOpen);
    },
    closeTodoModal() {
      this.todoModalIsOpen = false;
    },
    addTodo(title, description, priority, id) {
      const todo = {
        title: title,
        description: description,
        priority: priority,
        id: id,
        completed: false,
      };
      this.todos.push(todo);
      this.updateLocalStorage();
    },
    updateLocalStorage() {
      localStorage.setItem("tabbyTodos", JSON.stringify(this.todos));
    },
    deleteTodos() {
      this.todos = [];
      this.updateLocalStorage();
    },
  },
  mounted() {
    this.renderTodos();
  },
};
</script>

<style lang="scss" scoped>
.tabby-todos {
  padding: 16px 12px;
  padding: 12px 12px;
  // border: 1px solid black;

  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;

    h6 {
      font-size: 16px;
      font-size: 18px;
      font-weight: 600;
      color: #444;
    }

    .todos-buttons {
      a {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }
  }

  &-list {
    margin-top: 12px;
    padding: 0px 16px 24px;
    min-height: 360px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    .todos-info {
      display: grid;
      justify-content: space-between;
      grid-template-columns: repeat(6, 1fr);
      margin-top: 16px;
      padding: 12px 12px;
    }
  }
}
</style>
