import Vuex from 'vuex'
import QuestionsModule from './questions'

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      questions: QuestionsModule
    }
  })
}

export default createStore
