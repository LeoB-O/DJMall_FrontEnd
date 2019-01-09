<template>
<div class="goods-info">
  <router-link :to="'/good/' + id" class="goods-info-img">
    <img :src="imageUrl" />
  </router-link>
  <div class="goods-info-details">
    <div class="goods-info-name">{{name}}</div>
    <div class="goods-info-descr">{{description}}</div>
    <div class="goods-info-price">${{price}}</div>
  </div>
</div>
</template>

<script>
// ID
// image-url
// name
// price
// description
export default {
  name: 'GoodsInfo',
  props: {
    id: String,
    imageUrl: String,
    name: String,
    price: Number,
    description: String
  }
}
</script>

<style scoped>
* {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
}

.goods-info {
  margin: 5%;
}

.goods-info-name {
  font-weight: bold;
}

.goods-info-img {
  width: 100%;
  height: auto;
  margin-bottom: 5%;
}

.goods-info-details {
  height: 20%;
}
</style>
