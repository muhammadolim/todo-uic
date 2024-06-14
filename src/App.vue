<template>
  <h1 class="mb-4">To Do App</h1>
  <div>
    <TodoInput @add-todo="addTodo" />
    <ul>
      <TodoItem
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
        :index="index"
        @toggle-complete="toggleComplete"
        @remove-todo="removeTodo"
      />
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

import TodoInput from "./components/TodoInput.vue";
import TodoItem from "./components/TodoItem.vue";

const todos = ref([]);

const addTodo = (todoText) => {
  todos.value.push({ text: todoText, completed: false });
};

const toggleComplete = (todo) => {
  todo.completed = !todo.completed;
};

const removeTodo = (index) => {
  todos.value.splice(index, 1);
};
</script>
