<template>
    <div>
        <detail-banner
          :sightName="sightName"
          :bannerImg="bannerImg"
          :bannerImgs="gallaryImgs"
        ></detail-banner>
        <detail-header></detail-header>
        <div class="content">
          <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from '../components/Detail/Banner'
import DetailHeader from '../components/Detail/Header'
import DetailList from '../components/Detail/List'
import axios from 'axios'
let detailData = require('../../public/mock/detail.json')
  export default {
    name: 'Detail',
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data () {
      return {
        sightName: '',
        bannerImg: '',
        gallaryImgs: [],
        list:[]
      }
    },
    methods: {
      getDetailInfoSucc (res) {
        res=detailData
        if(res.ret && res.data) {
          const data =res.data
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.gallaryImgs = data.gallaryImgs
          console.log(this.list)
          this.list=data.categoryList        
        }
      }
    },
    mounted () {
      this.getDetailInfoSucc()
    }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 100vh
</style>