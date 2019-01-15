<template>
  <div class="good">
    <div class="good-top">
      <div class="good-img">
        <Carousel autoplay v-model="value1" loop>
          <CarouselItem v-for="imgUrl in imgUrls" :key="imgUrl">
            <img style="width: 100%; max-height: 100%;" :src="imgUrl">
          </CarouselItem>
        </Carousel>
      </div>
      <div class="good-info">
        <div class="good-name">{{name}}</div>
        <div style="font-size: 24px; color: darkorange;">${{price.toFixed(2)}}</div>
        <GoodsOption
          v-for="option in options"
          class="good-option"
          :name="option.name"
          :values="option.values"
          :key="option.name"
          @selectChange="handleChange"
        ></GoodsOption>
        <Button type="warning" class="good-submit" @click="handleClick">加入购物车</Button>
        <Button type="info" class="good-submit" @click="handleClick1">与商家聊天</Button>
      </div>
      <ChatRoom :modal="modal1" :name="shopname" v-on:on-modal-change="ChangeModal"></ChatRoom>
    </div>
    <div class="good-bottom">
      <div class="good-descr">
        <div v-html="description"></div>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsOption from "@/components/GoodsOption";
import axios from "@/axios";
import ChatRoom from "@/components/ChatRoom";

export default {
  name: "GoodsDetail",
  components: {
    GoodsOption,
    ChatRoom
  },
  data() {
    return {
      name: "",
      imgUrls: [],
      price: 0,
      value1: 0,
      description: "",
      options: [],
      select: {},
      modal1: false,
      chatcontent: "",
      merchantId: "",
      shopname: ""
    };
  },
  created() {
    axios.get("/good?id=" + this.$route.params.goodid).then(response => {
      this.name = response.data.name;
      this.imgUrls = response.data.imgUrls;
      this.description = response.data.description;
      this.options = response.data.options;
      this.price = response.data.price;
      this.merchantId = response.data.merchantId;
    });
  },
  methods: {
    handleChange: function(s) {
      this.select[s.name] = s.value;
      console.log(this.select);
    },
    handleClick: async function() {
      let selects = [];
      Object.keys(this.select).forEach(key => {
        console.log(key);
        console.log(this.select[key]);
        selects.push({ attrName: key, attrValue: this.select[key] });
        console.log(selects);
      });
      let payload = {
        id: this.$route.params.goodid,
        options: selects,
        amount: 1
      };
      let result = await axios.put("/api/cart", payload);
      if (result.success) {
        this.$Message.success("添加成功");
      } else {
        this.$Message.error("添加失败");
      }
    },
    handleClick1: function() {
      axios
        .get("/store", {
          params: {
            id: this.merchantId
          }
        })
        .then(response => {
          this.shopname = response.data.name;
        });
      this.modal1 = true;
    },
    handleChat: function() {
      console.log("chat");
    },
    ChangeModal: function(val) {
      this.modal1 = val;
    }
  }
};
</script>

<style scoped>
* {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  text-align: left;
  flex-wrap: nowrap;
}

.good {
  flex-direction: column;
  width: 100%;
}

.good-top {
  flex-direction: row;
  height: auto;
  min-height: 70%;
  width: 100%;
  min-width: 100%;
  flex-wrap: nowrap;
}

.good-img {
  width: 50%;
  height: auto;
  min-width: 50%;
}

.good-name {
  font-size: 36px;
  font-weight: bold;
}

.good-info {
  width: 40%;
  min-width: 40%;
  margin: 5%;
  flex-direction: column;
}

.good-option {
  height: 15%;
  width: 100%;
}

.good-submit {
  width: 30%;
  height: 10%;
  margin: 20px 10px;
}

.good-bottom {
  margin-top: 10%;
  font-size: 24px;
}

.ivu-carousel-track {
  width: 100%;
  height: 100%;
}
</style>
