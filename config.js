// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "心爱的奕璇",  // 同上...
        "今天是你的生日",
        "这是我们在一起的",
        "第四个生日！",
        "我见过你",
        "美腻的样子",
        "奇怪的样子",
        "可爱的样子",
        "都是我喜欢的样子",
        "生活的间隙载满你的气息",
        "水滩里的月亮映照两人的缱绻旖旎",
        "交会互放的光亮始贯如一",
        "我爱你！",
        "今年要吃好好的",
        "早睡早起，多锻炼身体",
        "然后才有力气写论文",
        "和想我！",
        "生日快乐，奕璇~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "送给我": "./imgs/songxinxin.jpeg",
        "心爱的奕璇": "./imgs/xinaide.jpg",
        "今天是你的生日": "./imgs/shengri.jpeg",
        "这是我们在一起的": "./imgs/zaiyiqi.png",
        "第四个生日！": "./imgs/disige.jpeg",
        "我见过你": "./imgs/yangzi.jpeg",
        "美腻的样子": "./imgs/meini.jpeg",
        "奇怪的样子": "./imgs/qiguai.png",
        "可爱的样子": "./imgs/keai.jpeg",
        "都是我喜欢的样子": "./imgs/songxinxin.jpeg",
        "生活的间隙载满你的气息": "./imgs/meini2.jpg",
        "水滩里的月亮映照两人的缱绻旖旎": "./imgs/meini3.jpg",
        "交会互放的光亮始贯如一": "./imgs/keai.jpg",
        "我爱你！": "./imgs/chuo.gif",
        "今年要吃好好的": "./imgs/chihaodian.jpeg",
        "喂饱饱的": "./imgs/weibao.jpeg",
        "然后才有力气写论文": "./imgs/nothing.jpg",
        "和想我！": "./imgs/wo.jpg",
        "生日快乐，奕璇~~": "./imgs/yangzi.jpeg"
    },
    
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "猜猜这是什么，点我开始哦",
        play: "猜不到？先来点音乐！",
        bannar_coming: "再搞点颜色",
        balloons_flying: "好像还少点东西？",
        cake_fadein: "那来个蛋糕？",
        light_candle: "顺便来个蜡烛？",
        wish_message: "生日快乐，奕璇mua～",
        story: "以及，其他想对你说的话"
    },

    // 结束语
    loveText: '爱你的陶先生~'
};
