<template>
  <div>
    <MyMenu class="index-menu" :contents="menu"></MyMenu>
    <div class="index-content"><router-view></router-view></div>
  </div>
</template>

<script>
import MyMenu from '@/components/MyMenu'
import axios from '@/axios'

export default {
  name: 'index',
  components: {
    MyMenu
  },
  data () {
    return {
      menu: []
    }
  },
  created () {
    axios.get('/categories').then((response) => {
      this.menu = response.data.menu
    })
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
  flex-direction: column;
}

.index-content {
  float: right;
  width: 85%;
}
</style>
