<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from '../components/City/Header'
import CitySearch from '../components/City/Search'
import CityList from '../components/City/List'
import CityAlphabet from '../components/City/Alphabet'
import axios from 'axios'
let cityData = require('../../public/mock/city.json')
export default {
  name: 'City',
  components:{
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities:{},
      hotCities:[],
      letter:''
    }
  },
  methods: {
    getCityInfoSucc (res) {
      res=cityData
      if(res.ret && res.data) {
        const data =res.data
        this.cities=data.cities
        this.hotCities=data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter=letter
    }
  }, 
  mounted () {
    this.getCityInfoSucc ()
  }

}
</script>
