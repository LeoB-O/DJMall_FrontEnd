<template>
<div class="cart-item">
  <div :style="'background-image: url('+imgUrl+');background-size:contain;background-repeat:no-repeat;background-position:50% 50%;'" class="cart-item-img">
    <!--<img style="max-width: 100%; height: auto;" :src="imgUrl" />-->
  </div>
  <div class="cart-item-info">
    <div class="cart-item-name">{{name}}</div>
    <div class="cart-item-detail">
      <div v-if="!edit" v-for="typeArg in typeArgs" :key="typeArg">
        {{typeArg.attrName}}:{{typeArg.attrValue}}
      </div>
      <Form v-if="edit" :label-width="20">
        <FormItem v-for="option in options" :key="option.name" :label="option.name">
          <Select v-model="option.selected">
            <Option v-for="value in option.values" :value="value" :key="value">{{value}}</Option>
          </Select>
        </FormItem>
      </Form>
      <div class="cart-item-action">
        <Button v-if="!edit" @click="handleEdit" class="cart-item-action" type="warning">修改</Button>
        <Button v-if="edit" @click="handleSave" class="cart-item-action" type="info">保存</Button>
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
  data () {
    return {
      options: [],
      edit: false
    }
  },
  methods: {
    handleEdit: function () {
      this.edit = true
      axios.get('/good?id=' + this.id).then((response) => {
        this.options = response.data.options.map((current) => {
          return {
            name: current.name,
            values: current.values,
            selected: ''
          }
        })
      })
    },
    handleDelete: function () {
      axios.delete('/api/cart?id=' + this.id)
      this.$router.go(0)
    },
    handleSave: function () {
      this.$emit('edit', {id: this.id,
        typeArgs: this.options.map((current) => {
          return {
            attrName: current.name,
            attrValue: current.selected
          }
        })})
      this.edit = false
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
  width: 100%;
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
