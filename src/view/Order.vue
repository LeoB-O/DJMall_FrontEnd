<template>
  <div>
    <div class="box">
      <Table :columns="columns1" :data="content" :highlight-row="true" @on-row-click="handleClick"></Table>
      <Modal v-model="Rate" title="Rate" >
          <Ratecard v-for="g in goods" :good="g" :key="g.id"></Ratecard>
      </Modal>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";
import Ratecard from '@/components/Ratecard'
export default {
  components:{
    Ratecard
  },
  data() {
    return {
      columns1: [
        {
          title: "OrderID",
          key: "id"
        },
        {
          title: "Time",
          key: "time"
        },
        {
          title: "Price",
          key: "price"
        }
      ],
      content: [],
      goods:[],
      Rate:false,
      ratedata:0
    };
  },
  created() {
    axios
      .get("/api/order")
      .then(response => {
        this.content = response.data.content;
      });
  },
  methods:{
    handleClick:function(data,index){
      this.Rate=true
      axios.get('/orderdetail',{
        params:{
          orderid:data.id
        }
      }).then((response)=>{
        this.goods=response.data.goods
      })
  },
  }
};
</script>

<style >
.box {
  margin-top: 50px;
}
.ivu-modal-body{
  height: 400px;
  overflow:scroll;
}

</style>


