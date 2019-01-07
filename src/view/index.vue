<template>
  <div>
    <MyMenu class="index-menu"></MyMenu>
    <div class="index-content"><router-view></router-view></div>
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
  flex-direction: row;
}

.index-menu {
  float: left;
  width: 15%;
  height: 100%;
}

.index-content {
  float: right;
  width: 85%;
}
</style>
