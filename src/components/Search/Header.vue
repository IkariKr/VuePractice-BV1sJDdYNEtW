<script setup>
import {useRouter} from 'vue-router'
import {ref} from 'vue'
let router = useRouter()
const goBack = ()=> {
  router.back()
}

let searchValue = ref('')

let goSearchList = () =>{
  console.log(searchValue.value)
  if(!searchValue.value)
    return
  //保存到本地存储
  let searchList = localStorage.getItem('searchList') || '[]'
  let searchArr= JSON.parse(searchList)
  searchArr.unshift(searchValue.value)
  localStorage.setItem('searchValue',searchValue.value)
  const uniqueSet = new Set(searchArr) // ES6 Set 去重
  const newArray = Array.from(uniqueSet)
  localStorage.setItem('searchList',JSON.stringify(newArray))
  router.push({name:'list'})

  // let searchList2 = localStorage.getItem('searchList')
  // console.log(searchList2)
}
</script>

<template>
  <header>
    <div class="search-return" @click="goBack">
      <
    </div>
    <div class="search-main">
      <form action="" onsubmit='return false' @keyup.enter="goSearchList">
        <input type="search" placeholder="学院风" v-model="searchValue"/>
      </form>
    </div>
    <div class="search-btn" @click="goSearchList">搜索</div>
  </header>
</template>

<style scoped>

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 1.173333rem;
  /* background-color:#f5f5f5; */
  border-bottom: 1px solid #ccc;
}

.search-return,
.serach-btn {
  padding: 0 0.266666rem;
  color: #666;
}

.search-main {
  display: flex;
  align-items: center;
  width: 6.933333rem;
  height: 0.7rem;
}

.search-main form {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.search-main form input {
  width: 100%;
  height: 100%;
  padding: 0 0 0 0.25rem;
  border: 1px solid #ccc;
  /* 设置默认边框颜色 */
  transition: border-color 0.3s ease;
  /* 平滑过渡效果 */
  border-radius: 0.1875rem;
}

.search-main form input:focus {
  outline: none;
  /* 去掉默认的轮廓线 */
  border-color: #ff4466;
  /* 改变边框颜色 */
}

.search-btn {
  font-size: 0.46666rem;
}

</style>