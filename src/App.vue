<script>
import MySidebar from '@/components/Sidebar/MySidebar.vue'
import { RouterView } from 'vue-router'
import { sidebarWidth } from '@/components/Sidebar/state'

export default {
  components: {
    MySidebar,
    RouterView
  },
  setup() {
    return { sidebarWidth }
  }
}
</script>

<template>
  <MySidebar />
  <div :style="{ 'margin-left': sidebarWidth }">
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1600px;
  margin: auto;
  margin-left: calc(auto - 15px);
  padding-left: 15px;
}
</style>
