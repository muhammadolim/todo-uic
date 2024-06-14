<template>
  <div class="mb-4">
    <input
      v-model="newTodo"
      @keyup.enter="addTodo"
      class="p-2 border rounded w-full"
      placeholder="Add to-do"
    />
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const newTodo = ref("");
const emit = defineEmits(["add-todo"]);

const addTodo = () => {
  if (newTodo.value.trim()) {
    emit("add-todo", newTodo.value);
    newTodo.value = "";
  }
};
</script>
