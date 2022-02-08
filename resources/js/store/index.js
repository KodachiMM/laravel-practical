import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            user: null,
        };
    },

    getters: {
        user(state) {
            return state.user;
        },
    },

    mutations: {
        setUser(state, payload) {
            state.user = payload;
        },
    },

    actions: {
        async login({ dispatch }, payload) {
            await axios.get('/sanctum/csrf-cookie');

            await axios
                .post('/api/v1/login', payload)
                .then((_res) => {
                    return dispatch('getUser');
                })
                .catch((err) => {
                    throw err.response;
                });
        },

        async register({ dispatch }, payload) {
            await axios
                .post('/api/v1/register', payload)
                .then((_res) => {
                    return dispatch('login', {
                        email: payload.email,
                        password: payload.password,
                    });
                })
                .catch((err) => {
                    throw err.response;
                });
        },

        async logout({ commit }) {
            await axios
                .post('/api/v1/logout')
                .then((_res) => {
                    commit('setUser', null);
                })
                .catch((_err) => {});
        },

        async getUser({ commit }) {
            await axios
                .get('/api/v1/user')
                .then((res) => {
                    commit('setUser', res.data);
                })
                .catch((err) => {});
        },

        async submitForm(_context, payload) {
            await axios
                .post('/api/v1/forms', payload)
                .then((res) => {
                    return res;
                })
                .catch((err) => {
                    throw err.response;
                });
        },
    },
});
