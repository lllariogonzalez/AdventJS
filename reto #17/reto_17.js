function optimizeIntervals(intervals) {
  let arrSortIndex = []

  for(const val of intervals ){
    const [start, _] = val;
    arrSortIndex[start] = val
  }

  let arrSort= arrSortIndex.filter(Boolean)
 

  let result = [arrSort[0]];

  for (const val of arrSort) {
    const [start, end] = val;
    const max = result[result.length - 1][1];

    result = [
              [ ...result.slice(0, result.length-1),
              [ result[result.length - 1][0], [end, max][+(max > end)] ]
              ],
              [...result, val]
            ][+(start > max)]

  }

  return result;
}
