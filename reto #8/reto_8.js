function organizeGifts(gifts) {
  let elements = gifts.match(/\d+\D/g)
  let result = ""
  for(let element of elements){
    let num = element.slice(0, -1)
    let gift = element.slice(-1)
    let pallets = num / 50 | 0;
    let boxes = num / 10 % 5 | 0;
    let bag = num % 10;
    result+=`[${gift}]`.repeat(pallets)+`{${gift}}`.repeat(boxes)
    result += "(".repeat(+(bag>0))+`${gift.repeat(bag)}`+")".repeat(+(bag>0))
  }
  return result
}