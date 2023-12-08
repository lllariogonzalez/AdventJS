function findNaughtyStep(original, modified) {
  let sequences = [
    [original, modified],
    [modified, original]
  ]
  let [steps, reference] = sequences[+(original.length < modified.length)]
  let result = [""]
  let i = 0
  for(let step of steps){
    result[+(step !== reference[i])] ??= step
    i++
  }
  return result[+(steps!==reference)]
}