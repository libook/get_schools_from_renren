'use strict';

/**********初始化数据**********/
const provinces = [{
    "code": "_1",
    "name": "北京"
}, {
    "code": "_2",
    "name": "上海"
}, {
    "code": "_3",
    "name": "天津"
}, {
    "code": "_4",
    "name": "重庆"
}, {
    "code": "_5",
    "name": "黑龙江"
}, {
    "code": "_6",
    "name": "吉林"
}, {
    "code": "_7",
    "name": "辽宁"
}, {
    "code": "_8",
    "name": "山东"
}, {
    "code": "_9",
    "name": "山西"
}, {
    "code": "_10",
    "name": "陕西"
}, {
    "code": "_11",
    "name": "河北"
}, {
    "code": "_12",
    "name": "河南"
}, {
    "code": "_13",
    "name": "湖北"
}, {
    "code": "_14",
    "name": "湖南"
}, {
    "code": "_15",
    "name": "海南"
}, {
    "code": "_16",
    "name": "江苏"
}, {
    "code": "_17",
    "name": "江西"
}, {
    "code": "_18",
    "name": "广东"
}, {
    "code": "_19",
    "name": "广西"
}, {
    "code": "_20",
    "name": "云南"
}, {
    "code": "_21",
    "name": "贵州"
}, {
    "code": "_22",
    "name": "四川"
}, {
    "code": "_23",
    "name": "内蒙古"
}, {
    "code": "_24",
    "name": "宁夏"
}, {
    "code": "_25",
    "name": "甘肃"
}, {
    "code": "_26",
    "name": "青海"
}, {
    "code": "_27",
    "name": "西藏"
}, {
    "code": "_28",
    "name": "新疆"
}, {
    "code": "_29",
    "name": "安徽"
}, {
    "code": "_30",
    "name": "浙江"
}, {
    "code": "_31",
    "name": "福建"
//}, {
//    "code": "_32",
//    "name": "台湾"
//}, {
//    "code": "_33",
//    "name": "香港"
//}, {
//    "code": "_34",
//    "name": "澳门"
}];

let cities = {};

