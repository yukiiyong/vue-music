/*
* @Author: yuki
* @Date:   2017-12-31 19:54:17
* @Last Modified by:   yuki
* @Last Modified time: 2018-02-13 01:31:30
*/
export function hasClass(el,className){
	let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
	return reg.test(el.className)
}

export function addClass(el, className){
	if(hasClass(el, className)) {
		return 
	}
	let newClass = el.className.split(' ')
	newClass.push(className)
	el.className = newClass.join(' ')
}
export function getData(el, name,val) {
	const prefix = 'data-'
	if(val) {
		return el.setAttribute(prefix + name, val)
	}
	return el.getAttribute(prefix + name)
}

let elementStyle = document.createElement('div').style

// 获取style的前缀
let vendor = (() => {
	let transformNames = {
		webkit: 'webkitTransform',
		Moz: 'MozTransform',
		O: 'OTransform',
		ms: 'msTransform',
		standard: 'transform'
	}

	for(let key in transformNames) {
		if(elementStyle[transformNames[key]] !== undefined) {
			return key
		}
	}

  return false
})()

export function prefixStyle(style) {
  if(vendor === false) {
    return false
  }

  if(vendor === 'standard') {
    return style
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}