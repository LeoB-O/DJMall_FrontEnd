<template>
  <div class="addressbox">
    <h3>通讯地址</h3>
    <div class="address">
      <div class="left">
        <span>详细地址:{{addressdetail}}</span>
        <br>
        <span>行政区域:{{Administrativeaddress}}</span>
        <br>
        <span>电话号码:{{phonenumber}}</span>
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
        <Input v-model="district" placeholder="district"></Input>
        <Input v-model="address" placeholder="detail address"></Input>
        <Input v-model="phone" placeholder="phonenumber"></Input>
        <Button type="primary" @click="Editad">Commit</Button>
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
      province: '',
      city: '',
      district: '',
      address: '',
      name:'',
      phone:''
    };
  },
  methods: {
    Editad: function() {
      axios
        .post("/api/editaddress", {
          AddressID:this.sid,
          province: this.province,
          city: this.city,
          district: this.district,
          detail: this.address,
          name:this.name,
          phonenumber:this.phone
        })
        .then(response => {
         if (response.data.ok) {
            this.$Notice.open({
              title: "Notification ",
              desc: "success"
            });
            this.$router.go(0)
          } else {
            this.$Notice.open({
              title: "Notification ",
              desc: "false"
            });
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
  display: flex;
}
.address {
  width: auto;
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

.ivu-modal-body {
  height: 400px;
  overflow: scroll;
}
</style>

