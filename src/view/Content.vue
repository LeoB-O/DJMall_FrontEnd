<template>
  <Carousel autoplay v-model="value1" loop>
    <CarouselItem v-for="imgUrl in imgUrls" :key="imgUrl">
      <img :src="imgUrl" />
    </CarouselItem>
  </Carousel>
</template>

<script>
export default {
  name: 'Content',
  data () {
    return {
      value1: 0,
      imgUrls: ['/static/logo.png', '/static/logo.png']
    }
  }
}
</script>

<style scoped>

</style>