cities._1 = ["1101:北京市"];
cities._2 = ["3101:上海市"];
cities._3 = ["1201:天津市"];
cities._4 = ["5001:重庆市"];
cities._5 = ["2301:哈尔滨市", "2302:齐齐哈尔市", "2303:鸡西市", "2304:鹤岗市", "2305:双鸭山市", "2306:大庆市", "2307:伊春市", "2308:佳木斯市", "2309:七台河市", "2310:牡丹江市", "2311:黑河市", "2312:绥化市", "2327:大兴安岭地区"];
cities._6 = ["2201:长春市", "2202:吉林市", "2203:四平市", "2204:辽源市", "2205:通化市", "2206:白山市", "2207:松原市", "2208:白城市", "2224:延边朝鲜族自治州"];
cities._7 = ["2101:沈阳市", "2102:大连市", "2103:鞍山市", "2104:抚顺市", "2105:本溪市", "2106:丹东市", "2107:锦州市", "2108:营口市", "2109:阜新市", "2110:辽阳市", "2111:盘锦市", "2112:铁岭市", "2113:朝阳市", "2114:葫芦岛市"];
cities._8 = ["3701:济南市", "3702:青岛市", "3703:淄博市", "3704:枣庄市", "3705:东营市", "3706:烟台市", "3707:潍坊市", "3708:济宁市", "3709:泰安市", "3710:威海市", "3711:日照市", "3712:莱芜市", "3713:临沂市", "3714:德州市", "3715:聊城市", "3716:滨州市", "3717:菏泽市"];
cities._9 = ["1401:太原市", "1402:大同市", "1403:阳泉市", "1404:长治市", "1405:晋城市", "1406:朔州市", "1407:晋中市", "1408:运城市", "1409:忻州市", "1410:临汾市", "1411:吕梁市"];
cities._10 = ["6101:西安市", "6102:铜川市", "6103:宝鸡市", "6104:咸阳市", "6105:渭南市", "6106:延安市", "6107:汉中市", "6108:榆林市", "6109:安康市", "6110:商洛市"];
cities._11 = ["1301:石家庄市", "1302:唐山市", "1303:秦皇岛市", "1304:邯郸市", "1305:邢台市", "1306:保定市", "1307:张家口市", "1308:承德市", "1309:沧州市", "1310:廊坊市", "1311:衡水市"];
cities._12 = ["4101:郑州市", "4102:开封市", "4103:洛阳市", "4104:平顶山市", "4105:安阳市", "4106:鹤壁市", "4107:新乡市", "4108:焦作市", "4109:濮阳市", "4110:许昌市", "4111:漯河市", "4112:三门峡市", "4113:南阳市", "4114:商丘市", "4115:信阳市", "4116:周口市", "4117:驻马店市", "4118:济源市"];
cities._13 = ["4201:武汉市", "4202:黄石市", "4203:十堰市", "4205:宜昌市", "4206:襄樊市", "4207:鄂州市", "4208:荆门市", "4209:孝感市", "4210:荆州市", "4211:黄冈市", "4212:咸宁市", "4213:随州市", "4228:恩施土家族苗族自治州", "429004:仙桃市", "429005:潜江市", "429006:天门市", "429021:神农架林区"];
cities._14 = ["4301:长沙市", "4302:株洲市", "4303:湘潭市", "4304:衡阳市", "4305:邵阳市", "4306:岳阳市", "4307:常德市", "4308:张家界市", "4309:益阳市", "4310:郴州市", "4311:永州市", "4312:怀化市", "4313:娄底市", "4331:湘西土家族苗族自治州"];
cities._15 = ["4601:海口市", "4602:三亚市", "469001:五指山市", "469002:琼海市", "469003:儋州市", "469005:文昌市", "469006:万宁市", "469007:东方市", "469025:定安县", "469026:屯昌县", "469027:澄迈县", "469028:临高县", "469030:白沙黎族自治县", "469031:昌江黎族自治县", "469033:乐东黎族自治县", "469034:陵水黎族自治县", "469035:保亭黎族苗族自治县", "469036:琼中黎族苗族自治县"];
cities._16 = ["3201:南京市", "3202:无锡市", "3203:徐州市", "3204:常州市", "3205:苏州市", "3206:南通市", "3207:连云港市", "3208:淮安市", "3209:盐城市", "3210:扬州市", "3211:镇江市", "3212:泰州市", "3213:宿迁市"];
cities._17 = ["3601:南昌市", "3602:景德镇市", "3603:萍乡市", "3604:九江市", "3605:新余市", "3606:鹰潭市", "3607:赣州市", "3608:吉安市", "3609:宜春市", "3610:抚州市", "3611:上饶市"];
cities._18 = ["4401:广州市", "4402:韶关市", "4403:深圳市", "4404:珠海市", "4405:汕头市", "4406:佛山市", "4407:江门市", "4408:湛江市", "4409:茂名市", "4412:肇庆市", "4413:惠州市", "4414:梅州市", "4415:汕尾市", "4416:河源市", "4417:阳江市", "4418:清远市", "4419:东莞市", "4420:中山市", "4451:潮州市", "4452:揭阳市", "4453:云浮市"];
cities._19 = ["4501:南宁市", "4502:柳州市", "4503:桂林市", "4504:梧州市", "4505:北海市", "4506:防城港市", "4507:钦州市", "4508:贵港市", "4509:玉林市", "4510:百色市", "4511:贺州市", "4512:河池市", "4513:来宾市", "4514:崇左市"];
cities._20 = ["5301:昆明市", "5303:曲靖市", "5304:玉溪市", "5305:保山市", "5306:昭通市", "5307:丽江市", "5308:普洱市", "5309:临沧市", "5323:楚雄彝族自治州", "5325:红河哈尼族彝族自治州", "5326:文山壮族苗族自治州", "5328:西双版纳傣族自治州", "5329:大理白族自治州", "5331:德宏傣族景颇族自治州", "5333:怒江傈僳族自治州", "5334:迪庆藏族自治州"];
cities._21 = ["5201:贵阳市", "5202:六盘水市", "5203:遵义市", "5204:安顺市", "5222:铜仁地区", "5223:黔西南布依族苗族自治州", "5224:毕节地区", "5226:黔东南苗族侗族自治州", "5227:黔南布依族苗族自治州"];
cities._22 = ["5101:成都市", "5103:自贡市", "5104:攀枝花市", "5105:泸州市", "5106:德阳市", "5107:绵阳市", "5108:广元市", "5109:遂宁市", "5110:内江市", "5111:乐山市", "5113:南充市", "5114:眉山市", "5115:宜宾市", "5116:广安市", "5117:达州市", "5118:雅安市", "5119:巴中市", "5120:资阳市", "5132:阿坝藏族羌族自治州", "5133:甘孜藏族自治州", "5134:凉山彝族自治州"];
cities._23 = ["1501:呼和浩特市", "1502:包头市", "1503:乌海市", "1504:赤峰市", "1505:通辽市", "1506:鄂尔多斯市", "1507:呼伦贝尔市", "1508:巴彦淖尔市", "1509:乌兰察布市", "1522:兴安盟", "1525:锡林郭勒盟", "1529:阿拉善盟"];
cities._24 = ["6401:银川市", "6402:石嘴山市", "6403:吴忠市", "6404:固原市", "6405:中卫市"];
cities._25 = ["6201:兰州市", "6202:嘉峪关市", "6203:金昌市", "6204:白银市", "6205:天水市", "6206:武威市", "6207:张掖市", "6208:平凉市", "6209:酒泉市", "6210:庆阳市", "6211:定西市", "6212:陇南市", "6229:临夏回族自治州", "6230:甘南藏族自治州"];
cities._26 = ["6301:西宁市", "6321:海东地区", "6322:海北藏族自治州", "6323:黄南藏族自治州", "6325:海南藏族自治州", "6326:果洛藏族自治州", "6327:玉树藏族自治州", "6328:海西蒙古族藏族自治州"];
cities._27 = ["5401:拉萨市", "5421:昌都地区", "5422:山南地区", "5423:日喀则地区", "5424:那曲地区", "5425:阿里地区", "5426:林芝地区"];
cities._28 = ["6501:乌鲁木齐市", "6502:克拉玛依市", "6521:吐鲁番地区", "6522:哈密地区", "6523:昌吉回族自治州", "6527:博尔塔拉蒙古自治州", "6528:巴音郭楞蒙古自治州", "6529:阿克苏地区", "6530:克孜勒苏柯尔克孜自治州", "6531:喀什地区", "6532:和田地区", "6540:伊犁哈萨克自治州", "6542:塔城地区", "6543:阿勒泰地区", "659001:石河子市", "659002:阿拉尔市", "659003:图木舒克市", "659004:五家渠市"];
cities._29 = ["3401:合肥市", "3402:芜湖市", "3403:蚌埠市", "3404:淮南市", "3405:马鞍山市", "3406:淮北市", "3407:铜陵市", "3408:安庆市", "3410:黄山市", "3411:滁州市", "3412:阜阳市", "3413:宿州市", "3414:巢湖市", "3415:六安市", "3416:亳州市", "3417:池州市", "3418:宣城市"];
cities._30 = ["3301:杭州市", "3302:宁波市", "3303:温州市", "3304:嘉兴市", "3305:湖州市", "3306:绍兴市", "3307:金华市", "3308:衢州市", "3309:舟山市", "3310:台州市", "3311:丽水市"];
cities._31 = ["3501:福州市", "3502:厦门市", "3503:莆田市", "3504:三明市", "3505:泉州市", "3506:漳州市", "3507:南平市", "3508:龙岩市", "3509:宁德市"];
//cities._32 = ["7101:台北市", "7102:高雄市", "7103:基隆市", "7104:台中市", "7105:台南市", "7106:新竹市", "7107:嘉义市"];
//cities._33 = ["8101:中西区", "8102:湾仔区", "8103:东区", "8104:南区", "8105:油尖旺区", "8106:深水埗区", "8107:九龙城区", "8108:黄大仙区", "8109:观塘区", "8110:荃湾区", "8111:葵青区", "8112:沙田区", "8113:西贡区", "8114:大埔区", "8115:北区", "8116:元朗区", "8117:屯门区", "8118:离岛区"];
//cities._34 = ["8200:澳门"];

