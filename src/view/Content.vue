<template>
  <Carousel autoplay v-model="value1" loop>
    <CarouselItem v-for="imgUrl in imgUrls" :key="imgUrl">
      <img :src="imgUrl" />
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
  }
}
</script>

<style scoped>

</style>
