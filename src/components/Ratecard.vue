<template>
  <div class="box">
    <div class="head">
      <div class="img">Image</div>
      <div class="content">
        <span>商品名:{{good.name}}</span>
        <span>价格:{{good.price}}</span>
        <span>商品描述:{{good.description}}</span>
      </div>
    </div>
    <div class="foot">
      <div class="commitarea">
        <Rate v-model="rate">
          <span>{{rate}}</span>
        </Rate>
        <Button type="primary" @click="commitRate" class="right" :disabled="dable">提交评价</Button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";
export default {
  name: "Ratecard",
  props: {
    good: Object
  },
  data() {
    return {
      rate: 0,
      dable:false
    };
  },
  methods: {
    commitRate: function() {
        this.dable=true
        console.log(this.dable)
      axios
        .post("/commitrate", {
          rate: this.rate,
          id: this.good.id
        })
        .then(response => {});
    }
  }
};
</script>

<style scoped>
.box {
  width: 400px;
  height: 150px;
  background:lightgray;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
}

.img {
  margin: 5px 5px;
  width: 20%;
  height: 80px;
  background:whitesmoke;
  border-radius: 10px;
}

.content {
  margin: 5px 5px;
  width: 80%;
  background:paleturquoise;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
}

.foot {
  height: 50px;
}
.head {
  display: flex;
  flex-direction: row;
}

.commitarea{
    margin: 10px 5px;
    background:white;
    border-radius: 10px;
}
.right{
    float: right;
}
span{
    margin: 2px 2px;
    font-size: 15px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
</style>


