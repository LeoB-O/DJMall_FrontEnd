<template>
  <div>
    <div class="SignIn">
      <div class="Input">
        <span>SignIn</span>
      </div>
      <div class="Input">
        <Input v-model="username">
          <span slot="prepend">UserName</span>
        </Input>
      </div>
      <div class="Input">
        <Input v-model="password">
          <span slot="prepend">Password</span>
        </Input>
      </div>
      <div class="Input">
        <Input v-model="email">
          <span slot="prepend">E-mail</span>
        </Input>
      </div>

      <div class="Button">
        <Button type="primary" @click="handleClick">SignUp</Button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/axios'

export default {
  name: 'SignUp',
  data () {
    return {
      username: '',
      password: '',
      email: ''
    }
  },
  methods: {
    handleClick: function () {
      axios.post('/signup', {
        username: this.username,
        password: this.password,
        email: this.email
      }).then((response) => {
        console.log(response)
      })
    }
  }
}
</script>

<style scoped>
  .SignIn {
    width: 350px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .Input {
    padding: 5px 5px;
  }

  .Button {
    margin: 0 auto;
  }
</style>
