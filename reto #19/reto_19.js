function revealSabotage(store) {
  const convert = {
    '':'', '':'',
    '0':' ', '1':'1', 
    '2':'2', '3':'3',
    '4':'4', '5':'5',
    '6':'6', '7':'7',
    '8':'8'
  }
  let i = 0
  for(const row of store){
    const indexs = [...row.join('').matchAll(/ /g)]
    for(const {index} of indexs){
        row[index] = 0
        row[index] += (store[i][index+1] == '*')
        row[index] += (store[i][index-1] == '*')
        row[index] += (store[i+1]?.[index] == '*') 
        row[index] += (store[i+1]?.[index-1] == '*')
        row[index] += (store[i+1]?.[index+1] == '*') 
        row[index] += (store[i-1]?.[index] == '*')
        row[index] += (store[i-1]?.[index-1] == '*')
        row[index] += (store[i-1]?.[index+1] == '*')
        row[index] = convert[row[index]]
    }
    i++
  }
  return store
}