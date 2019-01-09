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
        <GoodsOption v-for="option in options" class="good-option" :name="option.name" :values="option.values"
                     :key="option.name"></GoodsOption>
        <Button type="warning" class="good-submit">加入购物车</Button>
      </div>
    </div>
    <div class="good-bottom">
      <div class="good-descr"><div v-html="description"></div></div>
    </div>
  </div>
</template>

<script>
import GoodsOption from '@/components/GoodsOption'

export default {
  name: 'GoodsDetail',
  components: {
    GoodsOption
  },
  data () {
    return {
      name: 'Nike Air VaporMax',
      imgUrls: ['/static/logo.png', '/static/logo.png'],
      value1: 0,
      description: 'Nike Air VaporMax 2019 男子运动鞋采用弹性梭织材料，妥善包覆双足，塑就出众结构感和强力支撑的迈步体验。<br />足底搭载 Air Max 缓震配置，轻盈感和柔韧性出众，塑就弹力十足的出众脚感，宛如云端畅跑。',
      options: [{name: 'size', values: [37, 38, 39.40, 41, 42, 43, 44]}, {
        name: 'color',
        values: ['white', 'yellow', 'blue']
      }]
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
