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
      password: "",
      address:[],
      addressinfo:[]
    };
  },
  created() {
    axios
      .get("/api/personalinfo")
      .then(response => {
        this.username = response.data.username;
        this.email = response.data.email;
        this.password = response.data.password;
      }),
      axios
        .get("/api/getaddress")
        .then(response => {
          this.address=response.data.address
          this.GetAbbr
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
          console.log(response);
        });
    },
    Remove:function(data){
      axios.post("/api/deletead",{
        id:data,
        username:this.username
      })
      .then(reponse=>{
        if(reponse.body.ok)
        {
          console.log('ok')
        }
        else
        {
          console.log('error')
        }
      })
    }
  },
  computed:{
    GetAbbr:function(){
      for(let ad in this.address)
      {
        this.addressinfo.push({
          id:this.address[ad]._id,
          addetail:this.address[ad].detail,
          subad:this.address[ad].province+' '+this.address[ad].city+' '+this.address[ad].district,
          phonenumber:this.address[ad].phone
        })
      }
    },
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
