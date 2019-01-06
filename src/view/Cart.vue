<template>
  <div>
    <CartItem name="test" price="12" amount="2" imgUrl="../static/logo.png" :type-args="['size:12']"></CartItem>
  </div>
</template>

<script>
import CartItem from '@/components/CartItem'

export default {
  name: 'Cart',
  components: {
    CartItem
  }
}
</script>

<style scoped>

</style>
