<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

if(location.pathname === '/') {
  router.replace('/data')
}
</script>

<template>
  <RouterView/>
</template>

<style scoped>
</style>
