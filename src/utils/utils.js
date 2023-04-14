import request from '@/utils/request.js'
export function getGameList () {
  return request({
    url: '/api/pmm/game/ranking/list',
    method: 'get',
    params: {
      gameType: 1
    }
  })
}
