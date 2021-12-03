import Vuex from 'vuex'
import AccountsModule from './accounts'

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      accounts: AccountsModule
    }
  })
}

export default createStore
