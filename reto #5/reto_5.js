function cyberReindeer(road, time) {
  let result = [road]
  road = road.replace("S", ".")
  let roadOpen = {
    5: road.replaceAll("|", "*")
  }
  let roadDelay = {
    "." : 1,
    '*' : 1,
    "|" : 0
  }
  let pos = 0
  while(result.length < time){
    road = roadOpen[result.length] ?? road
    pos += roadDelay[road[pos+1]]
    result.push(`${road.substring(0,pos)}S${road.substring(pos+1)}`)
  }
  return result
}