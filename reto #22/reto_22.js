function compile(code) {
  let counter = 0
  let ret = null
  let salt = null
  for (let i of new Array(code.length).keys()){
    i+=[0, salt][+(salt!==null)]
    counter+= +(code[i]==='+')
    counter-= +(code[i]==='-')
    counter*= [1,2][+(code[i]==='*')]
    ret=[ret, counter][+(code[i]==="%")]
    counter+=[0,0,counter-ret][+(ret!=null)+ +(code[i]==='<')]
    salt ??= [null, null, code.indexOf('?')-i][+(counter<=0) + +(code[i]==='¿')]
  }
  return counter
}