<template>
  <Menu active-name="1-2" :open-names="['1']">
    <Submenu v-for="content in contents" :name="content.name" :key="content.name">
      <template slot="title">
        {{content.name}}
      </template>
      <MenuItem v-if="inStore" @click.native="handleClick(content.name, item)" v-for="item in content.value" :key="item">{{item}}</MenuItem>
      <MenuItem v-if="!inStore" :to="'/catagory/'+content.name+'-'+item" :name="item" v-for="item in content.value" :key="item">{{item}}</MenuItem>
    </Submenu>
  </Menu>
</template>

<script>
import axios from '../axios'
export default {
  name: 'MyMenu',
  props: {
    contents: Array,
    inStore: false,
    storeId: String
  },
  methods: {
    handleClick (cate, subcate) {
      axios.get('/goods/store?id=' + this.storeId + '&category=' + cate + '-' + subcate).then((response) => {
        this.$emit('select', response.data.goods)
      })
    }
  }
}
</script>

<style scoped>
* {
  display: flex;
  flex-direction: column;
}
</style>
