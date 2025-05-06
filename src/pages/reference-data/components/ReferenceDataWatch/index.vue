<script setup lang="ts">
import { onBeforeUpdate, onUpdated, ref, watch } from 'vue'

defineOptions({ name: 'ReferenceDataWatch' })

const data1 = ref('1')
const data = ref({ key: 'value' })

const update = () => {
  data.value = { key: 'value' }
  data1.value = '1'
}

function timeConsumingProcessing(value: string) {
  console.log('耗时操作正在执行')
  // 模拟耗时操作
  const start = Date.now()
  while(Date.now() - start <= 1000) {
  }
  return value
}

const processed = ref('value')

watch(() => data1.value, () => {
  processed.value = timeConsumingProcessing(data1.value)
}, {
  immediate: true,
})

onBeforeUpdate(() => {
  console.log('组件开始更新')
})

onUpdated(() => {
  console.log('组件已更新')
})
</script>

<template>
  {{ processed }}
  <button @click="update">update</button>
</template>
