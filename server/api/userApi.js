var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
//封装返回函数
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

//表单留言
router.post("/btnform",(req,res) =>{
	 var sql = $sql.form.add;
	 var params=req.body;
	 console.log(params.time)
	 conn.query(sql,[params.name,params.tel,params.ly,params.time],function(err,result){
	 	 if(err){
	 	 	console.log(err)
	 	 }
	 	 if(result){
	 	 	res.send("1")
	 	 }
	 })
})


// 增加用户接口
router.post('/addUser', (req, res) => {
    var sql_name = $sql.user.select_name
    var sql = $sql.user.add;
    var params = req.body;
    conn.query(sql_name,params.username,function(err,result) {
        if(err) {
            console.log(err)
        }
        if(result[0]===undefined) {
            conn.query(sql,[params.username,params.password], function(err, result) {
                if(err) {
                    console.log(err)
                }
                if(result) {
                    res.send("1")
                }
            })
        }else {
            res.send('-1')    //当前注册username与数据库重复时，data返回-1
        }
    })
    
});

//查询用户接口
router.post("/selectUser",(req,res) => {
	var sql_name=$sql.user.select_name;
	var sql_password=$sql.user.select_password;
	var params=req.body;
	conn.query(sql_name,params.username,function(err,result){ //首先验证用户名是否存在
		if(err){
			console.log(err)
		}
		if(result[0] === undefined){  //用户名不存在
			res.send("-1") //查询不出来就返回-1
		}else{   //如果存在，再验证密码是否正确
			conn.query(sql_password,params.password,function(err,result){
				if(err){
					console.log(err)
				}
				console.log(result)
				if(result[0] === undefined){ //密码错误
					 res.send("0")
				}else{
					res.send("1")
//					console.log(res,result)
//					jsonWrite(res,result)
				}
			})
		}
	})
})




module.exports = router;