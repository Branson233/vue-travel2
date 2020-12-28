<template>
  <div>
    <div class="ticket">
      <h2 class="ticket-type">景点门票</h2>
      <p class="ticket-name-container">
        <span class="ticket-border"></span>
        <span class="ticket-name">卓思道温泉票</span>
      </p>
      <div class="detail">
        <div class="ticket-type-adult">
          <div class="short-detail">
            <h4 class="item-type">成人票</h4>
            <div class="item-price">
              ¥
              <em>108</em>
              <span>起</span>
            </div>
          </div>
          <div class="detail-item">
            <ticket-detail class="ticket-adult-detail"></ticket-detail>
            <ticket-detail class="ticket-adult-detail"></ticket-detail>
            <ticket-detail class="ticket-adult-detail"></ticket-detail>
          </div>        
        </div>
        
      </div>
    </div>
  </div>
</template>
  
<script>
  import TicketDetail from './Ticket'
  export default {
    name: 'DetailList',
    props:{
        list:Array
    },
    components: {
      TicketDetail
  },
}
</script>

<style lang="stylus" scoped>
.ticket
  padding-left:.16rem
  padding-right:.16rem
  border-top:.16px solid #dadada
  .ticket-type
      overflow: hidden;
      position: relative;
      z-index: 4;
      background: #fff;
      color: #212121;
      font-size: .5rem;
      line-height: .56rem;
      font-weight: bold;
      padding: .32rem 0 0 .04rem;
  .ticket-name-container
    padding-top: .38rem
    padding-bottom: .38rem
    .ticket-border
      background-color:#00e0ca 
      border-radius: .06rem
      height: .4rem
      width: .4rem
      min-width: .2rem
      margin-right: .12rem

    .ticket-name
      font-size: .42rem;
      line-height: .44rem;
      font-weight: bold;
      color: #212121;
  .detail
    background: #fff;
    box-shadow: 0 0.04rem 0.12rem 0 rgba(0,0,0,0.10);
    border-radius: .16rem;
    height:10rem
    width:100%
    margin:auto auto
    .ticket-type-adult
      width:90%
      margin:auto auto
      padding:.32rem 0
      .ticket-adult-detail
        display: block
        clear: both
        padding: .32rem 0
        .detail-item
          padding: 0 .32rem 
      .item-type
        float: left
        margin-right: 1.8rem;
        color: #333;
        font-size: .3rem;
        line-height: .48rem;
      .item-price
        font-size: .2rem;
        float: right
        color: #ff9800
        em
          font-size:.4rem



  

</style>



