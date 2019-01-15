<template>
  <div>
    <div class="box">
      <Tabs v-model="select">
        <TabPane label="PersonalInfo" name="personalinfo">
          <div class="info">
            <Input v-model="username" style="margin:5px;">
              <span slot="prepend">UserName</span>
            </Input>
            <Input v-model="email" style="margin:5px;">
              <span slot="prepend">Email</span>
            </Input>
            <Input v-model="password" type="password" style="margin:5px;">
              <span slot="prepend">Password</span>
            </Input>
            <Button type="primary" size="large" style="float:left" @click="Commit">Commit</Button>
          </div>
        </TabPane>
        <TabPane label="Address" name="address">
          <Addressitem
            v-for="ad in addressinfo"
            v-on:removeaddress="Remove"
            :key="ad.id"
            :addressdetail="ad.addetail"
            :Administrativeaddress="ad.subad"
            :phonenumber="ad.phonenumber"
            :id="ad.id"
          ></Addressitem>
        </TabPane>
        <TabPane label="Add Address" name="adddaddress">
          <div style="width:1000px;margin:0 auto">
            <Input v-model="name" placeholder="Name"></Input>
            <Input v-model="province" placeholder="Province"></Input>
            <Input v-model="city" placeholder="City"></Input>
            <Input v-model="district" placeholder="district"></Input>
            <Input v-model="detail" placeholder="detail address"></Input>
            <Input v-model="phone" placeholder="phonenumber"></Input>
            <Button type="primary" @click="Add">Commit</Button>
          </div>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
import Addressitem from "@/components/Addressitem";
import axios from "@/axios";
export default {
  components: {
    Addressitem
  },
  data() {
    return {
      select: "address",
      username: "",
      email: "",
      date: "",
      password: "",
      address: [],
      addressinfo: [],
      name:'',
      province:'',
      city:'',
      district:'',
      detail:'',
      phone:''
    };
  },
  created() {
    axios.get("/api/personalinfo").then(response => {
      this.username = response.data.username;
      this.email = response.data.email;
      this.password = response.data.password;
    }),
      axios.get("/api/getaddress").then(response => {
        this.address = response.data.address;
        this.GetAbbr;
      });
  },
  methods: {
    Commit: function() {
      axios
        .post("/api/editinfo", {
          username: this.username,
          email: this.email,
          password: this.password
        })
        .then(response => {
          if (response.data.ok) {
            this.$Notice.open({
              title: "Notification ",
              desc: "success"
            });
            this.logout();
          } else {
            this.$Notice.open({
              title: "Notification ",
              desc: "false"
            });
          }
        });
    },
    logout: function() {
      axios.get("/api/logout").then(response => {
        console.log(response);
      });
      this.$router.go(0);
    },
    Remove: function(data) {
      axios
        .post("/api/deleteaddress", {
          addressid: data
        })
        .then(reponse => {
          if (reponse.data.ok) {
            this.$Notice.open({
              title: "Notification ",
              desc: "success"
            });
            this.$router.go(0)
            this.select='address'
          } else {
            console.log("error");
          }
        });
    },
    Add:function(){
      axios.post('/api/addaddress',{
        name:this.name,
        province:this.province,
        city:this.city,
        district:this.district,
        detail:this.detail,
        phonenumber:this.phone
      }).then(response=>{
        if(response.data.ok)
        {
          this.$Notice.open({
              title: "Notification ",
              desc: "success"
            });
            this.$router.go(0)
        }
        else{
          this.$Notice.open({
              title: "Notification ",
              desc: "failed"
            });
        }
      })
    }
  },
  computed: {
    GetAbbr: function() {
      for (let ad in this.address) {
        this.addressinfo.push({
          id: this.address[ad]._id,
          addetail: this.address[ad].detail,
          subad:
            this.address[ad].province +
            " " +
            this.address[ad].city +
            " " +
            this.address[ad].district,
          phonenumber: this.address[ad].phone
        });
      }
    }
  }
};
</script>

<style scoped>
.box {
  margin-top: 20px;
}
.info {
  width: 200px;
  margin: 0 auto;
}
</style>
