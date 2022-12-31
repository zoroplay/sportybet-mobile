// ~/plugins/vuex-persist.js
import VuexPersistence from "vuex-persist";

export default ({ store }) => {
  new VuexPersistence({
    /* your options */
    storage: window.localStorage,
    modules: ["auth",'coupon'],
  }).plugin(store);
};