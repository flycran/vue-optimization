<script setup lang="ts">
import { onBeforeUpdate, onUpdated, ref } from 'vue'

defineOptions({ name: 'ReferenceDataAfter' })

const data = ref({ key: 'value' })

const update = () => {
  data.value = { key: 'value' }
}

function timeConsumingProcessing(value: string) {
  // 模拟耗时操作
  const start = Date.now()
  while(Date.now() - start <= 1000) {
  }
  return value
}

onBeforeUpdate(() => {
  console.log('组件开始更新')
})

onUpdated(() => {
  console.log('组件已更新')
})
</script>

<template>
  {{ timeConsumingProcessing(data.key) }}
  <button @click="update">update</button>
</template>
