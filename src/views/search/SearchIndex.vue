<script setup>
import Header from '@/components/Search/Header.vue'
import {onMounted, ref} from 'vue'
import {showConfirmDialog} from 'vant'

let searchArr = ref([])
onMounted(()=>{
  searchArr.value = JSON.parse(localStorage.getItem('searchList')) || []
})
const clearSearchHistory = () =>{
  showConfirmDialog({
    title: '提示',
    message: '确定清空搜索记录吗？',
    onConfirm: () => {
      localStorage.removeItem('searchList')
      searchArr.value = []
    }
  }).catch(()=>{
    console.log('取消清空')
  })
}

</script>

<template>
  <div class="search">
    <Header></Header>
    <section>
      <div class="search-history">
        <h2>
          <i class="iconfont icon-fangdajing"></i>
          <span>历史搜索</span>
          <span @click="clearSearchHistory">清空</span>
        </h2>
        <ul v-if="searchArr.length" class="history-list">
          <li v-for="(item,index) in searchArr" :key="index">{{item}}</li>
        </ul>
        <div v-else>暂无搜索记录</div>
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