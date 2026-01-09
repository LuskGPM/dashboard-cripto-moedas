<script setup lang="ts">
import { ref } from 'vue';
import { Bar } from 'vue-chartjs';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    plugins
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = ref({
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
    datasets: [
        {
            label: 'Vendas 2025',
            backgroundColor: '#42b883',
            data: [40, 20, 12, 39]
        }
    ]
})

const chartOptions = ref({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top' as const
        },
        title: {
            display: true,
            text: 'Relatório'
        }
    }
})

</script>

<template>
    <div style="width: 600px;">
        <Bar :data="chartData" :options="chartOptions"/>
    </div>
</template>