export const authModule = {
    state: () => ({
    authed: false,
    token: "",
    profileName: "",
    profileRole: "",
    }),
    mutations: {
    authExit(state, exit){
    state.authed = exit;
    },
    newToken(state, token){
    state.token = token;
    },
    updateName(state, name){
    state.profileName = name
    }
    },
    getters: {
    gettoken(state){
    return state.token
    }
    },
    namespaced: true
}