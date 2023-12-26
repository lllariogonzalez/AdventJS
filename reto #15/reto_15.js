function autonomousDrive (store, movements){
  let w = store[0].length
  let mi = store.join("").indexOf("!")
  let si = (mi/w) | 0
  let sj = mi % w
  store[si] = store[si].substring(0, sj) + "." + store[si].substring(sj + 1)

  for (let movement of movements){
    const nextI = si -(movement === "U") + (movement === 'D')
    const nextJ = sj -(movement === "L") + (movement === "R")
    const canMove = +(store[nextI]?.[nextJ] === ".")
    si = [si, nextI][canMove]
    sj = [sj, nextJ][canMove]
  }

  store[si] = store[si].substring(0, sj) + "!" + store[si].substring(sj + 1)

  return store

}