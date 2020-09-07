const common = {
    state:{
        showTabbar:true
    },
    mutations:{
        displayTabbar(state,payload){
            state.showTabbar = payload
        }
    }
}
export default common;