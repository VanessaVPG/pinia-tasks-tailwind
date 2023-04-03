<template>
  <div
    class="items-center gap-10 flex border-2 p-3 max-w-[400px] mx-auto justify-between rounded-md my-2"
  >
    <h3>
      {{ task.title }}
    </h3>
    <div>
      <Icon
        name="line-md:remove"
        class="m-2"
        role="button"
        @click="taskStore.deleteTask(task.id)"
      ></Icon>
      <Icon
        :name="`${heartIcon}`"
        class="m-2"
        role="button"
        @click="taskStore.toggleFavorites(task.id)"
      ></Icon>
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from "~~/stores/tasks";

const { task } = defineProps(["task"]);

const taskStore = useTaskStore();

const heartIcon = computed(() => {
  return task.isFav ? "line-md:heart-filled" : "line-md:heart";
});
</script>

<style lang="scss" scoped>
</style>