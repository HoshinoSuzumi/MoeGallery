import '~/static/config/config.js'

const API_BASE = window.MGConfig.API_HOST;

export const state = () => ({
  API: {
    BASE: API_BASE,
    getGalleries: API_BASE + '/getGalleries',
    login: API_BASE + '/login',
    logout: API_BASE + '/logout',
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
