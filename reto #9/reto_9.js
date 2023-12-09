function adjustLights(lights) {
  let start = ""
  let adjust = 0;

  for (let l of lights) {
      adjust += +(l==start)
      start = [l, ""][+(l==start)]
    }

  return adjust
}