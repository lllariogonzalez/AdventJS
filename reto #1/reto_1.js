function findFirstRepeated(gifts) {
  let repeated = gifts.filter((id, index) => gifts.indexOf(id) !== index)
  repeated.push(-1)
  return repeated[0]
}