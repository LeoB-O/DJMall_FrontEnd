<template>
  <Menu class="header-menu" mode="horizontal" theme="light" active-name="1">
    <Icon size="30" class="header-icon" type="logo-bitcoin" />
    <div class="header-title">DJ MALL</div>
    <Search class="header-search"></Search>
    <MenuItem v-if="isLogin" name="1" :to="'/personalInfo/'+userID">
      <Icon type="ios-paper" />
      个人中心
    </MenuItem>
    <MenuItem v-if="!isLogin" name="2" to="/signin">
      <Icon type="ios-paper" />
      登录
    </MenuItem>
    <MenuItem v-if="!isLogin" name="3" to="/signup">
      <Icon type="ios-people" />
      注册
    </MenuItem>
    <MenuItem name="4" to="/cart">
      <Icon type="ios-construct" />
      购物车
    </MenuItem>
  </Menu>
</template>

<script>
import Search from '@/components/Search'

export default {
  name: 'Header',
  props: {
    isLogin: Boolean,
    userID: String
  },
  components: {
    Search
  }
}
</script>

<style scoped>
.header-icon {
  padding: 15px 5px;
  position: absolute;
  left: 0px;
}

.header-search {
  padding: 10px 5px;
}

.header-title {
  position: absolute;
  left: 40px;
  font-size: 36px;
}

.header-menu {
  display: flex;
  justify-content: flex-end;
}
</style>
