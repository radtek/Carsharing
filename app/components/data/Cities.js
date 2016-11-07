const Cities = [
    {
        value: 110001,
        label: "北京",
        spell: "beijing"
    },
    {
        value: 120001,
        label: "天津",
        spell: "tianjin"
    },
    {
        value: 130001,
        label: "石家庄",
        spell: "jiazhuang"
    },
    {
        value: 130002,
        label: "唐山",
        spell: "tangshan"
    },
    {
        value: 130003,
        label: "秦皇岛",
        spell: "qinhuangdao"
    },
    {
        value: 130004,
        label: "邯郸",
        spell: "handan"
    },
    {
        value: 130005,
        label: "邢台",
        spell: "xingtai"
    },
    {
        value: 130006,
        label: "保定",
        spell: "baoding"
    },
    {
        value: 130007,
        label: "张家口",
        spell: "zhangjiakou"
    },
    {
        value: 130008,
        label: "承德",
        spell: "chengde"
    },
    {
        value: 130009,
        label: "沧州",
        spell: "cangzhou"
    },
    {
        value: 13010,
        label: "廊坊",
        spell: "langfang"
    },
    {
        value: 131001,
        label: "衡水",
        spell: "hengshui"
    },
    {
        value: 140001,
        label: "太原",
        spell: "taiyuan"
    },
    {
        value: 140002,
        label: "大同",
        spell: "datong"
    },
    {
        value: 140003,
        label: "阳泉",
        spell: "yangquan"
    },
    {
        value: 140004,
        label: "长治",
        spell: "zhangzhi"
    },
    {
        value: 140005,
        label: "晋城",
        spell: "jincheng"
    },
    {
        value: 140006,
        label: "朔州",
        spell: "shuozhou"
    },
    {
        value: 140007,
        label: "晋中",
        spell: "jinzhong"
    },
    {
        value: 140008,
        label: "运城",
        spell: "yuncheng"
    },
    {
        value: 140009,
        label: "忻州",
        spell: "xinzhou"
    },
    {
        value: 14010,
        label: "临汾",
        spell: "linfen"
    },
    {
        value: 141001,
        label: "吕梁",
        spell: "lvliang"
    },
    {
        value: 150001,
        label: "呼和浩特",
        spell: "huhehaote"
    },
    {
        value: 150002,
        label: "包头",
        spell: "baotou"
    },
    {
        value: 150003,
        label: "乌海",
        spell: "wuhai"
    },
    {
        value: 150004,
        label: "赤峰",
        spell: "chifeng"
    },
    {
        value: 150005,
        label: "通辽",
        spell: "tongliao"
    },
    {
        value: 150006,
        label: "鄂尔多斯",
        spell: "eerduosi"
    },
    {
        value: 150007,
        label: "呼伦贝尔",
        spell: "hulunbeier"
    },
    {
        value: 150008,
        label: "巴彦淖尔",
        spell: "bayannaoer"
    },
    {
        value: 150009,
        label: "乌兰察布",
        spell: "wulanchabu"
    },
    {
        value: 152002,
        label: "兴安盟",
        spell: "xinganmeng"
    },
    {
        value: 152005,
        label: "锡林郭勒盟",
        spell: "xilinguolemeng"
    },
    {
        value: 152009,
        label: "阿拉善盟",
        spell: "alashanmeng"
    },
    {
        value: 210001,
        label: "沈阳",
        spell: "shenyang"
    },
    {
        value: 210002,
        label: "大连",
        spell: "dalian"
    },
    {
        value: 210003,
        label: "鞍山",
        spell: "anshan"
    },
    {
        value: 210004,
        label: "抚顺",
        spell: "fushun"
    },
    {
        value: 210005,
        label: "本溪",
        spell: "benxi"
    },
    {
        value: 210006,
        label: "丹东",
        spell: "dandong"
    },
    {
        value: 210007,
        label: "锦州",
        spell: "jinzhou"
    },
    {
        value: 210008,
        label: "营口",
        spell: "yingkou"
    },
    {
        value: 210009,
        label: "阜新",
        spell: "fuxin"
    },
    {
        value: 21010,
        label: "辽阳",
        spell: "liaoyang"
    },
    {
        value: 211001,
        label: "盘锦",
        spell: "panjin"
    },
    {
        value: 211002,
        label: "铁岭",
        spell: "tieling"
    },
    {
        value: 211003,
        label: "朝阳",
        spell: "chaoyang"
    },
    {
        value: 211004,
        label: "葫芦岛",
        spell: "huludao"
    },
    {
        value: 220001,
        label: "长春",
        spell: "zhangchun"
    },
    {
        value: 220002,
        label: "吉林",
        spell: "jilin"
    },
    {
        value: 220003,
        label: "四平",
        spell: "siping"
    },
    {
        value: 220004,
        label: "辽源",
        spell: "liaoyuan"
    },
    {
        value: 220005,
        label: "通化",
        spell: "tonghua"
    },
    {
        value: 220006,
        label: "白山",
        spell: "baishan"
    },
    {
        value: 220007,
        label: "松原",
        spell: "songyuan"
    },
    {
        value: 220008,
        label: "白城",
        spell: "baicheng"
    },
    {
        value: 222004,
        label: "延边朝鲜族自治州",
        spell: "yanbianchaoxianzuzizhizhou"
    },
    {
        value: 230001,
        label: "哈尔滨",
        spell: "haerbin"
    },
    {
        value: 230002,
        label: "齐齐哈尔",
        spell: "qiqihaer"
    },
    {
        value: 230003,
        label: "鸡西",
        spell: "jixi"
    },
    {
        value: 230004,
        label: "鹤岗",
        spell: "hegang"
    },
    {
        value: 230006,
        label: "大庆",
        spell: "daqing"
    },
    {
        value: 230007,
        label: "伊春",
        spell: "yichun"
    },
    {
        value: 230008,
        label: "佳木斯",
        spell: "jiamusi"
    },
    {
        value: 230009,
        label: "七台河",
        spell: "qitaihe"
    },
    {
        value: 23010,
        label: "牡丹江",
        spell: "mudanjiang"
    },
    {
        value: 231001,
        label: "黑河",
        spell: "heihe"
    },
    {
        value: 231002,
        label: "绥化",
        spell: "suihua"
    },
    {
        value: 232007,
        label: "大兴安岭地区",
        spell: "daxinganlingdiqu"
    },
    {
        value: 310001,
        label: "上海",
        spell: "shanghai"
    },
    {
        value: 320001,
        label: "南京",
        spell: "nanjing"
    },
    {
        value: 320002,
        label: "无锡",
        spell: "wuxi"
    },
    {
        value: 320003,
        label: "徐州",
        spell: "xuzhou"
    },
    {
        value: 320004,
        label: "常州",
        spell: "changzhou"
    },
    {
        value: 320005,
        label: "苏州",
        spell: "suzhou"
    },
    {
        value: 320006,
        label: "南通",
        spell: "nantong"
    },
    {
        value: 320007,
        label: "连云港",
        spell: "lianyungang"
    },
    {
        value: 320008,
        label: "淮安",
        spell: "huaian"
    },
    {
        value: 320009,
        label: "盐城",
        spell: "yancheng"
    },
    {
        value: 32010,
        label: "扬州",
        spell: "yangzhou"
    },
    {
        value: 321001,
        label: "镇江",
        spell: "zhenjiang"
    },
    {
        value: 321002,
        label: "泰州",
        spell: "taizhou"
    },
    {
        value: 321003,
        label: "宿迁",
        spell: "suqian"
    },
    {
        value: 330001,
        label: "杭州",
        spell: "hangzhou"
    },
    {
        value: 330002,
        label: "宁波",
        spell: "ningbo"
    },
    {
        value: 330003,
        label: "温州",
        spell: "wenzhou"
    },
    {
        value: 330004,
        label: "嘉兴",
        spell: "jiaxing"
    },
    {
        value: 330005,
        label: "湖州",
        spell: "huzhou"
    },
    {
        value: 330006,
        label: "绍兴",
        spell: "shaoxing"
    },
    {
        value: 330007,
        label: "金华",
        spell: "jinhua"
    },
    {
        value: 330008,
        label: "衢州",
        spell: "quzhou"
    },
    {
        value: 330009,
        label: "舟山",
        spell: "zhoushan"
    },
    {
        value: 33010,
        label: "台州",
        spell: "taizhou1"
    },
    {
        value: 331001,
        label: "丽水",
        spell: "lishui"
    },
    {
        value: 340001,
        label: "合肥",
        spell: "hefei"
    },
    {
        value: 340002,
        label: "芜湖",
        spell: "wuhu"
    },
    {
        value: 340003,
        label: "蚌埠",
        spell: "bangbu"
    },
    {
        value: 340004,
        label: "淮南",
        spell: "huainan"
    },
    {
        value: 340005,
        label: "马鞍山",
        spell: "maanshan"
    },
    {
        value: 340006,
        label: "淮北",
        spell: "huaibei"
    },
    {
        value: 340007,
        label: "铜陵",
        spell: "tongling"
    },
    {
        value: 340008,
        label: "安庆",
        spell: "anqing"
    },
    {
        value: 34010,
        label: "黄山",
        spell: "huangshan"
    },
    {
        value: 341001,
        label: "滁州",
        spell: "chuzhou"
    },
    {
        value: 341002,
        label: "阜阳",
        spell: "fuyang"
    },
    {
        value: 341003,
        label: "宿州",
        spell: "suzhou1"
    },
    {
        value: 341004,
        label: "巢湖",
        spell: "chaohu"
    },
    {
        value: 341005,
        label: "六安",
        spell: "liuan"
    },
    {
        value: 341006,
        label: "亳州",
        spell: "bozhou"
    },
    {
        value: 341007,
        label: "池州",
        spell: "chizhou"
    },
    {
        value: 341008,
        label: "宣城",
        spell: "xuancheng"
    },
    {
        value: 350001,
        label: "福州",
        spell: "fuzhou"
    },
    {
        value: 350002,
        label: "厦门",
        spell: "xiamen"
    },
    {
        value: 350003,
        label: "莆田",
        spell: "putian"
    },
    {
        value: 350004,
        label: "三明",
        spell: "sanming"
    },
    {
        value: 350005,
        label: "泉州",
        spell: "quanzhou"
    },
    {
        value: 350006,
        label: "漳州",
        spell: "zhangzhou"
    },
    {
        value: 350007,
        label: "南平",
        spell: "nanping"
    },
    {
        value: 350008,
        label: "龙岩",
        spell: "longyan"
    },
    {
        value: 350009,
        label: "宁德",
        spell: "ningde"
    },
    {
        value: 360001,
        label: "南昌",
        spell: "nanchang"
    },
    {
        value: 360002,
        label: "景德镇",
        spell: "jingdezhen"
    },
    {
        value: 360003,
        label: "萍乡",
        spell: "pingxiang"
    },
    {
        value: 360004,
        label: "九江",
        spell: "jiujiang"
    },
    {
        value: 360005,
        label: "新余",
        spell: "xinyu"
    },
    {
        value: 360006,
        label: "鹰潭",
        spell: "yingtan"
    },
    {
        value: 360007,
        label: "赣州",
        spell: "ganzhou"
    },
    {
        value: 360008,
        label: "吉安",
        spell: "jian"
    },
    {
        value: 360009,
        label: "宜春",
        spell: "yichun1"
    },
    {
        value: 36010,
        label: "抚州",
        spell: "fuzhou1"
    },
    {
        value: 361001,
        label: "上饶",
        spell: "shangrao"
    },
    {
        value: 370001,
        label: "济南",
        spell: "jinan"
    },
    {
        value: 370002,
        label: "青岛",
        spell: "qingdao"
    },
    {
        value: 370003,
        label: "淄博",
        spell: "zibo"
    },
    {
        value: 370004,
        label: "枣庄",
        spell: "zaozhuang"
    },
    {
        value: 370005,
        label: "东营",
        spell: "dongying"
    },
    {
        value: 370006,
        label: "烟台",
        spell: "yantai"
    },
    {
        value: 370007,
        label: "潍坊",
        spell: "weifang"
    },
    {
        value: 370008,
        label: "济宁",
        spell: "jining"
    },
    {
        value: 370009,
        label: "泰安",
        spell: "taian"
    },
    {
        value: 37010,
        label: "威海",
        spell: "weihai"
    },
    {
        value: 371001,
        label: "日照",
        spell: "rizhao"
    },
    {
        value: 371002,
        label: "莱芜",
        spell: "laiwu"
    },
    {
        value: 371003,
        label: "临沂",
        spell: "linyi"
    },
    {
        value: 371004,
        label: "德州",
        spell: "dezhou"
    },
    {
        value: 371005,
        label: "聊城",
        spell: "liaocheng"
    },
    {
        value: 371006,
        label: "滨州",
        spell: "binzhou"
    },
    {
        value: 371007,
        label: "荷泽",
        spell: "heze"
    },
    {
        value: 410001,
        label: "郑州",
        spell: "zhengzhou"
    },
    {
        value: 410002,
        label: "开封",
        spell: "kaifeng"
    },
    {
        value: 410003,
        label: "洛阳",
        spell: "luoyang"
    },
    {
        value: 410004,
        label: "平顶山",
        spell: "pingdingshan"
    },
    {
        value: 410005,
        label: "安阳",
        spell: "anyang"
    },
    {
        value: 410006,
        label: "鹤壁",
        spell: "hebi"
    },
    {
        value: 410007,
        label: "新乡",
        spell: "xinxiang"
    },
    {
        value: 410008,
        label: "焦作",
        spell: "jiaozuo"
    },
    {
        value: 410009,
        label: "濮阳",
        spell: "puyang"
    },
    {
        value: 41010,
        label: "许昌",
        spell: "xuchang"
    },
    {
        value: 411001,
        label: "漯河",
        spell: "luohe"
    },
    {
        value: 411002,
        label: "三门峡",
        spell: "sanmenxia"
    },
    {
        value: 411003,
        label: "南阳",
        spell: "nanyang"
    },
    {
        value: 411004,
        label: "商丘",
        spell: "shangqiu"
    },
    {
        value: 411005,
        label: "信阳",
        spell: "xinyang"
    },
    {
        value: 411006,
        label: "周口",
        spell: "zhoukou"
    },
    {
        value: 411007,
        label: "驻马店",
        spell: "zhumadian"
    },
    {
        value: 420001,
        label: "武汉",
        spell: "wuhan"
    },
    {
        value: 420002,
        label: "黄石",
        spell: "huang"
    },
    {
        value: 420003,
        label: "十堰",
        spell: "shiyan"
    },
    {
        value: 420005,
        label: "宜昌",
        spell: "yichang"
    },
    {
        value: 420006,
        label: "襄樊",
        spell: "xiangfan"
    },
    {
        value: 420007,
        label: "鄂州",
        spell: "ezhou"
    },
    {
        value: 420008,
        label: "荆门",
        spell: "jingmen"
    },
    {
        value: 420009,
        label: "孝感",
        spell: "xiaogan"
    },
    {
        value: 42010,
        label: "荆州",
        spell: "jingzhou"
    },
    {
        value: 421001,
        label: "黄冈",
        spell: "huanggang"
    },
    {
        value: 421002,
        label: "咸宁",
        spell: "xianning"
    },
    {
        value: 421003,
        label: "随州",
        spell: "suizhou"
    },
    {
        value: 422008,
        label: "恩施土家族苗族自治州",
        spell: "entujiazumiaozuzizhizhou"
    },
    {
        value: 430001,
        label: "长沙",
        spell: "changsha"
    },
    {
        value: 430002,
        label: "株洲",
        spell: "zhuzhou"
    },
    {
        value: 430003,
        label: "湘潭",
        spell: "xiangtan"
    },
    {
        value: 430004,
        label: "衡阳",
        spell: "hengyang"
    },
    {
        value: 430005,
        label: "邵阳",
        spell: "shaoyang"
    },
    {
        value: 430006,
        label: "岳阳",
        spell: "yueyang"
    },
    {
        value: 430007,
        label: "常德",
        spell: "changde"
    },
    {
        value: 430008,
        label: "张家界",
        spell: "zhangjiajie"
    },
    {
        value: 430009,
        label: "益阳",
        spell: "yiyang"
    },
    {
        value: 43010,
        label: "郴州",
        spell: "chenzhou"
    },
    {
        value: 431001,
        label: "永州",
        spell: "yongzhou"
    },
    {
        value: 431002,
        label: "怀化",
        spell: "huaihua"
    },
    {
        value: 431003,
        label: "娄底",
        spell: "loudi"
    },
    {
        value: 433001,
        label: "湘西",
        spell: "xiangxitujiazumiaozuzizhizhou"
    },
    {
        value: 440001,
        label: "广州",
        spell: "guangzhou"
    },
    {
        value: 440002,
        label: "韶关",
        spell: "shaoguan"
    },
    {
        value: 440003,
        label: "深圳",
        spell: "shenzhen"
    },
    {
        value: 440004,
        label: "珠海",
        spell: "zhuhai"
    },
    {
        value: 440005,
        label: "汕头",
        spell: "shantou"
    },
    {
        value: 440006,
        label: "佛山",
        spell: "foshan"
    },
    {
        value: 440007,
        label: "江门",
        spell: "jiangmen"
    },
    {
        value: 440008,
        label: "湛江",
        spell: "zhanjiang"
    },
    {
        value: 440009,
        label: "茂名",
        spell: "maoming"
    },
    {
        value: 441002,
        label: "肇庆",
        spell: "zhaoqing"
    },
    {
        value: 441003,
        label: "惠州",
        spell: "huizhou"
    },
    {
        value: 441004,
        label: "梅州",
        spell: "meizhou"
    },
    {
        value: 441005,
        label: "汕尾",
        spell: "shanwei"
    },
    {
        value: 441006,
        label: "河源",
        spell: "heyuan"
    },
    {
        value: 441007,
        label: "阳江",
        spell: "yangjiang"
    },
    {
        value: 441008,
        label: "清远",
        spell: "qingyuan"
    },
    {
        value: 441009,
        label: "东莞",
        spell: "dongguan"
    },
    {
        value: 442000,
        label: "中山",
        spell: "zhongshan"
    },
    {
        value: 445001,
        label: "潮州",
        spell: "chaozhou"
    },
    {
        value: 445002,
        label: "揭阳",
        spell: "jieyang"
    },
    {
        value: 445003,
        label: "云浮",
        spell: "yunfu"
    },
    {
        value: 450001,
        label: "南宁",
        spell: "nanning"
    },
    {
        value: 450002,
        label: "柳州",
        spell: "liuzhou"
    },
    {
        value: 450003,
        label: "桂林",
        spell: "guilin"
    },
    {
        value: 450004,
        label: "梧州",
        spell: "wuzhou"
    },
    {
        value: 450005,
        label: "北海",
        spell: "beihai"
    },
    {
        value: 450006,
        label: "防城港",
        spell: "fangchenggang"
    },
    {
        value: 450007,
        label: "钦州",
        spell: "qinzhou"
    },
    {
        value: 450008,
        label: "贵港",
        spell: "guigang"
    },
    {
        value: 450009,
        label: "玉林",
        spell: "yulin"
    },
    {
        value: 45010,
        label: "百色",
        spell: "baise"
    },
    {
        value: 451001,
        label: "贺州",
        spell: "hezhou"
    },
    {
        value: 451002,
        label: "河池",
        spell: "hechi"
    },
    {
        value: 451003,
        label: "来宾",
        spell: "laibin"
    },
    {
        value: 451004,
        label: "崇左",
        spell: "chongzuo"
    },
    {
        value: 460001,
        label: "海口",
        spell: "haikou"
    },
    {
        value: 460002,
        label: "三亚",
        spell: "sanya"
    },
    {
        value: 500003,
        label: "重庆",
        spell: "chongqing"
    },
    {
        value: 510001,
        label: "成都",
        spell: "chengdu"
    },
    {
        value: 510003,
        label: "自贡",
        spell: "zigong"
    },
    {
        value: 510004,
        label: "攀枝花",
        spell: "panzhihua"
    },
    {
        value: 510005,
        label: "泸州",
        spell: "luzhou"
    },
    {
        value: 510006,
        label: "德阳",
        spell: "deyang"
    },
    {
        value: 510007,
        label: "绵阳",
        spell: "mianyang"
    },
    {
        value: 510008,
        label: "广元",
        spell: "guangyuan"
    },
    {
        value: 510009,
        label: "遂宁",
        spell: "suining"
    },
    {
        value: 51010,
        label: "内江",
        spell: "neijiang"
    },
    {
        value: 511001,
        label: "乐山",
        spell: "leshan"
    },
    {
        value: 511003,
        label: "南充",
        spell: "nanchong"
    },
    {
        value: 511004,
        label: "眉山",
        spell: "meishan"
    },
    {
        value: 511005,
        label: "宜宾",
        spell: "yibin"
    },
    {
        value: 511006,
        label: "广安",
        spell: "guangan"
    },
    {
        value: 511007,
        label: "达州",
        spell: "dazhou"
    },
    {
        value: 511008,
        label: "雅安",
        spell: "yaan"
    },
    {
        value: 511009,
        label: "巴中",
        spell: "bazhong"
    },
    {
        value: 512000,
        label: "资阳",
        spell: "ziyang"
    },
    {
        value: 513002,
        label: "阿坝藏族羌族自治州",
        spell: "abazangzuqiangzuzizhizhou"
    },
    {
        value: 513003,
        label: "甘孜藏族自治州",
        spell: "ganzizangzuzizhizhou"
    },
    {
        value: 513004,
        label: "凉山彝族自治州",
        spell: "liangshanyizuzizhizhou"
    },
    {
        value: 520001,
        label: "贵阳",
        spell: "guiyang"
    },
    {
        value: 520002,
        label: "六盘水",
        spell: "liupanshui"
    },
    {
        value: 520003,
        label: "遵义",
        spell: "zunyi"
    },
    {
        value: 520004,
        label: "安顺",
        spell: "anshun"
    },
    {
        value: 522002,
        label: "铜仁地区",
        spell: "tongrendiqu"
    },
    {
        value: 522003,
        label: "黔西南布依族苗族自治州",
        spell: "qianxinanbuyizumiaozuzizhizhou"
    },
    {
        value: 522004,
        label: "毕节地区",
        spell: "bijiediqu"
    },
    {
        value: 522006,
        label: "黔东南苗族侗族自治州",
        spell: "qiandongnanmiaozudongzuzizhizhou"
    },
    {
        value: 522007,
        label: "黔南布依族苗族自治州",
        spell: "qiannanbuyizumiaozuzizhizhou"
    },
    {
        value: 530001,
        label: "昆明",
        spell: "kunming"
    },
    {
        value: 530003,
        label: "曲靖",
        spell: "qujing"
    },
    {
        value: 530004,
        label: "玉溪",
        spell: "yuxi"
    },
    {
        value: 530005,
        label: "保山",
        spell: "baoshan"
    },
    {
        value: 530006,
        label: "昭通",
        spell: "zhaotong"
    },
    {
        value: 530007,
        label: "丽江",
        spell: "lijiang"
    },
    {
        value: 530008,
        label: "思茅",
        spell: "simao"
    },
    {
        value: 530009,
        label: "临沧",
        spell: "lincang"
    },
    {
        value: 532003,
        label: "楚雄彝族自治州",
        spell: "chuxiongyizuzizhizhou"
    },
    {
        value: 532005,
        label: "红河哈尼族彝族自治州",
        spell: "honghehanizuyizuzizhizhou"
    },
    {
        value: 532006,
        label: "文山壮族苗族自治州",
        spell: "wenshanzhuangzumiaozuzizhizhou"
    },
    {
        value: 532008,
        label: "西双版纳傣族自治州",
        spell: "xishuangbannadaizuzizhizhou"
    },
    {
        value: 532009,
        label: "大理白族自治州",
        spell: "dalibaizuzizhizhou"
    },
    {
        value: 533001,
        label: "德宏傣族景颇族自治州",
        spell: "dehongdaizujingpozuzizhizhou"
    },
    {
        value: 533003,
        label: "怒江傈僳族自治州",
        spell: "nujianglisuzuzizhizhou"
    },
    {
        value: 533004,
        label: "迪庆藏族自治州",
        spell: "diqingzangzuzizhizhou"
    },
    {
        value: 540001,
        label: "拉萨",
        spell: "lasa"
    },
    {
        value: 542001,
        label: "昌都地区",
        spell: "changdoudiqu"
    },
    {
        value: 542002,
        label: "山南地区",
        spell: "shannandiqu"
    },
    {
        value: 542003,
        label: "日喀则地区",
        spell: "rikazediqu"
    },
    {
        value: 542004,
        label: "那曲地区",
        spell: "neiqudiqu"
    },
    {
        value: 542005,
        label: "阿里地区",
        spell: "alidiqu"
    },
    {
        value: 542006,
        label: "林芝地区",
        spell: "linzhidiqu"
    },
    {
        value: 610001,
        label: "西安",
        spell: "xian"
    },
    {
        value: 610002,
        label: "铜川",
        spell: "tongchuan"
    },
    {
        value: 610003,
        label: "宝鸡",
        spell: "baoji"
    },
    {
        value: 610004,
        label: "咸阳",
        spell: "xianyang"
    },
    {
        value: 610005,
        label: "渭南",
        spell: "weinan"
    },
    {
        value: 610006,
        label: "延安",
        spell: "yanan"
    },
    {
        value: 610007,
        label: "汉中",
        spell: "hanzhong"
    },
    {
        value: 610008,
        label: "榆林",
        spell: "yulin"
    },
    {
        value: 610009,
        label: "安康",
        spell: "ankang"
    },
    {
        value: 61010,
        label: "商洛",
        spell: "shangluo"
    },
    {
        value: 620001,
        label: "兰州",
        spell: "lanzhou"
    },
    {
        value: 620002,
        label: "嘉峪关",
        spell: "jiayuguan"
    },
    {
        value: 620003,
        label: "金昌",
        spell: "jinchang"
    },
    {
        value: 620004,
        label: "白银",
        spell: "baiyin"
    },
    {
        value: 620005,
        label: "天水",
        spell: "tianshui"
    },
    {
        value: 620006,
        label: "武威",
        spell: "wuwei"
    },
    {
        value: 620007,
        label: "张掖",
        spell: "zhangye"
    },
    {
        value: 620008,
        label: "平凉",
        spell: "pingliang"
    },
    {
        value: 620009,
        label: "酒泉",
        spell: "jiuquan"
    },
    {
        value: 62010,
        label: "庆阳",
        spell: "qingyang"
    },
    {
        value: 621001,
        label: "定西",
        spell: "dingxi"
    },
    {
        value: 621002,
        label: "陇南",
        spell: "longnan"
    },
    {
        value: 622009,
        label: "临夏回族自治州",
        spell: "linxiahuizuzizhizhou"
    },
    {
        value: 623000,
        label: "甘南藏族自治州",
        spell: "gannanzangzuzizhizhou"
    },
    {
        value: 630001,
        label: "西宁",
        spell: "xining"
    },
    {
        value: 632001,
        label: "海东地区",
        spell: "haidongdiqu"
    },
    {
        value: 632002,
        label: "海北藏族自治州",
        spell: "haibeizangzuzizhizhou"
    },
    {
        value: 632003,
        label: "黄南藏族自治州",
        spell: "huangnanzangzuzizhizhou"
    },
    {
        value: 632005,
        label: "海南藏族自治州",
        spell: "hainanzangzuzizhizhou"
    },
    {
        value: 632006,
        label: "果洛藏族自治州",
        spell: "guoluozangzuzizhizhou"
    },
    {
        value: 632007,
        label: "玉树藏族自治州",
        spell: "yushuzangzuzizhizhou"
    },
    {
        value: 632008,
        label: "海西蒙古族藏族自治州",
        spell: "haiximengguzuzangzuzizhizhou"
    },
    {
        value: 640001,
        label: "银川",
        spell: "yinchuan"
    },
    {
        value: 640002,
        label: "石嘴山",
        spell: "zuishan"
    },
    {
        value: 640003,
        label: "吴忠",
        spell: "wuzhong"
    },
    {
        value: 640004,
        label: "固原",
        spell: "guyuan"
    },
    {
        value: 640005,
        label: "中卫",
        spell: "zhongwei"
    },
    {
        value: 650001,
        label: "乌鲁木齐",
        spell: "wulumuqi"
    },
    {
        value: 650002,
        label: "克拉玛依",
        spell: "kelamayi"
    },
    {
        value: 652001,
        label: "吐鲁番地区",
        spell: "tulufandiqu"
    },
    {
        value: 652002,
        label: "哈密地区",
        spell: "hamidiqu"
    },
    {
        value: 652003,
        label: "昌吉回族自治州",
        spell: "changjihuizuzizhizhou"
    },
    {
        value: 652007,
        label: "博尔塔拉蒙古自治州",
        spell: "boertalamengguzizhizhou"
    },
    {
        value: 652008,
        label: "巴音郭楞蒙古自治州",
        spell: "bayinguolengmengguzizhizhou"
    },
    {
        value: 652009,
        label: "阿克苏地区",
        spell: "akesudiqu"
    },
    {
        value: 653000,
        label: "克孜勒苏柯尔克孜自治州",
        spell: "kezilesukeerkezizizhizhou"
    },
    {
        value: 653001,
        label: "喀什地区",
        spell: "kashendiqu"
    },
    {
        value: 653002,
        label: "和田地区",
        spell: "hetiandiqu"
    },
    {
        value: 654003,
        label: "阿勒泰地区",
        spell: "aletaidiqu"
    },
    {
        value: 810001,
        label: "香港",
        spell: "xianggang"
    }
];
Cities.sort((a, b) => {
    return a.spell.localeCompare(b.spell);
});
const transData = {};
Cities.forEach((item) => {
    item.QF = item.spell[0].toUpperCase();
    transData[item.QF] = transData[item.QF] || [];
    transData[item.QF].push(item);
});
export default transData;