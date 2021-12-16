import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const defaultState = {
  currentPage: 1,
};

const inBrowser= typeof window !== 'undefined';

const state = (inBrowser && window.__INITIAL_STATE__) ? window.__INITIAL_STATE__.page : defaultState;

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
