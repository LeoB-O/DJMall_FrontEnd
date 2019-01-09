<template>
<div>
  <div class="com-content">
    <div class="com-menu">
      <MyMenu :contents="menu"></MyMenu>
    </div>
    <div class="com-goods">
      <div class="com-name">{{name}}</div>
      <GoodsInfo v-for="good in goods" class="goods-info" :imageUrl="good.imageUrl" :price="good.price" :name="good.name"
                 :description="good.description" :id="good.id" :key="good.name"></GoodsInfo>
    </div>
  </div>
</div>
</template>

<script>
import GoodsInfo from '@/components/GoodsInfo'
import MyMenu from '@/components/MyMenu'

export default {
  name: 'CommercialIndex',
  components: {
    GoodsInfo,
    MyMenu
  },
  data () {
    return {
      name: 'NIKE官方旗舰店',
      menu: [{name: 'cloths', value: ['Men', 'Women']}, {name: '3C', value: ['Phone', 'Computer']}],
      goods: [{id: '123', name: 'Nike Air VaporMax', price: 33, imageUrl: '/static/logo.png', description: 'Men\'s Shoes'}]
    }
  }
}
</script>

<style scoped>
  * {
    width: 100%;
    height: 100%;
  }

  .com-name {
    font-size: 36px;
    height: 10%;
  }

  .com-content {
    display: flex;
  }

  .com-menu {
    width: 20%;
  }

  .com-goods {
    width: 80%;
  }

  .goods-info {
    width: 20%;
    height: 40%;
  }
</style>
