<script setup lang="ts">
import compBody from './view/components/compBody.vue';
</script>

<template>
  <compBody/>
</template>

<style>
  .light-mode {
    --body: #f9faff;
    --body-2: #8a8a8a;
    --border: #E3E1DE;
    --text: #000000;
    --text-2: #fff;
    --box-shadow: 5px 5px 10px #00000045;
  }

  body, html {
    min-height: 100vh;
    min-width: 100vw;
    overflow-x: clip;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
