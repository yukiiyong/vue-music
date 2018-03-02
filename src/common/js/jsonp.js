/*
* @Author: yuki
* @Date:   2017-12-31 23:43:07
* @Last Modified by:   yuki
* @Last Modified time: 2017-12-31 23:49:28
*/
import originJsonp from 'jsonp'

export default function jsonp(url,data,option){
	url +=(url.indexOf('?')<0?'?':'&') + param(data)

	return new Promise((resolve,reject)=>{
		originJsonp(url,option,(err,data)=>{
			if(!err){
				resolve(data)
			}else{
				reject(data)
			}
		})
	})
}

export function param(data){
	let url= ''
	for(var k in data){
		let value=data[k] !== undefined?data[k]:''
		url+='&'+k+'='+encodeURIComponent(value)
	}
	return url?url.substring(1):''
}