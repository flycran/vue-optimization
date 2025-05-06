<script lang="ts" setup>
import Page from '@/components/Page.vue'
import Reload from '@/components/Reload.vue'
import { defineAsyncComponent } from 'vue'

const DataAfter = defineAsyncComponent(() => import('@/pages/data/components/DataAfter/index.vue'))
const DataBefore = defineAsyncComponent(() => import('@/pages/data/components/DataBefore/index.vue'))
</script>

<template>
  <Page>
    <div class="data">
      <h1>普通数据</h1>
      <el-tabs type="border-card">
        <el-tab-pane lazy label="优化前">
          <Reload>
            <DataAfter/>
          </Reload>
        </el-tab-pane>
        <el-tab-pane lazy label="优化后">
          <Reload>
            <DataBefore/>
          </Reload>
        </el-tab-pane>
      </el-tabs>
    </div>
  </Page>
</template>

<route>
{
"name": "普通数据",
"meta": {
"index": 0
}
}
</route>

