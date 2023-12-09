function adjustLights(lights){
  const color = ["🟢","🔴"]
  let res = 0

  for(let [i, light] of lights.entries()){
    res += +(light == color[i%2])
  }

 return Math.min(res, lights.length - res)
}