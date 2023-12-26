function findFirstRepeated(gifts) {
  let repeated = gifts.find((gift, index) => gifts.indexOf(gift) !== index)
  repeated ??= -1
  return repeated
}