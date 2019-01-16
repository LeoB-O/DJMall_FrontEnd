<template>
  <Carousel style="height: 90%; width: 90%; margin-left: 5%;" autoplay v-model="value1" loop>
    <CarouselItem style="height: 100%; overflow: hidden;" v-for="imgUrl in imgUrls" :key="imgUrl.goodId">
      <!--<img style="object-fit: cover; overflow: hidden" :src="imgUrl" />-->
      <div @click="handleClick(imgUrl.goodId)" :style="'background-image: url('+imgUrl.imageUrl+');background-size:contain;background-repeat:no-repeat;background-position:50% 50%;width:100%;height:100%'"></div>
    </CarouselItem>
  </Carousel>
</template>

<script>
import axios from '@/axios'

export default {
  name: 'Content',
  data () {
    return {
      value1: 0,
      imgUrls: []
    }
  },
  created () {
    axios.get('/indexImages').then((response) => {
      this.imgUrls = response.data.imgUrls
    })
  },
  methods: {
    handleClick: function (goodId) {
      this.$router.push('/good/' + goodId)
    }
  }
}
</script>

<style>
.ivu-carousel-track {
  height: 100%;
}
</style>
