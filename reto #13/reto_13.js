function calculateTime(deliveries) {
  let seconds = -(7 * 3600)
  for (let delivery of deliveries) {
    let [hours, minutes, secs] = delivery.split(':')
    seconds += +hours * 3600 + +minutes * 60 + +secs
  }
  let sign = ['', '-'][+(seconds < 0)]
  seconds *= [1 , -1][+(seconds < 0)]
  let hours = ~~(seconds / 3600)
  hours = ('0' + hours).slice(-2);
  seconds %= 3600
  let minutes = ~~(seconds / 60)
  minutes = ('0' + minutes).slice(-2);
  seconds %= 60
  let secs = ('0' + seconds).slice(-2);
  
  return `${sign}${hours}:${minutes}:${secs}`
}