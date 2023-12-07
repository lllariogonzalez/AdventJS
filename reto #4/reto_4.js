function decode(message){
  do{
    let startIndex = message.lastIndexOf("(")
    let endIndex = message.indexOf(")", startIndex)
    let start = message.substring(0, startIndex)
    let middle = [...message.slice(startIndex+1, endIndex)].reverse()
    let end = message.slice(endIndex + 1, message.length)
    message = start + middle.join('') + end
  }while(message.includes('('))
  return message
}