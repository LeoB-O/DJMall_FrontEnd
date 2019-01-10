<template>
  <div class="layout">
    <Layout>
      <div class="head">
        <div id="avatar" class="avatar">Avadar</div>
        <div class="UserName">
          <span class="Name">{{username}}</span>
        </div>
        <div class="link">
          <Button type="text" size="large" @click="link2order">Order</Button>
          <Button type="text" size="large" @click="link2pinfo">EditInfo</Button>
        </div>
      </div>
      <Content class="content">
        <router-view></router-view>
      </Content>
    </Layout>
  </div>
</template>

<script>
import axios from "@/axios";
export default {
  name: "PersonalInfo",
  data() {
    return {
      tabs: "",
      username: "",
      avdarurl: ""
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
        this.avdarurl = response.data.avdarurl;
        console.log(this.username);
      });
  },
  methods: {
    link2order: function() {
      this.$router.push("/personalinfo/" + this.$route.params.id + "/order");
    },
    link2pinfo: function() {
      this.$router.push(
        "/personalinfo/" + this.$route.params.id + "/editpinfo"
      );
    }
  }
};
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #ffffff;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.head {
  height: 200px;
}

.avatar {
  margin: 20px auto;
  width: 100px;
  height: 100px;
  background: #d7dde4;
}
.link {
  margin-top: 20px;
}
.Name {
  font-size: 20px;
}
</style>
