function checkIsValidCopy(original, copy) {
  let i = 0
  const arr = '#+:. '
  let ret = 1
  for (const a of original) {
    const b = copy[i]
    const ai = arr.indexOf(a)
    const bi = arr.indexOf(b)
    const found = ai !== -1 | bi !== -1
    const ok = a === b
      | (!found & b?.charCodeAt() - a?.charCodeAt() === 32)
      | (found & bi >= ai)

    ret *= ok
    i++
  }
  return !!ret
}