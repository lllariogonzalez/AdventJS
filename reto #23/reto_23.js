function organizeChristmasDinner(dishes) {
  let map = {}
  let result = []
  
  for(let dish of dishes){
    let [d, ...ing] = dish
    for(let i of ing){
      map[i] ??= []
      map[i] = [[d], [...map[i], d]][+(!!map[i])]
    }
  }
  
  for(let i in map){
    result = [result, [...result, [i, ...map[i].sort()]]]
    [+(map[i].length >= 2)]
  }

  return result.sort()
}