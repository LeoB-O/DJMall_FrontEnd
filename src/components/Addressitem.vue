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
        <Button type="error" @click="Remove">删除</Button>
      </div>
    </div>
    <Modal v-model="edit" title="Edit Address" @on-ok="Editad">
      <div>
        <Input v-model="name" placeholder="Name"></Input>
        <Input v-model="province" placeholder="Province"></Input>
        <Input v-model="city" placeholder="City"></Input>
        <Input v-model="district">District</Input>
        <Input v-model="address" placeholder="detail address"></Input>
        <Button type="primary" @click="Editad"></Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import axios from "@/axios";
export default {
  name: "Addressitem",
  props: {
    id:String,
    phonenumber: String,
    Administrativeaddress: String,
    addressdetail: String
  },
  data() {
    return {
      sid:this.id,
      edit: false,
      province: "",
      city: "",
      district: "",
      address: "",
      name:""
    };
  },
  methods: {
    Editad: function() {
      axios
        .post("/api/editaddress", {
          AddressID:this.sid,
          province: this.province,
          city: this.city,
          district: this.region,
          detail: this.address,
          name:this.name
        })
        .then(response => {
          if(response.data.ok)
          {
            alert('修改成功')
          }
          else
          {
            alert('修改失败')
          }
        });
    },
    Remove: function() {
      this.$emit("removeaddress", this.sid);
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
  margin: 10px 60px;
  border: 3px black;
  float: left;
  border-radius: 10px;
}
</style>

