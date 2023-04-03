<template>
  <form @submit.prevent="handleSubmit" class="flex justify-between max-w-[400px] mx-auto my-10 gap-3">
    <input type="text" v-model="newTask" placeholder="Fazer x coisa" class="w-72 gap-3 p-4 rounded-full" />
    <button @click="handleSubmit()">Adicionar</button>
  </form>
</template>

<script setup>
import { useTaskStore } from "~/stores/tasks";

const taskStore = useTaskStore();
const newTask = ref("");

const handleSubmit = () => {
  if (newTask.value !== "") {
    taskStore.addTask({
      title: newTask.value,
      isFav: false,
      id: Math.floor(Math.random() * 10000),
    });
    newTask.value = "";
  }
};
</script>

<style scoped>
</style> 