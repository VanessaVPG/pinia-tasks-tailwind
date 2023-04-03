<template>
  <div>
    <header
      class="font-mono flex justify-center text-gray-200 gap-4 shadow-md items-center mx-auto p-4 bg-slate-950"
    >
      <img
        src="~/assets/img/pinia.svg"
        alt="logo do pinia"
        class="max-w-[60px] -rotate-6"
      />
      <h1 class="text-4xl font-bold">Pinia Tasks</h1>
    </header>
    <slot />
    <footer class="container fixed bottom-0 h-[50px] ">
      <a
        href="https://github.com/VanessaVPG"
        class="text-gray-500 text-center cursor-pointer"
      >
        <h3>Feito por @vanessavpg</h3>
      </a>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>