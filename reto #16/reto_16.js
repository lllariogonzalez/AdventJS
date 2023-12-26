function transformTree(tree) {
  const If =  [false]
  const index = [0, arguments[1]][+(!!arguments[1])]
  const value = tree[index]
  let base
  let res;
  If[+(value != null)] ??=(
    base = index*2,
    res = {
      value: value,
      left: transformTree(tree, base+1),
      right: transformTree(tree, base+2)
    }
  )
  res??=null
  return res
}