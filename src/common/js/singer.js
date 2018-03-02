/*
* @Author: yuki
* @Date:   2018-01-06 23:09:47
* @Last Modified by:   yuki
* @Last Modified time: 2018-01-07 01:48:08
*/
export default class Singer{
	constructor({id, name}) {
		this.id = id
		this.name = name
		this.avatar = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${id}.jpg?max_age=2592000`
	}
}