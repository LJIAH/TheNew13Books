var express = require('express');
console.log('新的佛教十三经网即将诞生!');
var fs = require('fs');

var app = express();

//配置视图引擎
app.set('view engine','ejs');

//让服务器识别外部样式表
app.use('/assets',express.static('assets'));

app.get('/',function (req,res) {
    res.render('index');
});

app.listen(3000);

//导入sutras经书数据
var fhj1 = fs.readFileSync(__dirname + '/sutras/fhj1.txt','utf8');
var fhj2 = fs.readFileSync(__dirname + '/sutras/fhj2.txt','utf8');
var fhj3 = fs.readFileSync(__dirname + '/sutras/fhj3.txt','utf8');
var fhj4 = fs.readFileSync(__dirname + '/sutras/fhj4.txt','utf8');
var fhj5 = fs.readFileSync(__dirname + '/sutras/fhj5.txt','utf8');
var fhj6 = fs.readFileSync(__dirname + '/sutras/fhj6.txt','utf8');
var fhj7 = fs.readFileSync(__dirname + '/sutras/fhj7.txt','utf8');
var hyj = fs.readFileSync(__dirname + '/sutras/hyj.txt','utf8');
var jgj = fs.readFileSync(__dirname + '/sutras/jgj.txt','utf8');
var jgmj1 = fs.readFileSync(__dirname + '/sutras/jgmj1.txt','utf8');
var jgmj2 = fs.readFileSync(__dirname + '/sutras/jgmj2.txt','utf8');
var jgmj3 = fs.readFileSync(__dirname + '/sutras/jgmj3.txt','utf8');
var jgmj4 = fs.readFileSync(__dirname + '/sutras/jgmj4.txt','utf8');
var jgmj5 = fs.readFileSync(__dirname + '/sutras/jgmj5.txt','utf8');
var jsmj1 = fs.readFileSync(__dirname + '/sutras/jsmj1.txt','utf8');
var jsmj2 = fs.readFileSync(__dirname + '/sutras/jsmj2.txt','utf8');
var jsmj3 = fs.readFileSync(__dirname + '/sutras/jsmj3.txt','utf8');
var lqj1 = fs.readFileSync(__dirname + '/sutras/lqj1.txt','utf8');
var lqj2 = fs.readFileSync(__dirname + '/sutras/lqj2.txt','utf8');
var lqj3 = fs.readFileSync(__dirname + '/sutras/lqj3.txt','utf8');
var lqj4 = fs.readFileSync(__dirname + '/sutras/lqj4.txt','utf8');
var lyj1 = fs.readFileSync(__dirname + '/sutras/lyj1.txt','utf8');
var lyj2 = fs.readFileSync(__dirname + '/sutras/lyj2.txt','utf8');
var lyj3 = fs.readFileSync(__dirname + '/sutras/lyj3.txt','utf8');
var lyj4 = fs.readFileSync(__dirname + '/sutras/lyj4.txt','utf8');
var lyj5 = fs.readFileSync(__dirname + '/sutras/lyj5.txt','utf8');
var lztj = fs.readFileSync(__dirname + '/sutras/lztj.txt','utf8');
var ssezj = fs.readFileSync(__dirname + '/sutras/ssezj.txt','utf8');
var wlsj1 = fs.readFileSync(__dirname + '/sutras/wlsj1.txt','utf8');
var wlsj2 = fs.readFileSync(__dirname + '/sutras/wlsj2.txt','utf8');
var wmjj1 = fs.readFileSync(__dirname + '/sutras/wmjj1.txt','utf8');
var wmjj2 = fs.readFileSync(__dirname + '/sutras/wmjj2.txt','utf8');
var wmjj3 = fs.readFileSync(__dirname + '/sutras/wmjj3.txt','utf8');
var xj = fs.readFileSync(__dirname + '/sutras/xj.txt','utf8');
var yjj = fs.readFileSync(__dirname + '/sutras/yjj.txt','utf8');

var sutras = {
    "fhj1": fhj1,
    "fhj2": fhj2,
    "fhj3": fhj3,
    "fhj4": fhj4,
    "fhj5": fhj5,
    "fhj6": fhj6,
    "fhj7": fhj7,
    "hyj": hyj,
    "jgj": jgj,
    "jgmj1": jgmj1,
    "jgmj2": jgmj2,
    "jgmj3": jgmj3,
    "jgmj4": jgmj4,
    "jgmj5": jgmj5,
    "jsmj1": jsmj1,
    "jsmj2": jsmj2,
    "jsmj3": jsmj3,
    "lqj1": lqj1,
    "lqj2": lqj2,
    "lqj3": lqj3,
    "lqj4": lqj4,
    "lyj1": lyj1,
    "lyj2": lyj2,
    "lyj3": lyj3,
    "lyj4": lyj4,
    "lyj5": lyj5,
    "lztj": lztj,
    "ssezj": ssezj,
    "wlsj1": wlsj1,
    "wlsj2": wlsj2,
    "wmjj1": wmjj1,
    "wmjj2": wmjj2,
    "wmjj3": wmjj3,
    "xj": xj,
    "yjj": yjj
};



//传递路由参数
app.get('/sutra/:id',function (req,res,next) {
    //javascript中的数组不支持用数字以外的标识符做为数组的下标，
    // 但是可以用对象来实现和php中关联数组相似的效果：
    var routid = req.params.id;
    res.render('sutra',{content:sutras[routid]});
});