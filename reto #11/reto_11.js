function getIndexsForPalindrome(word) {

  const arrWord = word.split('')
  let index = arrWord.findIndex((letter,i)=>letter !== word.at(-(i+1)))
  let find = [null, []][(+(index === -1))]

  for(let [i, value] of arrWord.entries()){

    let arr = [...arrWord]
    let isPalindrome= (l,i)=>l === arr[arr.length-1-i]
    arr[i] = arrWord[index]
    arr[index] = value
    find ??= [null, [[i,index],[index,i]][+(i>index)]]
    [+(arr.every(isPalindrome))]

    arr = [...arrWord]
    let index2 = word.length-1-index
    arr[i] = arrWord[index2]
    arr[index2] = value
    find ??= [null, [[i,index2],[index2,i]][+(i>index2)]]
    [+(arr.every(isPalindrome))]
  }

  return find
}