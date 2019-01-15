<template>
  <div class="cart">
    <div class="cart-items">
      <div v-if="itemNum==0" style="font-size: 24px;">购物车为空</div>
      <CartItem v-for="cartItem in cartItems" class="cart-item" :name="cartItem.name" :price="cartItem.price"
                :amount="cartItem.amount" :imgUrl="cartItem.imgUrl" :key="cartItem.name"
                :type-args="cartItem.typeArgs" :id="cartItem.id" @edit="handleEdit"></CartItem>
    </div>
    <div class="cart-infos">
      <div class="cart-info">小计</div>
      <div class="cart-info">购物车中物品总数：{{itemNum}}</div>
      <div class="cart-info">订单商品总金额：${{total}}</div>
      <div class="cart-info">运费：${{deliveryFee}}</div>
      <div class="cart-info">订单总计：${{total+deliveryFee}}</div>
      <Button class="cart-submit" type="warning" @click="handleSubmit">结算</Button>
    </div>
    <Modal v-model="modal" @on-ok="handleOk" @on-cancel="handleCancel">
      <Form :label-width="100">
        <FormItem label="请选择支付方式">
          <RadioGroup v-model="payMethod" vertical>
            <Radio label="微信">
              <span>微信支付</span>
            </Radio>
            <Radio label="支付宝">
              <span>支付宝支付</span>
            </Radio>
            <Radio label="银联">
              <span>银联支付</span>
            </Radio>
          </RadioGroup>
        </FormItem>
      </Form>
    </Modal>
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
      deliveryFee: 0,
      modal: false,
      payMethod: ''
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
  },
  methods: {
    handleEdit: function (cartItem) {
      for (let c in this.cartItems) {
        if (this.cartItems[c].id == cartItem.id) {
          this.cartItems[c].typeArgs = cartItem.typeArgs
          break
        }
      }
      axios.post('/api/cart', {contents: this.cartItems})
    },
    handleSubmit: function () {
      this.modal = true
    },
    handleOk: function () {
      let goodIds = this.cartItems.map((current) => {
        return current.id
      })
      axios.post('/api/order', {goodids: goodIds})
      this.$Message.success(this.payMethod + '支付成功！')
      for (let c of this.cartItems) {
        axios.delete('/api/cart?id=' + c.id)
      }
      this.modal = false
      this.cartItems = []
    },
    handleCancel: function () {
      this.modal = false
    }
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
