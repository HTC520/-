import request from './index';

function getQuestions(page) {
  // return request('https://www.mxnzp.com/api/driver_exam/question/list', 'get', {
  //   app_id: 'qkmcqblclzopqhre',
  //   app_secret: 'TzR5QmU5TXArRkgyNldIY0JqaE1odz09',
  //   type: 1,
  //   page: page,
  //   rank: 1
  // })
  const res={"code":1,"msg":"数据返回成功！","data":{"page":1,"totalCount":3592,"totalPage":360,"limit":10,"list":[{"type":1,"id":30413,"rank":1,"title":"当驾驶车辆行经两侧有行人且有积水的路面时，按照防御性驾驶技术要求，要引人注意，鸣喇叭示意行人有车辆通过注意避让，要留有余地，预测行人可能做的行动，___。","op1":"A、加速通过","op2":"B、正常行驶","op3":"C、减速慢行","op4":"D、连续鸣喇叭","titleType":1,"titlePic":""},{"type":1,"id":30408,"rank":1,"title":"如图这种情况下，遇到路口对面有车辆直行，怎么做是正确的？","op1":"A、如果已经越过停止线就可以加速向左转弯","op2":"B、不用考虑对面车辆直接向左转弯","op3":"C、只要不影响对面车辆直行就可以向左转弯","op4":"D、等待对面车辆直行通过后再向左转弯","titleType":1,"titlePic":"https://sucimg.itc.cn/sblog/jd5YYHxo1HE"},{"type":1,"id":30402,"rank":1,"title":"以下哪个步骤目前无法通过“快处易赔”完成？","op1":"A、协商定责","op2":"B、保险报案","op3":"C、线上定损","op4":"D、拍照挪车","titleType":1,"titlePic":""},{"type":1,"id":30398,"rank":1,"title":"驾驶车辆正常行驶时，按照防御性驾驶技术要求，要放眼远方，对道路情况的处理要有预见性，在接近障碍时能___。","op1":"A、紧急制动能停车","op2":"B、急转向迅速绕过","op3":"C、迅速躲避不发生碰撞","op4":"D、平稳停车","titleType":1,"titlePic":""},{"type":1,"id":30395,"rank":1,"title":"机动车因故障在高速公路停车时，在后方多远距离放置故障警告标志？","op1":"A、150米以内","op2":"B、150米以外","op3":"C、100米以内","op4":"D、50米以内","titleType":1,"titlePic":""},{"type":1,"id":30388,"rank":1,"title":"吸毒，也称“药物滥用”，就是出于________ 目的，通过注射、口服、鼻吸或其他方式将毒品摄入人体的行为。","op1":"A、非医疗","op2":"B、治病","op3":"C、麻醉","op4":"D、交友","titleType":1,"titlePic":""},{"type":1,"id":30387,"rank":1,"title":"雾天驾驶机动车跟车行驶，以下做法错误的是什么？","op1":"A、加大两车间的距离","op2":"B、时刻注意前车刹车灯的变化","op3":"C、降低行车速度","op4":"D、鸣喇叭提醒前车提高车速，避免后车追尾","titleType":1,"titlePic":""},{"type":1,"id":30381,"rank":1,"title":"关于机动车轮胎胎压过高的危害，以下说法正确的是什么？","op1":"A、加速轮胎胎面中央的花纹局部磨损，缩短轮胎的使用寿命","op2":"B、耐轧性能下降，导致爆胎","op3":"C、轮胎的摩擦力、附着力降低，影响制动效果","op4":"D、导致方向盘震动、跑偏，使行驶的舒适性降低","titleType":3,"titlePic":""},{"type":1,"id":30377,"rank":1,"title":"行车中超越右侧刚停稳的出租车时，最有效的做法是什么？","op1":"A、长鸣喇叭","op2":"B、加速通过","op3":"C、减速行驶","op4":"D、预留横向安全距离","titleType":3,"titlePic":""},{"type":1,"id":30374,"rank":1,"title":"夜间驾驶机动车安全起步时，应怎样使用灯光？","op1":"A、开启远光灯","op2":"B、只能开启左转向灯","op3":"C、开启左转向灯、近光灯","op4":"D、开启危险报警闪光灯","titleType":1,"titlePic":""}]}};
  return new Promise((resolve) => {resolve(res)});
}

export default getQuestions;