<template>
  <div class="item">
    <div class="detail">
      <h6 class="mp-ticket-title mp-ellipsis2">广州从化卓思道温泉门票（成人票）</h6>
      <div class="mp-ticket-light">
          <span class="mp-ticket-desctag">
              <img class="mp-ticket-tagicon" src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20202/6489a65436e6dd60420dae78f46d25d6.png">
              21:30前随买随用</span>
          </div>
      <div class="mp-ticket-labelcon">
          <span class="mp-ticket-label mp-border mp-label25">随时退</span>
          <span class="mp-ticket-label mp-border mp-label26">无需换票</span>
      </div>
      <div class="mp-ticket-supplier">
          <span>景点旅行网</span>
          <span class="mp-ticket-infobtn mp-border-left">预订须知
          </span>
      </div>
    </div>
    <div class="price">
        <div class="item-price">
          ¥
          <em>108</em>
        </div>
        <el-row>
          <el-button type="warning" round size="mini">立即预定</el-button>
        </el-row>
    </div>

</div>
</template>
  
<script>
export default {
  name: 'TicketDetail'
}
</script>

<style scoped>
  .item{
    height:2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .detail{
    float: left;
    
  }
  .price{
    float: right;
    margin:0.3rem auto

  }
  .price .item-price{
    padding-right: 0.35rem;
  }
    .mp-ticket-title {
        padding: 0;
        color: #333;
        font-size: 0.3rem;

    }
    .mp-ticket-desctag .mp-ticket-tagicon {
        display: inline-block;
        width: 0.2rem;
        max-height: 0.2rem;
        margin-right: .04rem;
        vertical-align: 0;
    }
    .mp-ticket-desctag {
        display: inline-block;
        color: #00afc7;
        font-size: .05rem;
        padding-top:0.2rem
    }

    .mp-ticket-labelcon {
        padding-top:0.1rem;
        display: block;
    }
.mp-ticket-label {
    display: inline-block;
    margin-top: .08rem;
    padding: 0 .04rem;
    height: .28rem;
    color: #00afc7;
    font-size: .05rem;
    white-space: nowrap;
}
.mp-ticket-supplier {
    display: flex;
    margin-top: .12rem;
    color: #616161;
    font-size: .12rem;
    padding-top:0.05rem
}
.mp-ticket-supplier .mp-ticket-infobtn {
    margin-left: .06rem;
    padding-left: .08rem;
}
.item-price{
        font-size: .2rem;
        float: right;
        color: #ff9800
}
.item-price em{
  font-size:.4rem
}
</style>