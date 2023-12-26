function distributeGifts(weights) {
  const averages = []

  for (const [i, row] of weights.entries()) {
    averages[i] = []

    for (const [j, col] of row.entries()) {
      const nextCol = row[j + 1]
      const prevCol = row[j - 1]
      const prevRow = weights[i - 1]?.[j]
      const nextRow = weights[i + 1]?.[j]
      let values = [col, prevCol, nextCol, prevRow, nextRow]
      let total = 0
      let divisor = 0
      
      for(let value of values){
        value ??= 0
        total += value
        divisor += +(value !== 0)
      }
   
      const average = Math.round(total / divisor)
      averages[i][j] = average
    }
  }

  return averages
}