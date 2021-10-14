
const state = ()=>({
    userId: null,
    token: null,
})


const getters = {
    isAuthenticated: state => !!state.userId,
    token: state => state.token,
}

const actions = {}
const mutations = {
    setUserAuth(state, infos) {
        state.userId = infos.userId
        state.token = infos.token
    }, 

}

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations,
}