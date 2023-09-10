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
    <div class="container mx-auto px-4 mt-4">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
