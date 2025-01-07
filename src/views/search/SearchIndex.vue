<script setup>
import Header from '@/components/Search/Header.vue'
</script>

<template>
  <div class="search">
    <Header></Header>
    <section>
      <div class="search-history">
        <h2>
          <i class="iconfont icon-fangdajing"></i>
          <span>历史搜索</span>
          <span>清空</span>
        </h2>
        <ul class="history-list">
          <li>茶叶</li>
          <li>茶叶</li>
          <li>茶叶</li>
        </ul>

      </div>
    </section>

    <div class="hotSearch">
      <div>
      </div>
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  </div>


</template>

<style scoped>
.search {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #fff;
}

section {
  flex: 1;
  background-color: #fff;
  overflow: hidden;
}

.search-history h2 {
  position: relative;
  padding: 0.533333rem;
  font-weight: 400;
  font-size: 0.48rem;
}

.search-history h2 i {
  padding-right: 0.08rem;
  color: #999;
  font-size: 0.48rem;
}

.search-history h2 span:last-child {
  position: absolute;
  right: 0.533333rem;

}

.search-history ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0 0.266666rem;
}

.search-history ul li {
  margin: 0.266666rem;
  padding: 0.08rem 0.16rem;
  font-size: 0.373333rem;
  border: 1px solid #ccc;
}
</style>