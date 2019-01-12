<template>
<div class="goods-info">
  <router-link :to="'/good/' + id" class="goods-info-img">
    <img style="max-height: 100%; width: auto; height: 100%;" :src="imageUrl" />
  </router-link>
  <div class="goods-info-details">
    <div class="goods-info-name">{{name}}</div>
    <div class="goods-info-descr">{{descr}}</div>
    <div class="goods-info-price">${{price}}</div>
    <router-link :to="'/commercial/'+merchantID">{{merchantName}}</router-link>
  </div>
</div>
</template>

<script>
import axios from '../axios'
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
    description: String,
    merchantID: String
  },
  data () {
    return {
      merchantName: ''
    }
  },
  computed: {
    descr: function () {
      if (this.description.length < 15) {
        return this.description
      } else {
        return this.description.slice(0, 15) + '...'
      }
    }
  },
  created () {
    let that = this
    axios.get('/store?id=' + this.merchantID).then(function (response) {
      that.merchantName = response.data.name
    })
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
  height: 100%;
  margin-bottom: 5%;
  overflow: hidden;
}

.goods-info-details {
  height: 20%;
}
</style>
