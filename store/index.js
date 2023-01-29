
export const state = () => ({
  sport_id: 1,
  live: false,
  sports: [],
  fixtures: [],
  SportsbookBonusList: [],
  SportsbookGlobalVariable: {}
});

export const mutations = {
  setLive(state, value) {
    state.live = value;
  },
  setMenu(state, payload) {
    state.sports = payload;
  },
  setActiveSport(state, payload){
    state.sport_id = payload;
  },
  setBonusList(state, payload) {
    state.SportsbookBonusList = payload;
  },
  setGlobalVars(state, payload) {
    state.SportsbookGlobalVariable = payload;
  }
};

export const actions = {
  setCommitLive({ commit }, value) {
    commit("setLive", value);
  },
  setCommitMenu({ commit }, value) {
    this.$axios.get("sports/get-menu?period=all&start=null&end=null").then((res)=>{
      commit("setMenu", res.data.menu);
    })
  },
  setCommitActiveSport({ commit }, value) {
    commit('setActiveSport', value);
  },
  setCommitSiteData({ commit }) {
    Promise.all([fetchBonusList(), fetchGlobalVars()]).then(res => {
      commit("setBonusList", res[0].data);
      commit("setGlobalVars", res[1].data);
    });
  }
}

export const strict = false

const fetchGlobalVars = () => axios.get(`/utilities/globalvariables`);

const fetchBonusList = () => axios.get(`/utilities/bonuslist?section=onliners`);


