<template>
  <div class="cart">
    <div class="cart-items">
      <div v-if="itemNum==0" style="font-size: 24px;">购物车为空</div>
      <CartItem v-for="cartItem in cartItems" class="cart-item" :name="cartItem.name" :price="cartItem.price"
                :amount="cartItem.amount" :imgUrl="cartItem.imgUrl" :key="cartItem.name"
                :type-args="cartItem.typeArgs"></CartItem>
    </div>
    <div class="cart-infos">
      <div class="cart-info">小计</div>
      <div class="cart-info">购物车中物品总数：{{itemNum}}</div>
      <div class="cart-info">订单商品总金额：${{total}}</div>
      <div class="cart-info">运费：${{deliveryFee}}</div>
      <div class="cart-info">订单总计：${{total+deliveryFee}}</div>
      <Button class="cart-submit" type="warning">结算</Button>
    </div>
  </div>
</template>

<script>
import CartItem from '@/components/CartItem'
import axios from '@/axios'

export default {
  name: 'Cart',
  components: {
    CartItem
  },
  data () {
    return {
      cartItems: [],
      deliveryFee: 0
    }
  },
  computed: {
    itemNum: function () {
      return this.cartItems.length
    },
    total: function () {
      return this.cartItems.reduce((accumulate, currentValue) => accumulate + currentValue.price, 0)
    }
  },
  created () {
    axios.get('/api/cart').then((response) => { this.cartItems = response.data.cartItems })
  }
}
</script>

<style scoped>
  * {
    width: 100%;
    height: 100%;
  }

  .cart {
    flex-direction: row;
  }

  .cart-items {
    margin: 5%;
    flex-direction: column;
    width: 70%;
    /*border: solid 1px;*/
    /*height: auto;*/
  }

  .cart-item {
    width: 80%;
    height: 20%;
    margin: 20px;
  }

  .cart-infos {
    width: 30%;
    height: 40%;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 5%;
    border: solid 1px lightgrey;
    font-size: 24px;
    color: #fff;
    background-color: rgba(0,0,0,1);
    border-radius: 5px;
  }

  .cart-info {
    height: auto;
    width: auto;
    margin: 10px;
    border-bottom: #333 1px solid;
    text-align: left;
  }

  .cart-submit {
    width: 80%;
    height: auto;
  }
</style>
