<!--
 * @Author: xiao pu
 * @Date: 2021-03-02 16:53:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-03 09:46:48
 * @Description: file content
 * @FilePath: /qiankun-example/main/src/view/content.vue
-->
<template>
  <div class="content">
    <h2>this is main content component</h2>
    <div ref="reactRef"></div>
  </div>
</template>

<script>
import { loadMicroApp } from 'qiankun'
import microApps from '../micro-app'

export default {
  name: 'Content',
  components: {},
  data() {
    return {
      microApp: null
    }
  },
  mounted() {
    console.log('this.$refs.reactRef:', '' + this.$refs.reactRef)
    this.microApp = loadMicroApp({
      ...microApps[1],
      container: this.$refs.reactRef
    })
  },

  async beforeDestroy() {
    this.microApp.unmount()
  },

  destroyed() {}
}
</script>
