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
  props: {
    imgUrls: Array
  },
  data () {
    return {
      value1: 0
    }
  }
}
</script>

<style scoped>

</style>
