<template>
  <div class="layout">
    <Layout>
      <div class="head">
        <div id="avatar" class="avatar">
          Avadar
        </div>
        <div class="UserName">
          <span class="Name">{{username}}</span>
        </div>
        <div class="link">
            <Button type="text" size="large">Order</Button>
            <Button type="text" size="large">EditInfo</Button>
        </div>
      </div>
      <Content class="content">
        <router-view></router-view>
      </Content>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'PersonalInfo',
  data(){
    return{
      tabs:'',
      username:'Zeo Yang'
    }
  }
}
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #ffffff;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.head{
  height: 200px;
}
.content{
  
}
.avatar{
  margin: 20px auto;
  width: 100px;
  height: 100px;
  background:#d7dde4;
}
.link{
  margin-top: 20px;
}
.Name{
  font-size: 20px;
}
</style>
