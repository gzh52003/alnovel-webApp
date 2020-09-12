import request from "../newwork/request"

const bookCategory = {
  state: {
    shelfList: [], //书架的数据
    booksList: [], //分类的图书数据
    aboutList: [],
    // search_history: [], //搜索历史
    // 类型的检验
    c_typeList: [{
        都市: "dushi",
      },
      {
        玄幻: "xuanhuan",
      },
      {
        仙侠: "xianxia",
      },
      {
        灵异: "linyi",
      },
      {
        历史: "lishi",
      },
      {
        游戏: "youxi",
      },
      {
        科幻: "kehuan",
      },
      {
        武侠: "wuxia",
      },
      {
        奇幻: "qihuan",
      },
      {
        竞技: "jinji",
      },
    ],
    c_type: "", //类型
  },
  mutations: {
    //获取相关推荐的数据  
    async getAboutList(state, {
      currenId,
      num
    }) {
      const {
        data
      } = await request.get("/category/cate")
      let dataList = data[0].dushi;
      num = 3;
      for (let i = 0; i < dataList.length; i++) {
        if (currenId == dataList[i].bookid) {
          continue
        } else if (i % num === 0) {
          if (state.aboutList.length >= 3) {
            return false
          } else {
            state.aboutList.push(dataList[i])
            // console.log("我是push", dataList[i], state.aboutList);
          }

        }
      }
    },

    // 获取图书的数据
    async getNewList(state, {
      booksList,
      typeName
    }) {
      let {
        data: dataList
      } = await request.get("/category/cate");
      let booksListbj = dataList[0];
      // console.log("我是拿state", this.c_typeList, typeName, booksList);
      state.c_typeList.filter((item) => {
        for (let key in item) {
          if (key === typeName) {
            state.c_type = item[key];
          }
        }
      });
      this.booksList = [];
      for (let key in booksListbj) {
        if (state.c_type == key) {
          booksList = booksListbj[key];
        }
      }
      state.booksList = booksList;
      // console.log("我是最终的", state.booksList);
    },

    // 获取书架列表
    async getShelfList(state) {
      // console.log("我是获取书架列表", state);
      const {
        data: getShelf
      } = await request.get("/shelf");
      // console.log("我是书架", getShelf.data);
      state.shelfList = getShelf.data;
    },

    //假如书架
    async joinShelf(state, payload) {
      const {
        bookid
      } = payload

      const {
        data: joinShelfList
      } = await request.get(`/shelf/repeat/${bookid}`);
      // console.log("我是查是否存在这本书", joinShelfList.code, bookid);

      if (joinShelfList.code === 0) { //证明里面没有图书 那么就可以添加
        // console.log("图书添加", payload);
        await request.post("/shelf", {
          ...payload
        });
      } else {
        // console.log("图书已存在");
      }
    }
  },
  actions: {
    // 加入书架
    joinShelf(context, payload) {
      return new Promise((resolve) => {
        context.commit("joinShelf", payload)
        resolve("添加成功")
      })
    }
  }

}

export default bookCategory;