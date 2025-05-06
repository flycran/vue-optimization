<script setup lang="ts">
defineOptions({ name: 'Field' })

defineProps<{
  value: string
}>()

function timeConsumingProcessing(value: string) {
  console.log('耗时操作正在执行')
  // 模拟耗时操作
  const start = Date.now()
  while(Date.now() - start <= 1000) {
  }
  return value
}
</script>

<template>
  {{ timeConsumingProcessing(value) }}
</template>
