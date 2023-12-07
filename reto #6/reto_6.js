function maxDistance(movements) {
  const a = movements.match(/>/g)?.length ?? 0
  const b = movements.match(/</g)?.length ?? 0
  const c = movements.length - a - b;
  return Math.abs(a - b) + c
}