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
            <Input v-model="date" type="date" style="margin:5px;">
              <span slot="prepend">birthday</span>
            </Input>
            <Input v-model="password" type="password" style="margin:5px;">
              <span slot="prepend">Password</span>
            </Input>
            <Button type="primary" size="large" style="float:left" @click="Commit">Commit</Button>
          </div>
        </TabPane>
        <TabPane label="Address" name="address">
          <Addressitem :addressdetail=addetail :Administrativeaddress=adad :phonenumber=pn></Addressitem>
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
      select: "",
      username: "",
      email: "",
      date: "",
      password: "",
      addetail: "",
      adad: "",
      pn: ""
    };
  },
  created() {
    axios
      .get("/personalinfo", {
        params: {
          ID: this.$route.params.id
        }
      })
      .then(response => {
        this.username = response.data.username;
        this.email = response.data.email;
        this.date = response.data.date;
        this.password = response.data.password;
      }),
      axios
        .get("/getaddress", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(response => {
          this.addetail = response.data.addetail;
          this.adad = response.data.adad;
          this.pn = response.data.pn;
        });
  },
  methods: {
    Commit: function() {
      axios
        .post("/editinfo", {
          id: this.$route.params.id,
          username: this.username,
          email: this.email,
          date: this.date,
          password: this.password
        })
        .then(response => {
          console.log(response);
        });
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
