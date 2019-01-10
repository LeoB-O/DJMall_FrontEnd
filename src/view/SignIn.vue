<template>
  <div>
    <div class="Signin">
      <div class="Name">
        <Input v-model="username">
          <span slot="prepend">UserName</span>
        </Input>
      </div>

      <div class="Password">
        <Input v-model="password" type="password">
          <span slot="prepend">Password</span>
        </Input>
      </div>

      <div class="Button">
        <Button type="primary" @click="checkPassword">SignIn</Button>
        <Button type="info" style="margin-left:40px">SignUp</Button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";

export default {
  name: "SignIn",
  data() {
    return {
      username: "",
      password: "",
      right: false
    };
  },
  computed: {},
  methods: {
    checkPassword: function() {
      axios
        .get("/signin", {
          params: {
            UserName: this.username
          }
        })
        .then(response => {
          this.right = response.data.right;
          if (this.right) {
            console.log("ok");
          } else {
            console.log("error");
          }
        });
    }
  }
};
</script>

<style scoped>
.Signin {
  width: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.Name {
  padding: 5px 5px;
}
.Password {
  padding: 5px 5px;
}

.Button {
  float: left;
  margin-left: 5px;
}
</style>
