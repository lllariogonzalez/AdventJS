function maxGifts(houses) {
  let prevMax = 0;
  let currMax = 0;

  for (let h of houses) {
      let newMax =[currMax, prevMax + h][+(currMax < prevMax + h)] 
      prevMax = currMax;
      currMax = newMax;
  }

  return currMax;
}