//provinces省
//cities市
//districts县


/**********引用modules**********/
const mongoose = require('mongoose');
const jsdom = require('jsdom').jsdom;
const async = require('async');
const http = require('http');
const co = require('co');

/**********初始化数据库**********/
const Schema = mongoose.Schema;

const provinceSchema = mongoose.Schema({
    name: {
        type: String,
        index: true
    },
    code: {
        type: String,
        index: true
    },
    cities: [
        {
            name: {
                type: String,
                index: true
            },
            code: {
                type: String,
                index: true
            },
            districts: [
                {
                    name: {
                        type: String,
                        index: true
                    },
                    code: {
                        type: String,
                        index: true
                    },
                    schools: [
                        {
                            type: Schema.Types.ObjectId,
                            ref: "School",
                            index: true
                        }
                    ]

                }
            ]
        }
    ]
});

const schoolSchema = mongoose.Schema({
    _id: {
        type: Schema.Types.ObjectId,
        default: function () {
            return new mongoose.Types.ObjectId
        }
    },
    name: {
        type: String,
        required: true
    },
    official: {
        type: Boolean,
        default: false
    }
});
let Province = mongoose.model('Province', provinceSchema);
let School = mongoose.model('School', schoolSchema);

mongoose.connect('mongodb://localhost/schools');

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

