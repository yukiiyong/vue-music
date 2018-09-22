/*
* @Author: yuki
* @Date:   2018-02-06 01:51:24
* @Last Modified by:   yuki
* @Last Modified time: 2018-02-15 01:24:43
*/
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

export function shuffle(arr) {
	let _arr = arr.slice()
  console.log('shuffle'+_arr.length)
  for(let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
}

export function debounce(func, delay) {
	let timer

	return function(...args) {
		if(timer) {
			clearTimeout()
		}
		timer = setTimeout(() => {
			func.apply(this, args)
		}, delay)
	}
}