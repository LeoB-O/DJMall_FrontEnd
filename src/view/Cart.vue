<template>
  <div>
    <CartItem class="cart-item" name="test" price="12" amount="2" imgUrl="../static/logo.png" :type-args="['size:12','color:white']"></CartItem>
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
.cart-item {
  width: 40%;
}
</style>
