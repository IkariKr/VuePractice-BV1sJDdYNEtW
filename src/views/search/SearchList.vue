<script setup>
import Header from '@/components/search/Header.vue'
import http from '../../components/common/api/request.js'

import {useRouter} from "vue-router";
import {onMounted} from "vue";

let route =useRouter()


onMounted(()=>{
  getData()
})

const getData = () =>{
  http.$axios({
    url:'/api/goods/shopList',
    params:{
      searchName:route.query.key
    }
  }).then(res=>{
    console.log('查询的数据',res)
  })
}

</script>

<template>
  <div class="search-list">
    <div class="headers">
      <Header></Header>
      <ul>
        <li>
          <div>综合</div>
        </li>
        <li>
          <div>销量</div>
        </li>
        <li>
          <div>新品</div>
        </li>
        <li>
          <div>价格</div>
        </li>
      </ul>
    </div>
    <section>
      <ul>
        <li>
          <img src="/images/list-1.webp" alt="" />
          <h3>拉链连帽衫燕尾大码女夏季遮肚子显瘦短袖t恤胖mm小众正肩上衣</h3>
          <div class="price">
            <div>
              <span>￥</span>
              <b>199</b>
            </div>
            <div>666☆</div>
          </div>
        </li>
        <li>
          <img src="/images/list-2.webp" alt="" />
          <h3>拉链连帽衫燕尾大码女夏季遮肚子显瘦短袖t恤胖mm小众正肩上衣</h3>
          <div class="price">
            <div>
              <span>￥</span>
              <b>199</b>
            </div>
            <div>666☆</div>
          </div>
        </li>
        <li>
          <img src="/images/list-3.webp" alt="" />
          <h3>拉链连帽衫燕尾大码女夏季遮肚子显瘦短袖t恤胖mm小众正肩上衣</h3>
          <div class="price">
            <div>
              <span>￥</span>
              <b>199</b>
            </div>
            <div>666☆</div>
          </div>
        </li>
        <li>
          <img src="/images/list-4.webp" alt="" />
          <h3>拉链连帽衫燕尾大码女夏季遮肚子显瘦短袖t恤胖mm小众正肩上衣</h3>
          <div class="price">
            <div>
              <span>￥</span>
              <b>199</b>
            </div>
            <div>666☆</div>
          </div>
        </li>
      </ul>
    </section>
  </div>

</template>

<style scoped>
  .search-list {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 150vh;
    overflow: hidden;
  }

  .headers ul {
    display: flex;
    justify-content: space-around;
    padding: 0.2rem 0;
    font-size: 0.426666rem;
    background-color: #fff;
  }

  .headers ul li {
    display: flex;
    align-items: center;
  }

  .headers ul li>div {
    padding: 0 0.08rem;
  }

  section {
    flex: 1;
    overflow: hidden;
  }

  section ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  section ul li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 50%;
    padding: 0.266666rem;
  }

  section ul li img {
    width: 4.533333rem;
    height: 6.533333rem;
  }

  section ul li h3 {
    width: 100%;
    font-size: 0.373333rem;
    color: #222;
    font-weight: 400;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /* 限制在一个块元素显示的文本的行数 */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: #fff;
  }

  section ul li .price {
    display: flex;
    justify-content: space-between;
    padding: 0.166666rem 0.16666rem;
    width: 100%;
    font-size: 14px;
    background-color: #fff;
  }

  section ul li .price div:first-child span {
    font-size: 0.32rem;
    color: black;
  }
</style>