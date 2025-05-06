<script setup lang="ts">
import { ref } from 'vue'
import ForListItem from '@/pages/for-list/components/ForListSplit/ForListItem.vue'

defineOptions({ name: 'ForListSplit' })

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

const update = () => {
  list.value[0].data++
}
</script>

<template>
  <div>
    <div v-for="item in list">
      <ForListItem :data="item.data"/>
    </div>
  </div>
  <button @click="update">
    update
  </button>
</template>
