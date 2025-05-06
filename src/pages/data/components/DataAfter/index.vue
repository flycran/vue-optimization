<script setup lang="ts">
import { ref } from 'vue'
defineOptions({ name: 'DataBefore' })

const data1 = ref('data1')
const data2 = ref(1)

function timeConsumingProcessing(value: string) {
  console.log('耗时操作正在执行')
  // 模拟耗时操作
  const start = Date.now()
  while(Date.now() - start <= 1000) {
  }
  return value
}

const update = () => {
  data2.value++
}

</script>

<template>
  <div>
    data1:{{ timeConsumingProcessing(data1) }}
  </div>
  <div>
    data2:{{ data2 }}
  </div>
  <button @click="update">
    update
  </button>
</template>
