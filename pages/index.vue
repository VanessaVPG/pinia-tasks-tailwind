<template>
  <main>
    <nav class="flex items-center justify-center gap-20 my-5">
      <button @click="filter = 'favorites'">Favoritas</button>
      <button @click="filter = 'all'">Todas as tarefas</button>
    </nav>

    <div>
      <TaskForm />
    </div>
    <ul
      class="flex flex-col mx-auto text-white text-center p-4"
      v-if="filter === 'all'"
    >
      <p>
        Você tem {{ taskStore.totalCount }} tarefa<span
          v-if="taskStore.totalCount > 1"
          >s</span
        >
        para fazer.
      </p>
      <li v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetail :task="task" />
      </li>
    </ul>
    <div v-if="taskStore.isLoading">
      <Icon name="line-md:loading-twotone-loop" />
    </div>
    <ul
      class="flex flex-col mx-auto text-white text-center p-4"
      v-if="filter === 'favorites'"
    >
      <p>
        Você tem {{ taskStore.favoritesCount }} tarefa<span
          v-if="taskStore.favoritesCount > 1"
          >s</span
        >
        favoritas para fazer.
      </p>
      <li
        v-for="task in taskStore.favorites"
        :key="task.id"
        
      >
        <TaskDetail :task="task"/>
      </li>
    </ul>
    <button @click="deleteAll" class="flex mx-auto mt-5">
      Deletar todas as Tasks
    </button>
  </main>
</template>

<script setup>
import TaskDetail from "~~/components/TaskDetail.vue";

import { useTaskStore } from "~/stores/tasks";
const taskStore = useTaskStore();

await taskStore.getTasks();

const filter = ref("all");
const deleteAll = () => {
  taskStore.tasks.forEach((task) => {
    taskStore.deleteTask(task.id);
  });
};
</script>
<style scoped>
ul {
  max-height: 400px;
  overflow: auto;
}
</style>
