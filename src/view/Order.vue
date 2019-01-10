<template>
  <div>
    <div class="box">
      <Table :columns="columns1" :data="content" highlight-row></Table>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";
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
      content: []
    };
  },
  created() {
    axios
      .get("/order", {
        params: {
          ID: this.$route.params.id
        }
      })
      .then(response => {
        this.content = response.data.content;
      });
  }
};
</script>

<style scoped>
.box {
  margin-top: 50px;
}
</style>


