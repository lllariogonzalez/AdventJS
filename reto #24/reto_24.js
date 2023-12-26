function getStaircasePaths(steps, maxJump) {
  let path = arguments[2]
  path ??= []
  let result = []
  result = [result, [...result, path]][+(steps===0)]
  let min = Math.min(steps, maxJump)
  for (let jump of new Array(min).keys()) {
    jump++
    result.push(...getStaircasePaths(steps - jump, maxJump, [...path, jump]))
  }
  return result
}