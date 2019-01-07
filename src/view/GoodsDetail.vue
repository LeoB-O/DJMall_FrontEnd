<template>
<div>
  <GoodsOption class="good-option" name="size" :values="[37,38,39,40,41,42,43,44,45,46,47,48,49]"></GoodsOption>
</div>
</template>

<script>
import GoodsOption from '@/components/GoodsOption'

export default {
  name: 'GoodsDetail',
  components: {
    GoodsOption
  }
}
</script>

<style scoped>
.good-option {
  width: 50%;
  height: 20%;
}
</style>
