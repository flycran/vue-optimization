<script lang="ts" setup>
import { onBeforeUpdate, onUpdated, ref } from 'vue'

defineOptions({ name: 'ReferenceDataSplit' })

import Field from './Field.vue'

const data1 = ref('1')
const data = ref({ key: 'value' })

const update = () => {
  data.value = { key: 'value' }
  data1.value = '1'
}

onBeforeUpdate(() => {
  console.log('组件开始更新')
})

onUpdated(() => {
  console.log('组件已更新')
})
</script>

<template>
  <Field :value="data.key"/>
  <button @click="update">update</button>
</template>
