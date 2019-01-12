<template>
<div class="goods-option">
  <div class="attr-name">{{name}}:</div>
  <div class="attr-values">
    <div :class="{active: option.selected}" class="attr-value" v-for="option in options" :key="option.index" @click="handleClick(option.index)">
      <div>{{option.value}}</div>
    </div>
  </div>
</div>
</template>

<script>
// name string
// values array
export default {
  name: 'GoodsOption',
  props: {
    name: String,
    values: Array
  },
  data () {
    return {
      options: []
    }
  },
  created () {
    this.options = this.values.map((current, index) => { return {value: current, index: index, selected: false} })
  },
  methods: {
    handleClick: function (index) {
      this.options = this.options.map((current) => { return {value: current.value, index: current.index, selected: false} })
      this.options[index].selected = true
      console.log('wtfff???')
    }
  }
}
</script>

<style scoped>
* {
  display: flex;
  flex-wrap: wrap;
}

.goods-option {
  margin: 10px 0px;
  flex-direction: column;
}

.attr-name {
  margin: 0px 10px;
  font-weight: bold;
  font-size: 24px;
}

.attr-values {
  flex-direction: row;
  flex-wrap: wrap;
}

.attr-value {
  margin: 10px 10px;
  font-size: 18px;
  padding: 5px 20px;
  border: lightgrey solid 1px;
  border-radius: 5px;
}

.active {
  background: orange;
  color: #fff;
}
</style>
