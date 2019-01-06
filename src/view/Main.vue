<template>
  <div>
    <Header class="header"></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Main',
  components: {
    'Header': Header
  }
}
</script>

<style scoped>
* {
  width: 100%;
  height: 100%;
}

.header {
  height: 20%;
}
</style>
