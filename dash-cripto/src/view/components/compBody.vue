<script setup lang="ts">
import { onMounted } from 'vue';
import { useCoinStore } from '@/vm/stores/pinia';
import compMain from './body-items/compMain.vue';
import BarCharts from '../charts/BarCharts.vue';
const store = useCoinStore();

onMounted(async () => {
    await store.addCoins();
    store.searchLocalFavorites();
    console.log(store.coins)
})
</script>

<template>
    <body class="light-mode">
        <compMain/>
        <BarCharts/>
    </body>
</template>

<style scoped>
    body {
        background-color: var(--body);
    }
</style>