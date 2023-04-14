import request from '@/utils/request.js'
// 获取全部游戏列表
export function getGameList (gameType) {
  return request({
    url: '/api/pmm/game/ranking/list',
    method: 'get',
    params: {
      gameType: gameType || 1
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
