<script setup lang="ts">
import { ref } from 'vue'

defineOptions({ name: 'ForListAfter' })

const list = ref([
  {
    data: 1,
  },
  {
    data: 2,
  },
  {
    data: 3,
  },
])

function timeConsumingProcessing(value: number) {
  console.log('耗时操作正在执行')
  // 模拟耗时操作
  const start = Date.now()
  while(Date.now() - start <= 1000) {
  }
  return value
}

const update = () => {
  list.value[0].data++
}
</script>

<template>
  <div>
    <div v-for="item in list">
      {{ timeConsumingProcessing(item.data) }}
    </div>
  </div>
  <button @click="update">
    update
  </button>
</template>