let schoolCount = 0;
let provinceCount = 0;

db.once('open', function callback() {
    console.info("Connected!");

    let req = function (code) {
        return new Promise(function (resolve, reject) {
            let req = http.request({
                method: 'GET',
                headers: {},
                body: '',
                host: 'support.renren.com',
                port: 80, //443 if protocol = https
                path: '/juniorschool/' + code + '.html'
            }, (res)=> {
                let data = 0;
                res.setEncoding('utf8');
                res.on('data', (chunk) => {
                    data += chunk;
                });
                res.on('end', () => {
                    resolve(data);
                });
            });

            req.on('error', (e) => {
                reject(e);
            });

            // req.write(postData);
            req.end();
        });
    };

    /**********获取省级行政单位**********/
    {
        for (let pIndex in provinces) {
            provinces[pIndex].cities = cities[provinces[pIndex].code];
            console.info(provinces[pIndex].name);

            /**********获取地级行政单位**********/
            for (let cIndex in provinces[pIndex].cities) {
                let tempC = provinces[pIndex].cities[cIndex].split(':');
                provinces[pIndex].cities[cIndex] = {};
                provinces[pIndex].cities[cIndex].code = tempC[0];
                provinces[pIndex].cities[cIndex].name = tempC[1];
                //console.info('    ' + provinces[pIndex].cities[cIndex].name);

                /**********获取县区级行政单位**********/
                provinces[pIndex].cities[cIndex].districts = [];

                req(provinces[pIndex].cities[cIndex].code).then(function (response) {
                    jsdom.env(
                        response.toString(),
                        function (err, window) {
                            let $ = require('jquery')(window);

                            //要操作的DOM初始化完毕，并声称jquery对象$

                            let districtsLis = $('#schoolCityQuList').children('li');
                            for (let dIndex = 0; dIndex < districtsLis.length; dIndex++) {
                                let districtAs = $(districtsLis[dIndex]).children('a');
                                let district = {};
                                district.name = $(districtAs).text();
                                district.code = $(districtAs).attr('onclick').replace(/[^0-9]/igm, '');//<a href="#highschool_anchor" onclick="SchoolComponent.tihuan('city_qu_130202')">路南区</a>
                                //console.info('        ' + district.name);

                                /**********获取所有学校**********/
                                district.schools = [];
                                let schoolsLis = $('#city_qu_' + district.code).children('li');
                                for (let sIndex = 0; sIndex < schoolsLis.length; sIndex++) {
                                    let schoolAs = $(schoolsLis[sIndex]).children('a');
                                    let school = {};
                                    school.name = $(schoolAs).text();
                                    school.code = $(schoolAs).attr('href');
                                    school._id = new mongoose.Types.ObjectId;
                                    school.official = true;
                                    district.schools.push(school._id);
                                    console.info('schoolCount:' + (++schoolCount));
                                    new School(school).save(function (err) {
                                        if (err) return console.error(err);
                                        console.info('schoolCount:' + (--schoolCount));
                                    });
                                    //console.info('            ' + school.name);
                                }

                                provinces[pIndex].cities[cIndex].districts.push(district);
                            }
                        }
                    );
                }).catch((error)=> {
                    console.error(error.stack)
                });
            }

            console.info('provinceCount:' + (++provinceCount));
            let province = new Province(provinces[pIndex]);
            province.save().catch((error)=> {
                console.error(error.stack)
            });
        }
        console.info('OK!');
    }


    //School.create(provinces);
    //mongoose.connection.close();
});
