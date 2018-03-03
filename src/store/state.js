/*
* @Author: yuki
* @Date:   2018-02-06 01:25:49
* @Last Modified by:   yukiiyong
* @Last Modified time: 2018-03-03 19:40:40
*/
import {playMode} from 'common/js/config'
import {loadSearch, loadPlay, loadFavorite} from 'common/js/cache'

const state= {
	singer: {},
	playing: false,
	fullScreen: false,
	playlist: [],
	sequenceList: [],
	mode: playMode.sequence,
	currentIndex: -1,
	disc: {},
	topList: {},
	searchHistory: loadSearch(),
	playHistory: loadPlay(),
	favoriteList: loadFavorite()
}

export default state