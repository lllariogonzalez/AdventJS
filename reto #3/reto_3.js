function findNaughtyStep(original, modified) {
  const o = original.length
  const m = modified.length
  const sequences = {
    [o]: [original, modified],
    [m]: [modified, original],
  }
  const [steps, reference] = sequences[Math.max(o, m)]
  return [...steps].find((step, i) => step !== reference[i]) ?? ''
}