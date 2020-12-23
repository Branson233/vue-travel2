export default {
    changeCity(state,city){
        state.city=city
        try{
          localStorage.city=city
        } catch(e) {
          //
        }   
      },
    setLogin(state,flag){
      state.isLogin=flag
    }
}