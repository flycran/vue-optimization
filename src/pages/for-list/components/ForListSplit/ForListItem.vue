<script setup lang="ts">
defineProps<{
  data: number
}>()

function timeConsumingProcessing(value: number) {
  console.log('耗时操作正在执行')
  // 模拟耗时操作
  const start = Date.now()
  while(Date.now() - start <= 1000) {
  }
  return value
}
</script>

<template>
{{ timeConsumingProcessing(data) }}
</template>

<style scoped>

</style>
