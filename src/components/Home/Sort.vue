<script setup>
  // let sortList2=[
  //     {
  //       id:1,
  //       title:'女装',
  //       imgUrl:'../../../public/images/1.webp',
  //     },
  //     {
  //       id:2,
  //       title:'男装',
  //       imgUrl:'../../../public/images/2.webp',
  //     },
  //     {
  //       id:3,
  //       title:'女鞋',
  //       imgUrl:'../../../public/images/3.webp',
  //     },
  //     {
  //       id:4,
  //       title:'男鞋',
  //       imgUrl:'../../../public/images/4.webp',
  //     },
  //     {
  //       id:5,
  //       title:'内衣',
  //       imgUrl:'../../../public/images/5.webp',
  //     },
  //     {
  //       id:6,
  //       title:'配饰',
  //       imgUrl:'../../../public/images/6.webp',
  //     },
  //     {
  //       id:7,
  //       title:'箱包',
  //       imgUrl:'../../../public/images/7.webp',
  //     },
  //     {
  //       id:8,
  //       title:'运动',
  //       imgUrl:'../../../public/images/8.webp',
  //     },
  //     {
  //       id:9,
  //       title:'美妆',
  //       imgUrl:'../../../public/images/9.webp',
  //     },
  //     {
  //       id:10,
  //       title:'母婴',
  //       imgUrl:'../../../public/images/10.webp',
  //     },
  // ]

  import axios from 'axios'
  import {ref, onMounted} from 'vue'

  const sortList = ref([])
  onMounted(() => {
    fetchData()
  })
  const fetchData = async() =>{
    const res = await axios.get('/api/index')
    console.log(res)
    sortList.value = res.data.data.sortList
  }

</script>

<template>
  <ul class="sorts">
    <li v-for="(item,index) in sortList" :key="item.id">
      <img :src="item.imgUrl" alt=""/>
      <span>{{item.title}}</span>
    </li>
  </ul>
</template>

<style scoped>
  .sorts {
    width: 100%;
    background-color: white;
    font-size: 0.35rem;
    box-sizing: border-box;
    display: flex;
    flex-flow: row wrap;
  }

  .sorts li {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    flex: 0 0 20%;
    margin: 0.3rem 0;
  }

  .sorts li img {
    width: 1.5rem;
    height: 1.5rem;
  }

  .sorts li span {
    margin-top: 0.1875rem;
    color: rgb(102, 102, 102);
  }
</style>