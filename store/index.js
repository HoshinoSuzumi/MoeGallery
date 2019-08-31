const API_BASE = 'https://easy-mock.com/mock/5d67c9f2ab43cb405ed2a279';

export const state = () => ({
  API: {
    BASE: API_BASE,
    getGalleries: API_BASE + '/getGalleries',
    login: API_BASE + '',
    logout: API_BASE + '',
  },
  needAuthList: [
    '/management',
  ],
  token: null,
  siteInfo: {},
  galleries: null,
});

export const mutations = {
  updateToken(state, token) {
    state.token = token;
  },
  updateSiteInfo(state, token) {
    state.siteInfo = token;
  },
  updateGalleries(state, data) {
    state.galleries = data;
  },
};
