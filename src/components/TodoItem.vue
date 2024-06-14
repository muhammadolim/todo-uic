<template>
  <li class="flex justify-between items-center p-2 border-b">
    <span
      :class="{ 'line-through': todo.completed }"
      @click="toggleComplete"
      class="cursor-pointer"
    >
      {{ todo.text }}
    </span>
    <button @click="removeTodo" class="bg-red-500 text-white px-3 py-1 rounded">
      Remove
    </button>
  </li>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  todo: Object,
  index: Number,
});

const emit = defineEmits(["toggle-complete", "remove-todo"]);

const toggleComplete = () => {
  emit("toggle-complete", props.todo);
};

const removeTodo = () => {
  emit("remove-todo", props.index);
};
</script>
