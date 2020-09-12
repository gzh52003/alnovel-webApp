import request from '../newwork/request'

const bookcity = {
    state: {
        nanpinlist: [],
        changxiaolist: [],
        nvwanjielist: [],
        xihuanlist: [],

    },
    mutations: {
        insertnanpinlist(state, data) {
            state.nanpinlist = data.nanpinlist
            state.changxiaolist = data.changxiaolist
            state.nvwanjielist = data.nvwanjielist
            state.xihuanlist = data.xihuanlist
        },
        // 点击畅销换一换 
        changechangxiao(state, data) {
            state.changxiaolist = []
            state.changxiaolist = data
        }
    },
    actions: {

        async getData(context) {
            const {
                data: nanpin
            } = await request.get("/bookscity");

            const {
                data: changxiaolist
            } = await request.get("/bookscity", {
                params: {
                    leibie: "changxiao"
                }
            });

            const {
                data: nvwanjielist
            } = await request.get("/bookscity", {
                params: {
                    leibie: "nvwanjie"
                }
            });

            const {
                data: xihuanlist
            } = await request.get("/bookscity", {
                params: {
                    leibie: "xihuan"
                }
            });
            context.commit('insertnanpinlist', {
                nanpinlist: nanpin.data,
                changxiaolist: changxiaolist.data,
                nvwanjielist: nvwanjielist.data,
                xihuanlist: xihuanlist.data
            })
        }
    }
}

export default bookcity