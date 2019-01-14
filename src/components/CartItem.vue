<template>
<div class="cart-item">
  <div class="cart-item-img">
    <img :src="imgUrl" />
  </div>
  <div class="cart-item-info">
    <div class="cart-item-name">{{name}}</div>
    <div class="cart-item-detail">
      <div v-for="typeArg in typeArgs" :key="typeArg">
        {{typeArg}}
      </div>
      <div class="cart-item-action">
        <Button @click="handleEdit" class="cart-item-action" type="warning">修改</Button>
        <Button @click="handleDelete" class="cart-item-action" type="error">删除</Button>
      </div>
    </div>
  </div>
  <div class="cart-item-price">${{price}}</div>
</div>
</template>

<script>
  import axios from '@/axios'
export default {
  name: 'CartItem',
  props: {
    id: String,
    name: String,
    price: Number,
    typeArgs: Array,
    amount: Number,
    imgUrl: String
  },
  methods: {
    handleEdit: function () {

    },
    handleDelete: function () {
      axios.delete('/api/cart?id='+this.id);
      this.$router.go(0);
    }
  }
}
</script>

<style scoped>
* {
  width: 100%;
  height: 100%;
  font-size: 14px;
  display: flex;
  justify-content: space-around;
  font-family: "Apple Braille";
}

.cart-item {
  border: 1px solid lightgrey;
  border-radius: 5px;
}

.cart-item-img {
  width: auto;
  height: 100%;
  margin-right: 10px;
}

.cart-item-info {
  flex-direction: column;
  justify-content: flex-start;
}

.cart-item-name {
  margin: 0px 0px 10px 0px;
  font-size: 20px;
  font-weight: bold;
}

.cart-item-detail {
  margin: 0px 0px 5px 0px;
  flex-direction: column;
}

.cart-item-action {
  margin: 0px 5px;
}

.cart-item-price {
  color: #f77;
  font-size: 20px;
  justify-content: flex-end;
  margin: 5px;
}
</style>
