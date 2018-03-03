/*
* @Author: yuki
* @Date:   2018-01-02 16:37:15var express=
* @Last Modified by:   yukiiyong
* @Last Modified time: 2018-03-04 01:34:00
*/
var express = require('express')
var config = require('./config/index')
var axios = require('axios')

var port = process.env.PORT ||config.build.port

var app = express()

var apiRoutes = express.Router()

apiRoutes.get('/getDiscList',function(req,res){
	var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
	axios.get(url,{
		headers:{
			referer:'https://c.y.qq.com/',
			host:'c.y.qq.com'
		},
		params:req.query
	}).then((response) => {
		res.json((response.data))
	}).catch((e) => {
		console.log(e)
	})
})

apiRoutes.get('/lyric',function(req,res){
	var url= 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'

	axios.get(url,{
		headers:{
			referer:'https://c.y.qq.com/',
			host:'c.y.qq.com'
		},
		params:req.query
	}).then((response) => {
		var ret=resonse.data
		if(typeof ret === 'string'){
			var reg = /^\w+\(({[^\(\)]+}))$/

			var matches =response.data.match(reg)
			if(matches){
				ret=JSON.parse(matches[1])
			}
		}
		res.json(ret)
	}).catch((e) => {
		console.log(e)
	})
})

apiRoutes.get('/songlist', function(req, res) {
  const url='https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
  axios.get(url,{
    headers: {
      referer: 'https://c.y.qq.com/'
    },
    params: req.query
  }).then((response) => {
    var ret = response.data
    if(typeof ret === 'string') {
      var reg = /^\w+\(({[^()]})\)$/
      var matches = ret.match(reg)
      if(matches) {
        ret = JSON.parse(matches[1])
      }
    }
    res.json(ret)
  }).catch((e) => {
    console.log(e)
  })
})

app.use('/api',apiRoutes)

app.use(express.static('./dist'))

module.exports =app.listen(port,function(err){
	if(err){
		console.log(err)
		return 
	}
	console.log('Listening at http://localhost:'+ port +'\n')
})