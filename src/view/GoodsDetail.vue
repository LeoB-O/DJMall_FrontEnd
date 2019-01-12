<template>
  <div class="good">
    <div class="good-top">
      <div class="good-img">
        <Carousel autoplay v-model="value1" loop>
          <CarouselItem v-for="imgUrl in imgUrls" :key="imgUrl">
            <img :src="imgUrl"/>
          </CarouselItem>
        </Carousel>
      </div>
      <div class="good-info">
        <div class="good-name">{{name}}</div>
        <div style="padding-left: 10%; color: darkorange;">${{price}}</div>
        <GoodsOption v-for="option in options" class="good-option" :name="option.name" :values="option.values"
                     :key="option.name" @selectChange="handleChange"></GoodsOption>
        <Button type="warning" class="good-submit" @click="handleClick">加入购物车</Button>
        <Button type="info" class="good-submit" @click="handleChat">与商家聊天</Button>
      </div>
    </div>
    <div class="good-bottom">
      <div class="good-descr"><div v-html="description"></div></div>
    </div>
  </div>
</template>

<script>
import GoodsOption from '@/components/GoodsOption'
import axios from '@/axios'

export default {
  name: 'GoodsDetail',
  components: {
    GoodsOption
  },
  data () {
    return {
      name: '',
      imgUrls: [],
      price: 0,
      value1: 0,
      description: '',
      options: [],
      select: {}
    }
  },
  created () {
    axios.get('/good?id=' + this.$route.params.goodid).then((response)=>{
      this.name = response.data.name
      this.imgUrls = response.data.imgUrls
      this.description = response.data.description
      this.options = response.data.options
      this.price = response.data.price
    })
  },
  methods: {
    handleChange: function (s) {
      this.select[s.name] = s.value
      console.log(this.select)
    },
    handleClick: function () {
      let selects = []
      Object.keys(this.select).forEach((key) => {
        console.log(key)
        console.log(this.select[key])
        selects.push({attrName: key, attrValue: this.select[key]})
        console.log(selects)
      })
      let payload = {
        id: this.$route.params.goodid,
        options: selects,
        amount: 1
      }
      axios.put('/api/cart', payload)
    },
    handleChat: function () {
      console.log('chat');
    }
  }
}
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
  }

  .good-top {
    flex-direction: row;
    height: auto;
    min-height: 70%;
    flex-wrap: nowrap;
  }

  .good-img {
    width: 50%;
  }

  .good-name {
    font-size: 24px;
  }

  .good-info {
    width: 40%;
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
</style>
