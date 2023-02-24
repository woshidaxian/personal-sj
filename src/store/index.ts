import { createStore } from 'vuex'

export default createStore({
  state: {
    hasLogin: false as boolean,
    token: '' as string | null,
    userInfo: {
      account: '' as string | null,
      headImg: '' as string | null,
      age: null as number | null,
      email: '' as string | null,
      phone: '' as string | null
    }
  },
  mutations: {
  },
  actions: {
    checkLogin(){
      if (this.state.token && this.state.hasLogin){
        return true
      }else{
        return false
      }
    },
    logOut(){
      this.state.token = null
      this.state.hasLogin = false
      this.state.userInfo = {
        account: '',
        headImg: '',
        age: null,
        email: '',
        phone: ''
      }
    },
    loginIn(params){
      console.log(params)
    }
  },
  modules: {
  }
})
