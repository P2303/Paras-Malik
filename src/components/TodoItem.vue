<template>
  <div>
      <h3 v-if="!editing">{{todo.title}}</h3>


        <input
          v-bind:value="todoText"
          @change="todoTextChange"
          type="text"
        />
      </div>
        <button @click="updateTodoI(todo)">{{editing?'Update':'Edit'}}</button>
        <button @click="deleteTodo(todo.id)">Delete</button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    todo: {}
  },
  data() {
    return {
      todoText: "",
      editing: false,
      completed: false
    };
  },
  methods: {
    ...mapActions(["deleteTodo", "updateTodo", "changeCompleted"]),
    onCompleted() {
      this.completed = this.completed == true ? false : true;
    },
    todoTextChange(e) {
      this.todoText = e.target.value;
    },
    updateTodoI(todo) {
      this.editing = this.editing == true ? false : true;
      if (this.editing) {
        this.todoText = todo.title;
        this.updateTodo(todo);
      } else {
        todo.title = this.todoText;
        todo.complete = this.completed;
        this.changeCompleted();
      }
    }
  }
};
</script>

<style scoped>
</style>