<template>
  <teleport to="body">
    <transition>
      <div class="event-modal">
        <div class="event-modal-header">
          <p>Add Todo</p>
        </div>

        <div class="event-modal-form">
          <form @submit.prevent="submitEvent">
            <div class="form-group">
              <label for="todo">Update Title:</label>
              <input
                type="text"
                id="todo"
                placeholder="Update your todo title"
                required="yes"
                v-model="title"
              />
            </div>
            <div class="form-group">
              <p>Update Description:</p>
              <textarea
                type="text"
                id="time"
                placeholder="Update the description"
                v-model="todo"
              >
              </textarea>
            </div>

            <div class="form-radio-group">
              <p>Priority</p>

              <div class="radio">
                <div class="radio-group">
                  <label for="low">Low</label>
                  <input
                    type="radio"
                    id="low"
                    value="low"
                    placeholder="e.g. 5PM, Before lunch, ASAP"
                    v-model="priority"
                  />
                </div>
                <div class="radio-group">
                  <label for="important">Important</label>
                  <input
                    type="radio"
                    clicke
                    value="important"
                    name="priority"
                    placeholder="e.g. 5PM, Before lunch, ASAP"
                    v-model="priority"
                  />
                </div>
                <div class="radio-group">
                  <label for="urgent">Urgent</label>
                  <input
                    type="radio"
                    id="urgent"
                    value="urgent"
                    placeholder="e.g. 5PM, Before lunch, ASAP"
                    v-model="priority"
                  />
                </div>
              </div>
            </div>

            <div class="form-buttons">
              <main-btn @click="closeUpdate" class="danger">Cancel</main-btn>
              <main-btn type="submit" @click="submitUpdate"
                ><i class="fas fa-plus"></i> Update</main-btn
              >
            </div>
          </form>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  props: ["updateTitle", "updateDesc", "updatePrio", "updateId"],
  data() {
    return {
      title: "",
      todo: "",
      priority: null,
      id: null,
    };
  },
  methods: {
    emits: ["submitted", "submitUpdate"],
    addEvent() {
      const title = this.eventTitle;
      const time = this.eventTime;

      this.$emit("submitted", title, time);
      this.eventTitle = "";
      this.eventTime = "";
    },
    closeUpdate() {
      this.$emit("closeUpdate");
    },
    addTodo() {
      this.$emit(
        "addTodo",
        this.todoTitle,
        this.todoDescription,
        this.priority,
        this.todoTitle
      );
      this.closeTodoModal();
    },
    submitUpdate() {
      this.$emit("submitUpdate", this.title, this.todo, this.priority, this.id);
    },
  },
  mounted() {
    this.title = this.updateTitle;
    this.todo = this.updateDesc;
    this.priority = this.updatePrio;
    this.id = this.updateId;
  },
};
</script>

<style lang="scss" scoped>
// Transitions

.event-modal {
  width: 700px;
  position: absolute;
  background: #fff;
  top: 50%;
  left: 50%;
  z-index: 5;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  border: 4px solid hsl(202, 100%, 30%);
  color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  animation: fade 0.15s;
  max-width: 100%;

  &-header {
    background: linear-gradient(to right bottom, #0093e9, #80d0c7);
    padding: 12px 12px;

    p {
      font-size: 20px;
      font-weight: 600;
      text-align: center;
    }
  }

  &-form {
    padding: 16px 12px;

    .form-group {
      margin: 24px 0;
    }

    .form-buttons {
      margin: 48px 0 24px;
      display: flex;
      justify-content: center;

      a {
        &:first-of-type {
          margin-right: 24px;
        }
      }
    }

    form {
      label {
        color: #333;
        font-size: 18px;
        font-weight: 600;
        display: block;
      }

      input {
        width: 100%;
        font-size: 16px;
        padding: 12px 16px;
        margin-top: 16px;
        border: none;
        outline: none;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(0, 147, 233, 0.2);
      }

      textarea {
        width: 100%;
        font-size: 16px;
        padding: 12px 16px;
        margin-top: 16px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(0, 147, 233, 0.2);
        outline: none;
        height: 120px;
        resize: none;
      }

      p {
        color: #333;
        font-size: 18px;
        font-weight: 600;
      }

      .form-radio-group {
        margin: 24px 0;

        p {
          color: #333;
          font-size: 18px;
          font-weight: 600;
        }

        .radio {
          display: flex;

          .radio-group {
            margin-left: 24px;
            label {
              color: #333;
              display: inline-block;
              font-size: 16px;
              font-weight: 500;
              margin-right: 12px;
            }
            input {
              width: unset;
              font-size: 16px;
              padding: 12px 16px;
              margin-top: 16px;
              box-shadow: none;
              border: none;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 720px) {
  .event-modal {
    max-width: 92%;
  }
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}
</style>
