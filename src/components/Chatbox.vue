<template>
  <div class="box">
    <div class="head">
      <span>{{Name}}</span>
      <span>{{Time}}</span>
    </div>
    <div class="content">{{Content}}</div>
  </div>
</template>

<script>
export default {
  name: "Chatbox",
  props: {
    Name: String,
    Time: String,
    Content: String
  }
};
</script>

<style scoped>
span {
  font-size: 15px;
  margin: 5px 5px;
}

.content{
    font-size: 24px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 10px;
}
.box {
  border-radius: 10px;
  width: 30%;
  height: auto;
  min-height: 100px;
  margin: 5px 1px;
}
</style>
