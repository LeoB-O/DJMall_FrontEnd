<template>
  <div>
    <GoodsInfo v-for="good in goods" class="goods-info" :imageUrl="good.imageUrl" :price="99" :name="good.name"
               :description="good.description" :id="good.id" :key="good.name"></GoodsInfo>
  </div>
</template>

<script>
import GoodsInfo from '@/components/GoodsInfo'
import axios from '@/axios'

export default {
  name: 'Catagory',
  components: {
    GoodsInfo
  },
  data () {
    return {
      goods: [{id: '123', name: 'Nike Air VaporMax', price: 33, imageUrl: '/static/logo.png', description: 'Men\'s Shoes'}]
    }
  },
  created () {
    axios.get('/goods/catagory?catagory=' + this.$route.params.catagory).then((response) => { console.log(response) })
  }
}
</script>

<style scoped>
  * {
    width: 100%;
    height: 100%;
  }

  .goods-info {
    width: 20%;
    height: 40%;
  }
</style>
