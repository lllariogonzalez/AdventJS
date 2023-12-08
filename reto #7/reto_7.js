function drawGift(size, symbol) {
	let a = [];
  let b = [];

  let bucle = ' '.repeat(Math.max(0, size-2)).split("")
	let start = ' '.repeat(size-1)+"#".repeat(size)
  let middle = "#".repeat(size)+symbol.repeat(Math.max(0, size-2))+"#"+"\n"
  let end = '#'.repeat(size)
  
  a.push(start)
  b.unshift(end)

  for(let i of bucle.keys()){
    let inner = "#"+symbol.repeat(size-2)+"#"+symbol.repeat(i)+"#"
    a.push(" ".repeat(start.length-size-i-1)+inner)
    b.unshift(inner)
  }

  a.push(middle)
  let result = [a.join('\n')+b.join('\n')+"\n", "#\n"][+(size === 1)]
  return result
}