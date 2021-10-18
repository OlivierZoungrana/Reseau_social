
const state = ()=>({
    userId: null,
    username: null,
    token: null,
})


const getters = {
    isAuthenticated: state => !!state.userId, 
    username: state => state.username,
    token: state => state.token,
}

const actions = {}
const mutations = {
    setUserAuth(state, infos) {
        state.userId = infos.userId,
        state.username = infos.username,
        state.token = infos.token
    },

    resetAuth(state) {
        state.userId = null,
        state.username = null,
        state.token = null
    },

}

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations,
}