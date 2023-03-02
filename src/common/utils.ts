import * as type from './utils.d'

/**
 * 
 * @param time 
 */
export const lastTime = function (time: string | number | Date): type.lastTime|string {
  let day = 0, hour = 0, min = 0, sec = 0;
  const t = new Date(time).getTime()
  const now = new Date().getTime()
  if(t<now){
    return '倒计时目标时间不宜小于当前时间'
  }
  const min_one = 1000 * 60
  const hour_one = min_one * 60
  const day_one = hour_one * 24
  day = (t - now) % day_one
  hour = (t - now) % hour_one
  min = (t - now) % min_one
  sec = (t - now) % 1000
  return {
    day: day,
    hour: hour,
    min: min,
    sec: sec
  }
}