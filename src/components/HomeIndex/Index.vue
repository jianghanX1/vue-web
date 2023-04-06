<template>
  <div class="big">
    <div>
      <Content></Content>
      <Bottom
        titleType="1"
      />
    </div>
    <div class="recent-game">
      <div class="title">Recent game</div>
      <div class="content">
        <div class="item"><img :src="img7" alt=""></div>
        <div class="item"><img :src="img8" alt=""></div>
        <div class="item"><img :src="img9" alt=""></div>
        <div class="item"><img :src="img99" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
import Content from '@/components/HomeIndex/Content';
import Bottom from '@/components/HomeIndex/Bottom';
import img7 from '@/assets/07.webp';
import img8 from '@/assets/08.webp';
import img9 from '@/assets/09.webp';
import img99 from '@/assets/10.webp';
export default {
  name: "HomeIndex",
  components: {
    Content,
    Bottom
  },
  data() {
    return {
      img7,
      img8,
      img9,
      img99,
    }
  }
}
</script>

<style lang="less" scoped>
.big{
  display: flex;
  min-width: 730px;
}
@media screen and (max-width: 840px){
  .recent-game {
    display: none;
  }
}
.recent-game{
  width: 200px;
  margin-top: 20px;
  margin-right: 10px;
  .title{
    line-height: 40px;
    font-size: 20px;
    color: #fff;
    text-align: center;
    background: #F83123;
  }
  .content{
    width: 200px;
    .item{
      cursor: pointer;
      width: 92px;
      height: 92px;
      display: block;
      float: left;
      border-radius: 6px;
      overflow: hidden;
      border: 2px solid #fff;
      box-shadow: 0 4px 8px rgba(34, 62, 89, .5);
      margin: 3px 0 0 3px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
