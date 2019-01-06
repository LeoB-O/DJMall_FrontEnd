<template>
<div>
  <GoodsInfo class="goods-info" imageUrl="/static/logo.png" :price="99" name="Nike Air VaporMax" description="Men Shoes"></GoodsInfo>
</div>
</template>

<script>
import GoodsInfo from '@/components/GoodsInfo'

export default {
  name: 'Catagory',
  components: {
    GoodsInfo
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
