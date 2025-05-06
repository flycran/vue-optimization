<script lang="ts" setup>
import Page from '@/components/Page.vue'
import Reload from '@/components/Reload.vue'
import { defineAsyncComponent } from 'vue'

const ForListAfter = defineAsyncComponent(() => import('@/pages/for-list/components/ForListAfter/index.vue'))
const ForListSplit = defineAsyncComponent(() => import('@/pages/for-list/components/ForListSplit/index.vue'))
</script>

<template>
  <Page>
    <div class="data">
      <h1>列表渲染</h1>
      <el-tabs type="border-card">
        <el-tab-pane lazy label="优化前">
          <Reload>
            <ForListAfter/>
          </Reload>
        </el-tab-pane>
        <el-tab-pane lazy label="分割组件">
          <Reload>
            <ForListSplit/>
          </Reload>
        </el-tab-pane>
      </el-tabs>
    </div>
  </Page>
</template>

<route>
{
"name": "列表渲染",
"meta": {
"index": 2
}
}
</route>

