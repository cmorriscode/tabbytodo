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
        isPlaceholder="true"
      />
      <tabby-task
        v-for="todo in todos"
        :title="todo.title"
        :description="todo.description"
        :key="todo.title"
        :id="todo.id"
        :completed="todo.completed"
        :priority="todo.priority"
        :class="{
          low: todo.priority === 'low',
          important: todo.priority === 'important',
          urgent: todo.priority === 'urgent',
        }"
        @toggleCompleted="toggleCompleted"
        @deleteTodo="deleteTodo"
        @updateTodo="updateTodo"
      />
      <todos-modal
        v-if="todoModalIsOpen"
        @closeTodoModal="closeTodoModal"
        @addTodo="addTodo"
      />
      <update-todos
        v-if="updateTodosIsOpen"
        :updateTitle="updateTitle"
        :updateDesc="updateDesc"
        :updatePrio="updatePrio"
        :updateId="updateId"
        @submitUpdate="submitUpdate"
        @closeUpdate="closeUpdate"
      />
    </div>
  </div>
</template>
<script>
import TabbyTask from "./TabbyTask.vue";
import TodosModal from "./TodosModal.vue";
import UpdateTodos from "./UpdateTodos.vue";
export default {
  data() {
    return {
      todos: [],
      todoModalIsOpen: false,
      updateTodosIsOpen: false,
      updateTitle: "",
      updateDesc: "",
      updatePrio: "",
      updateId: "",
    };
  },
  components: {
    TabbyTask,
    TodosModal,
    UpdateTodos,
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
      this.sortTodos();
      this.updateLocalStorage();
      this.closeTodoModal();
    },
    updateTodo(title, description, priority, id) {
      this.toggleUpdate();
      this.updateTitle = title;
      this.updateDesc = description;
      this.updatePrio = priority;
      this.updateId = id;
    },
    updateLocalStorage() {
      localStorage.setItem("tabbyTodos", JSON.stringify(this.todos));
    },
    deleteTodos() {
      this.todos = [];
      this.updateLocalStorage();
    },
    toggleCompleted(id) {
      const index = this.todos.findIndex((todo) => todo.id === id);
      this.todos[index].completed = !this.todos[index].completed;
    },
    deleteTodo(id) {
      const index = this.todos.findIndex((todo) => todo.id === id);
      this.todos.splice(index, 1);
    },
    toggleUpdate() {
      this.updateTodosIsOpen = true;
    },
    closeUpdate() {
      this.updateTodosIsOpen = false;
    },
    submitUpdate(title, description, priority, id) {
      const index = this.todos.findIndex((todo) => todo.id === id);
      this.todos[index].title = title;
      this.todos[index].description = description;
      this.todos[index].priority = priority;
      this.todos[index].id = id;
      this.closeUpdate();
      this.sortTodos();
      this.updateLocalStorage();
    },
    sortTodos() {
      this.todos.sort((a, b) => {
        if (a.priority === "urgent" && b.priority !== "urgent") {
          return -1;
        } else if (a.priority === "urgent" && b.priority === "urgent") {
          return 0;
        } else if (a.priority === "important" && b.priority === "low") {
          return -1;
        } else if (a.priority === "important" && b.priority === "important") {
          return 0;
        }
      });
    },
  },
  computed: {},
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
