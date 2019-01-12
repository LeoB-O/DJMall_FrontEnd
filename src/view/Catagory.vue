<template>
  <div>
    <GoodsInfo v-for="good in goods" class="goods-info" :imageUrl="good.imageUrl" :price="good.price" :name="good.name"
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
      goods: []
    }
  },
  mounted () {
    if (this.$route.query.search) {
      axios.get('/search?search=' + this.$route.query.search).then((response) => {
        this.goods = response.goods
      })
    } else {
      axios.get('/goods/category?category=' + this.$route.params.catagory).then((response) => {
        this.goods = response.data.goods
      })
    }
  },
  watch: {
    '$route' (to, from) {
      axios.get('/goods/category?category=' + this.$route.params.catagory).then((response) => {
        this.goods = response.data.goods
      })
    }
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
