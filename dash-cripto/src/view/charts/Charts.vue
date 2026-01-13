<script setup lang="ts">
import { computed } from 'vue';
import { Line } from 'vue-chartjs';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    type ChartOptions,
    type ChartData,
} from 'chart.js'

const props = defineProps({
    prop_labels: {
        type: Array as () => string[],
        required: true
    },
    prop_dataLabel: {
        type: String,
        required: true
    },
    prop_data: {
        type: Array as unknown as () => [number, number, number],
        required: true
    }
})

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

const colorGraph = (data: [number, number, number]): string => {
    const [high, low, current] = data
    if (current < high && current > low) {
        return 'yellow'
    }
    else if (current >= high) {
        return 'green'
    }
    return 'red'
}

const chartData = computed<ChartData<'line'>>(() => ({
    labels: props.prop_labels,
    datasets: [
        {
            label: props.prop_dataLabel,
            backgroundColor: colorGraph(props.prop_data),
            borderColor: colorGraph(props.prop_data),
            data: props.prop_data,
            tension: 0.6
        }
    ]
}))

const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top'
        }
    }
}

</script>

<template>
    <Line :data="chartData" :options="chartOptions" />
</template>