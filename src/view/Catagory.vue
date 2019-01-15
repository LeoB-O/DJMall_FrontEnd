<template>
  <div>
    <GoodsInfo v-for="good in goods" class="goods-info" :imageUrl="good.imageUrl" :price="good.price" :name="good.name"
               :description="good.description" :merchantID="good.merchantID" :id="good.id" :key="good.name"></GoodsInfo>
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
      goods: [],
      test: ''
    }
  },
  async created () {
    if (this.$route.query.search) {
      let test = await axios.get('/search?search=' + this.$route.query.search)
      this.goods = test.data.goods
      let sortType = this.$route.query.sort;
      switch (sortType) {
        case 'priceAscend':
          this.sortByPrice('ascend')
          break;
        case 'priceDescend':
          this.sortByPrice('descend')
          break;
        case 'rate':
          this.sortByRate()
          break
        default:
          this.sortByRate()
      }
    } else {
      axios.get('/goods/category?category=' + this.$route.params.catagory).then((response) => {
        this.goods = response.data.goods
      })
    }
  },
  watch: {
    async '$route' (to, from) {
      if (this.$route.query.search) {
        let test = await axios.get('/search?search=' + this.$route.query.search)
        this.goods = test.data.goods
      } else {
        axios.get('/goods/category?category=' + this.$route.params.catagory).then((response) => {
          this.goods = response.data.goods
        })
      }
    }
  },
  methods: {
    sortByPrice: function (type) {
      if (type == 'ascend') {
        this.goods.sort((a, b) => a.price - b.price)
      } else {
        this.good.sort((a, b) => b.price - a.price)
      }
    },
    sortByRate: function () {
      this.goods.sort((a, b) => a.rate - b.rate)
    }
  }
}
</script>

<style scoped>
  * {
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
  }

  .goods-info {
    width: 20%;
    height: 40%;
    flex-wrap: nowrap;
  }
</style>
