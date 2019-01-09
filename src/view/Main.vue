<template>
  <div>
    <Header class="header" :is-login="false" user-i-d="123"></Header>
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
  display: flex;
  flex-direction: column;
}

.header {
  height: auto;
  width: 100%;
  flex-direction: row;
}
</style>
