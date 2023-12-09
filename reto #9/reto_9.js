function adjustLights(lights){
  const color = ["🟢","🔴"]
  let adjust = 0

  for(let [i, light] of lights.entries()){
    adjust += +(light == color[i%2])
  }

 return Math.min(adjust, lights.length - adjust)
}