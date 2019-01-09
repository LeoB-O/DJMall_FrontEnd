<template>
  <div>
      <div class="box">
           <Table :columns="columns1" :data="data1"></Table>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: "OrderID",
          key: "id"
        },
        {
          title: "Time",
          key: "time"
        },
        {
          title: "Price",
          key: "price"
        },
        {
          title: "Statue",
          key: "status"
        }
      ],
      data1: [
        {
          id: "012398489",
          price: 18,
          status: "Cancel",
          time: "2016-10-03"
        },
        {
          id: "012398489",
          price: 18,
          status: "Cancel",
          time: "2016-10-03"
        },
        {
          id: "012398489",
          price: 18,
          status: "Cancel",
          time: "2016-10-03"
        },
        {
          id: "012398489",
          price: 18,
          status: "Cancel",
          time: "2016-10-03"
        }
      ]
    };
  }
};
</script>

<style scoped>
.box {
  margin-top: 50px;
}
</style>


