<template>
  <div>
    <div class="com-content">
      <div class="com-menu">
        <MyMenu :contents="menu" :inStore="true" :storeId="$route.params.commercialId" @select="handleSelect"></MyMenu>
      </div>
      <div class="com-goods">
        <div class="com-name">{{name}}</div>
        <div class="goods-infos">
          <GoodsInfo v-for="good in goods" class="goods-info" :imageUrl="good.imageUrl" :price="good.price"
                     :name="good.name"
                     :description="good.description" :id="good.id" :key="good.name"></GoodsInfo>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsInfo from '@/components/GoodsInfo'
import MyMenu from '@/components/MyMenu'
import axios from '@/axios'

export default {
  name: 'CommercialIndex',
  components: {
    GoodsInfo,
    MyMenu
  },
  data () {
    return {
      name: 'NIKE官方旗舰店',
      menu: [],
      goods: []
    }
  },
  created () {
    axios.get('/store?id=' + this.$route.params.commercialId).then((response) => {
      this.name = response.data.name
      this.menu = response.data.category
    })
  },
  methods: {
    handleSelect: function (data) {
      this.goods = data.map((current) => {
        return {
          name: current.name,
          imageUrl: current.imgUrls[0],
          price: current.price,
          description: current.description,
          id: current.id
        }
      })
    }
  }
}
</script>

<style scoped>
  * {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .com-name {
    font-size: 36px;
    height: 10%;
    justify-content: center;
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
    flex-wrap: nowrap;
  }

  .goods-infos {
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
