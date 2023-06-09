import request from '@/utils/request.js'
// 获取全部游戏列表
export function getGameList (gameType) {
  return request({
    url: '/api/pmm/game/ranking/list',
    method: 'get',
    params: {
      gameType
    }
  })
}
// 获取游戏详情
export function getGameInfo (gameId) {
  return request({
    url: '/api/pmm/game/info',
    method: 'get',
    params: {
      gameId
    }
  })
}
// 获取游戏类型
export function getGameType (gameType) {
  return  request({
    url: '/api/pmm/system/dict',
    method: 'get',
    params: {
      dictTypes: 'game_type'
    }
  })
}
// 随机打乱数组
export function shuffle(arr) {
  let length = arr.length,
    randomIndex,
    temp;
  while (length) {
    randomIndex = Math.floor(Math.random() * (length--));
    temp = arr[randomIndex];
    arr[randomIndex] = arr[length];
    arr[length] = temp
  }
  return arr;
}
// 判断pc/移动端
export function determinePcOrMove() {
  if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
    //fontsize计算
    document.documentElement.style.fontSize = document.documentElement.clientWidth/320 * 16 +'px'
    return 1
  } else {
    return 2
  }
}
