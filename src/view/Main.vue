<template>
  <div>
    <Header class="header" :is-login="isLogin" :user-i-d="userID"></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header'
import axios from '@/axios'

export default {
  name: 'Main',
  components: {
    'Header': Header
  },
  data () {
    return {
      isLogin: false,
      userID: null
    }
  },
  created () {
    axios.get('/user').then((response) => {
      this.isLogin = !!response.success
      this.userID = response.success ? response.data.id : null
    })
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
