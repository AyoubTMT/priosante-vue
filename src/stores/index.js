import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        formData: {
            name: '',
            // les autres champs dyal tarificateur
        }
    },
    mutations: {
        updateFormData(state, payload) {
            state.formData = { ...state.formData, ...payload };
        }
    }
});