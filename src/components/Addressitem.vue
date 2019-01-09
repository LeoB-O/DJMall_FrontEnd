<template>
  <div class="addressbox">
    <h3>通讯地址</h3>
    <div class="address">
      <div class="left">
        <span>{{addressdetail}}</span>
        <br>
        <span>{{Administrativeaddress}}</span>
        <br>
        <span>{{phonenumber}}</span>
      </div>
      <div class="right">
        <Button type="primary" @click="edit = true">修改</Button>
      </div>
    </div>
    <Modal v-model="edit" title="Edit Address" @on-ok="Editad">
      <div>
        <Select v-model="province">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Select v-model="city">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Select v-model="region">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Input v-model="address" placeholder="detail address"></Input>
      </div>
    </Modal>
  </div>
</template>

<script>
import axios from '@/axios'
export default {
  name: "Addressitem",
  props: {
    phonenumber: String,
    Administrativeaddress: String,
    addressdetail: String
  },
  data() {
    return {
      edit: false,
      province:'',
      city:'',
      region:'',
      address:'',
      cityList: [
        {
          value: "New York",
          label: "New York"
        },
        {
          value: "London",
          label: "London"
        },
        {
          value: "Sydney",
          label: "Sydney"
        },
        {
          value: "Ottawa",
          label: "Ottawa"
        },
        {
          value: "Paris",
          label: "Paris"
        },
        {
          value: "Canberra",
          label: "Canberra"
        }
      ]
    };
  },
  methods:{
    Editad:function(){
      axios.post('/editaddress',{
        province:this.province,
        city:this.city,
        region:this.region,
        address:this.address
      }).then((response)=>{
        console.log(response)
      })
    }
  }
};
</script>

<style scoped>
.left {
  float: left;
}
.right {
  float: right;
}
.address {
  width: 300px;
  margin: 0 auto;
}
.addressbox {
  width: 400px;
  height: 80px;
  background: rgb(230, 220, 220);
  margin: 0 auto;
  border:3px black;
}
</style>

