<script setup lang="ts">
import { routes } from '@/router'
</script>

<template>
  <el-menu class="menu" :default-active="$route.path" router>
    <el-menu-item
        v-for="item in routes.filter((e: any) => e.meta).sort((a: any, b: any) => a.meta.index-b.meta.index)"
        :index="item.path">
      {{ item.name }}
    </el-menu-item>
  </el-menu>
  <div class="main">
    <slot/>
  </div>
</template>

<style scoped>
.menu {
  position: fixed;
  height: 100vh;
  width: 200px;
}

.main {
  padding: 16px 16px 16px 216px;
}
</style>
