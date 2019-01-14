<template>
  <Menu class="header-menu" mode="horizontal" theme="light" active-name="1">
    <Icon size="30" class="header-icon" type="logo-bitcoin"/>
    <router-link to="/" class="header-title">DJ MALL</router-link>
    <AutoComplete
      class="header-search"
      icon="ios-search"
      placeholder="Search"
      :data="result"
      v-model="value"
      @on-search="handleSearch"
      @on-focus="Removedata"
      @on-blur="Removedata"
      @on-change="IsNull"
      @keyup.native.enter="handleSubmit"
    ></AutoComplete>
    <MenuItem v-if="isLogin" name="1" :to="'/personalInfo/'+userID">
      <Icon type="ios-paper"/>
      个人中心
    </MenuItem>
    <MenuItem v-if="!isLogin" name="2" to="/signin">
      <Icon type="ios-paper"/>
      登录
    </MenuItem>
    <MenuItem v-if="!isLogin" name="3" to="/signup">
      <Icon type="ios-people"/>
      注册
    </MenuItem>
    <MenuItem name="4" to="/cart">
      <Icon type="ios-construct"/>
      购物车
    </MenuItem>
  </Menu>
</template>

<script>
import Search from '@/components/Search'
import axios from '@/axios'
export default {
  name: 'Header',
  props: {
    isLogin: Boolean,
    userID: String
  },
  components: {
    Search
  },
  data () {
    return {
      value: '',
      result: [],
      data:[],
    }
  },
  methods: {
    handleSearch: function (value) {
      axios.get('/search',{
       params:{
         search:this.value
       }
      }).then((response)=>{
        let data=response.data.goods
        console.log(this.value)
        this.result=[]
        for(let g of data)
        {
          this.result.push(g.name)
        }
        // this.data=data
      })
    },
    handleSubmit: function () {
      console.log('SUBMIT!')
      this.$router.push('/catagory/search?search=' + this.value)
    },
    Removedata:function(){
      this.result=[]
    },
    IsNull:function(){
      if(this.value=='')
      {
        this.result=[]
      }
    }
  }
}
</script>

<style scoped>
  .header-icon {
    padding: 15px 5px;
    position: absolute;
    left: 0px;
  }

  .header-search {
    padding: 15px 5px;
    width: 200px;
  }

  .header-title {
    position: absolute;
    left: 40px;
    font-size: 36px;
    color: #000;
  }

  .header-menu {
    display: flex;
    justify-content: flex-end;
  }
</style>
