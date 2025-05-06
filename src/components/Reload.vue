<script setup lang="ts">
import { ref } from 'vue'

const show = ref(true)

const reload = async () => {
  show.value = false
  await Promise.resolve()
  show.value = true
}
</script>

<template>
  <div class="box">
    <div>
      <el-button @click="reload">重新加载</el-button>
    </div>
    <Suspense>
      <template #fallback>
        <div v-loading class="loading">

        </div>
      </template>
      <div>
        <slot v-if="show"/>
      </div>
    </Suspense>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.loading {
  min-height: 300px;
}
</style>
