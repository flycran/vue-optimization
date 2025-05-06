<script lang="ts" setup>
import Page from '@/components/Page.vue'
import Reload from '@/components/Reload.vue'
import { defineAsyncComponent } from 'vue'

const ReferenceDataAfter = defineAsyncComponent(() => import('@/pages/reference-data/components/ReferenceDataAfter/index.vue'))
const ReferenceDataComputed = defineAsyncComponent(() => import('@/pages/reference-data/components/ReferenceDataComputed/index.vue'))
const ReferenceDataWatch = defineAsyncComponent(() => import('@/pages/reference-data/components/ReferenceDataWatch/index.vue'))
const ReferenceDataSplit = defineAsyncComponent(() => import('@/pages/reference-data/components/ReferenceDataSplit/index.vue'))
</script>

<template>
  <Page>
    <div class="data">
      <h1>引用数据类型</h1>
      <el-tabs type="border-card">
        <el-tab-pane lazy label="优化前">
          <Reload>
            <ReferenceDataAfter/>
          </Reload>
        </el-tab-pane>
        <el-tab-pane lazy label="使用computed">
          <Reload>
            <ReferenceDataComputed/>
          </Reload>
        </el-tab-pane>
        <el-tab-pane lazy label="使用watch">
          <Reload>
            <ReferenceDataWatch/>
          </Reload>
        </el-tab-pane>
        <el-tab-pane lazy label="分割组件">
          <Reload>
            <ReferenceDataSplit/>
          </Reload>
        </el-tab-pane>
      </el-tabs>
    </div>
  </Page>
</template>

<route>
{
name: "引用数据类型",
meta: {
index: 1
}
}
</route>
