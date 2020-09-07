import request from '../newwork/request'
const bookcity = {
    state: {
        nanpinlist: [
            {
                "img_url": "/img/1160738054673.jpg",
                "book_name": "第一法师",
                "author": "庄毕凡"

            },

            {
                "img_url": "/img/1199128016707.jpg",
                "book_name": "不灭神王",
                "author": "观棋"

            },

            {
                "img_url": "/img/1116046931348.jpg",
                "book_name": "龙血神帝",
                "author": "刹那"

            }
        ],
        changxiaolist: [{
            "img_url": "/img/1156758165151.jpg",
            "book_name": "魅上龙榻：弃后不承欢",
            "author": "风雨楼兰",
            "book_detail": "凤凰浴火，复仇而来，这踏着她孩子尸骨的血债，她势必要让他们百倍，千倍的偿还！ 既已抛弃，何来承欢，不好意思，恕她眼拙，这位公子，你哪位？",
            "tag": "重生",
            "tag0": "完结"
        }, {
            "img_url": "/img/1174747899727.jpg",
            "book_name": "邪王嗜宠：逆天毒医大小姐",
            "author": "完美无瑕",
            "book_detail": "韩青陌：二十一世纪的孤儿一枚，恋医成痴，试毒而亡，再睁眼，她成了北莫国丞相韩知益的嫡长女，再那个都心斗角的时代，她开启了韩怼怼模式，斗姨娘，怼庶妹，一个简单的异世系统，翻手为云，一套金针悬壶济世，覆手为雨，一副毒药要你性命……直到她遇到了莫溯寒，嚣张气焰才得以灭一灭。",
            "tag": "王爷",
            "tag0": "连载"
        }, {
            "img_url": "/img/201711151710026533.jpg",
            "book_name": "绝宠小王妃：隐形大富豪",
            "author": "宁小七",
            "book_detail": "一朝过劳死，女强人穿越成无才无德的相府小透明。一纸诏书，还在昏迷中就被送如陷进。“王爷，咱们做一对有名无实的夫妻可好？”面对绝世俊颜，她擦掉口水与他约法三章。王爷到底是王爷，哪肯依她？士可杀不可辱！本妃誓要与你纠缠一世！很好！本王欢迎之至！",
            "tag": "穿越",
            "tag0": "连载"
        }],
        nvwanjielist: [{
                "img_url": "/img/1158667381516.jpg",
                "book_name": "重生七零带萌娃",
                "author": "小果柒柒"
            }, {
                "img_url": "/img/1161287859113.jpg",
                "book_name": "丑汉辣妻：寡妇空间有点田",
                "author": "浅睡的小妖"
            }, {
                "img_url": "/img/1166718018220.jpg",
                "book_name": "从战场回来后她真香了",
                "author": "汤梓橙"
            },

            {
                "img_url": "/img/201606021630312961.jpg",
                "book_name": "重生之最强商女",
                "author": "十七妃"
            }, {
                "img_url": "/img/1197517934212.jpg",
                "book_name": "司少夜宠：娇妻要上天",
                "author": "林晚晚"
            }, {
                "img_url": "/img/1120197660335.jpg",
                "book_name": "天家药娘",
                "author": "今年霜降時分"
            }
        ],
        xihuanlist: [{
                "img_url": "/img/1195766813921.jpg",
                "book_name": "鸿蒙道尊",
                "author": "九支书竹",
                "book_detail": "三十三诸天世界，灭世道劫，凭手中三尺青锋，败尽三十三天诸天骄，战通天，逆轮回，掌生死，踏碎凌霄",
                "tag": "奇遇",
                "man": 1
            },

            {
                "img_url": "/img/1171306792729.jpg",
                "book_name": "丹武尊圣",
                "author": "真剑",
                "book_detail": "宗门弃子江无忧意外被人打死，却触发了神秘青铜头颅的秘密！从此，他走上了一段极其精彩的逆袭之旅！ 九逆之体受诅咒不能修炼？二十岁将是他的大限之日？ 江无忧强势崛起，一路打脸，轰杀强者！ 顶级武技《混沌战技》，丹道至宝《古丹仙卷》，九品神兽金翎血凤，各种超绝美女……江无忧手到擒来！",
                "tag": "强势崛起",
                "man": 1
            },

            {
                "img_url": "/img/201608041502339025.jpg",
                "book_name": "山村小神医",
                "author": "七宝浮屠",
                "book_detail": "山村医生传人李英俊，机缘巧合得到残缺的天书传承，从狗都嫌的赤脚郎中华丽蜕变为一代小神医，吸引着各路美女纷纷涌进小山沟，同时也带领着乡亲们脱贫致富，逐渐把小山村建设成无数权贵向往的人间圣地……",
                "tag": "热血",
                "man": 1
            },
            {
                "img_url": "/img/1197517934212.jpg",
                "book_name": "司少夜宠：娇妻要上天",
                "author": "林晚晚",
                "book_detail": "山村医生传人李英俊，机缘巧合得到残缺的天书传承，从狗都嫌的赤脚郎中华丽蜕变为一代小神医，吸引着各路美女纷纷涌进小山沟，同时也带领着乡亲们脱贫致富，逐渐把小山村建设成无数权贵向往的人间圣地……",
                "tag": "热血",
                "man": 1
            }
        ]

    },
    mutations: {
        insertnanpinlist(state, data) {
            state.nanpinlist = data

        }
    },
    actions: {
        async getData({context}) {
            const {
                data: nanpin
            } = await request.get("/bookscity");
            // const nanpin = [
            //     {
            //         "img_url": "/img/201611161033134214.jpg",
            //         "book_name": "小侯爷的末世丑妾",
            //         "author": "天堂鸟"
            //     },

            //     {
            //         "img_url": "/img/1195147946194.jpg",
            //         "book_name": "重生七零末：神医小辣妻",
            //         "author": "四四石榴"
            //     } ,
            //     {
            //         "img_url": "/img/1109977830426.jpg",
            //         "book_name": "锦绣田园：农家俏悍媳",
            //         "author": "福星儿"
            //     }
            // ]
            context.commit('insertnanpinlist', nanpin.data)
        }
    }
}
export default bookcity