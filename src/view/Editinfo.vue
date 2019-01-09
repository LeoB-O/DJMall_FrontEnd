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
          </div>
        </TabPane>
        <TabPane label="Address" name="address">
          <Addressitem addressdetail="123" Administrativeaddress="31" phonenumber="1234567"></Addressitem>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
import Addressitem from "@/components/Addressitem";
export default {
  components: {
    Addressitem
  },
  data() {
    return {
      select: "",
      username: "",
      email: "",
      data: ""
    };
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
