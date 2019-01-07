<template>
<div class="goods-option">
  <div class="attr-name">{{name}}:</div>
  <div class="attr-values">
    <div class="attr-value" v-for="value in values" :key="value">
      <div>{{value}}</div>
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
}

.attr-name {
  margin: 0px 10px;
  font-weight: bold;
  font-size: 24px;
}

.attr-value {
  margin: 10px 10px;
  font-size: 18px;
  padding: 5px 20px;
  border: lightgrey solid 1px;
  border-radius: 5px;
}
</style>
