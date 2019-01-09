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
        <Button type="primary">SignIn</Button>
        <Button type="info" style="margin-left:40px">SignUp</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      username: '',
      password: ''
    };
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
  margin-left: 5px
}
</style>
