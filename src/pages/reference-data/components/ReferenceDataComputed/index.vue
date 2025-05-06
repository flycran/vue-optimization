<script setup lang="ts">
import { computed, onBeforeUpdate, onUpdated, ref } from 'vue'

defineOptions({ name: 'ReferenceDataComputed' })

const data = ref({ key: 'value' })

const update = () => {
  data.value = { key: 'value' }
}

function timeConsumingProcessing(value: string) {
  console.log('耗时操作正在执行')
  // 模拟耗时操作
  const start = Date.now()
  while(Date.now() - start <= 1000) {
  }
  return value
}

const processed = computed(() => timeConsumingProcessing(data.value.key))

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
