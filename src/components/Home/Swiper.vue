<template>
    <div class="swiper-container">
    <swiper :options="swiperOptions" v-if="showSwiper">
        <!-- slides -->
        <swiper-slide v-for="item of list " :key="item.id">
            <img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </template>
  
<script>
  export default {
    name: 'HomeSwiper',
    props:{
      list:Array
    }, 
    data() {
        return {
            swiperOptions:{
                pagination: {
                    el: '.swiper-pagination',
                },
                loop: true
            }
        }
    },
    computed:{
       showSwiper () {
         return this.list.length
       }
    }
  }
</script>

<style lang="stylus" scoped>
.swiper-img
  width:100%
.swiper-container
  --swiper-theme-color: #fff
  
</style>