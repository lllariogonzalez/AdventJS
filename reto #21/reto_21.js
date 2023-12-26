function findBalancedSegment(message) {
  const countMap = {};
  let maxLen = 0;
  let start = -1;
  let end = -1;
  let count = 0;

  countMap[0]= -1 

  for (let i of new Array(message.length).keys()) {

    count += [1,-1][+(message[i] === 0)]

    if (countMap[count]!==undefined) {
      const len = i - countMap[count];
      
      start = [start, countMap[count] + 1][+(len>maxLen)]
      end = [end, i][+(len>maxLen)]
      maxLen = [maxLen , len][+(len>maxLen)];

    } else {
      countMap[count] = i;
    }

  }

  return [[],[start, end]][+(start !== -1)]
  
}