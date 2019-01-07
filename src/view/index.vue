<template>
  <div>
    <MyMenu></MyMenu>
    <router-view></router-view>
  </div>
</template>

<script>
import MyMenu from '@/components/MyMenu'
export default {
  name: 'index',
  components: {
    MyMenu
  }
}
</script>

<style scoped>
* {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
