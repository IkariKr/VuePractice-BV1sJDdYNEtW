<script setup>
import Sort from './Sort.vue'
import {useRouter, useRoute} from "vue-router";

const router = useRouter()

const goToSearch = ()=>{
  router.replace('/Search/')
}

</script>

<template>
  <header>
    <div class="fenlei">
      <img src="../../assets/images/fenlei.png" alt="" />
    </div>
    <div class="search" @click="goToSearch">
      <i class="iconfont icon-fangdajing"></i>
      <span>wartermark</span>
    </div>
    <div class="liaotian">
      <i class="iconfont icon-liaotian"></i>
    </div>
  </header>

</template>

<style scoped>
header {
  display: flex; /* 设置头部为弹性盒子布局 */
  justify-content: space-around; /* 子元素在主轴上均匀分布 */
  align-items: center; /* 子元素在交叉轴上居中对齐 */
  width: 100%; /* 设置头部宽度为100% */
  height: 1.235rem; /* 设置头部高度 */
  padding: 0.2rem 0.15rem; /* 设置头部内边距 */
  background-color: #fff; /* 设置头部背景颜色 */
  border-bottom: 1px solid #e5e5e5; /* 设置头部底部边框 */
  box-sizing: border-box; /* 设置盒模型为包含内边距和边框 */
}

header .fenlei img {
  width: 0.6rem; /* 设置图片宽度 */
  height: 0.6rem; /* 设置图片高度 */
  line-height: 0.8rem; /* 设置图片行高 */
  margin-top: 0.188rem; /* 设置图片上外边距 */
}

header .search {
  width: 7rem; /* 设置搜索框宽度 */
  height: 0.835rem; /* 设置搜索框高度 */
  font-size: 0.4rem; /* 设置搜索框字体大小 */
  color: #999; /* 设置搜索框文字颜色 */
  background-color: #eee; /* 设置搜索框背景颜色 */
  border-radius: 0.125rem; /* 设置搜索框圆角 */
}

header .search i {
  margin: 0 0.2rem; /* 设置搜索图标左右外边距 */
  width: 0.9375rem; /* 设置搜索图标宽度 */
  height: 0.9375rem; /* 设置搜索图标高度 */
  line-height: 0.9375rem; /* 设置搜索图标行高 */
}

header .liaotian i {
  font-size: 0.7rem; /* 设置聊天图标字体大小 */
  color: #999; /* 设置聊天图标颜色 */
}
</style>