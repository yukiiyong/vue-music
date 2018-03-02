/*
* @Author: yuki
* @Date:   2018-02-06 01:25:49
* @Last Modified by:   yuki
* @Last Modified time: 2018-02-25 16:48:56
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
	favoriteList: []
}

export default state