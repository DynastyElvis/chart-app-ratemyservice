<template>
  <div>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import Highcharts from 'highcharts'
import { Chart } from 'highcharts-vue'

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

const chartOptions = ref({
  chart: {
    type: 'column'
  },
  title: {
    text: 'Data Visualization'
  },
  xAxis: {
    type: 'category'
  },
  yAxis: {
    title: {
      text: 'Values'
    }
  },
  series: [{
    name: 'Values',
    data: []
  }]
})

watch(() => props.data, (newData) => {
  chartOptions.value.series[0].data = newData.map(item => ({
    name: item.label,
    y: item.value
  }))
}, { immediate: true })
</script>