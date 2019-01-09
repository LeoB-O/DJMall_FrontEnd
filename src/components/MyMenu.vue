<template>
  <Menu active-name="1-2" :open-names="['1']">
    <Submenu v-for="content in contents" :name="content.name" :key="content.name">
      <template slot="title">
        {{content.name}}
      </template>
      <MenuItem :to="'/catagory/'+item" :name="item" v-for="item in content.value" :key="item">{{item}}</MenuItem>
    </Submenu>
  </Menu>
</template>

<script>
export default {
  name: 'MyMenu',
  props: {
    contents: Array
  }
}
</script>

<style scoped>
* {
  display: flex;
  flex-direction: column;
}
</style>
