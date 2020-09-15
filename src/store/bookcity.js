import request from '../newwork/request'

const bookcity = {
    state: {
        // comhistory:[],
        nanpinlist: [],
        changxiaolist: [],
        nvwanjielist: [],
        xihuanlist: [],
        douluolist: []
    },
    mutations: {
        insertnanpinlist(state, data) {
            state.nanpinlist = data.nanpinlist
            console.log('nanpin响应',this.nanpinlist);
            state.changxiaolist = data.changxiaolist
            state.nvwanjielist = data.nvwanjielist
            state.xihuanlist = data.xihuanlist
            state.douluolist = data.douluolist
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

            console.log('仓库男频',nanpin);
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

            const {
                data: douluolist
            } = await request.get("/bookscity", {
                params: {
                    leibie: "douluo"
                }
            });
            context.commit('insertnanpinlist', {

                // nanpinlist: nanpin.data,
                // changxiaolist: changxiaolist.data,
                // nvwanjielist: nvwanjielist.data,
                // xihuanlist: xihuanlist.data

                nanpinlist: nanpin.data.result,
                changxiaolist: changxiaolist.data.result,
                nvwanjielist: nvwanjielist.data.result,
                xihuanlist: xihuanlist.data.result,
                douluolist: douluolist.data.result
            })
        }
    }
}

export default bookcity