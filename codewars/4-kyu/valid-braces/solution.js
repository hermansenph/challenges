function validBraces(braces){
  const braceQue = []
  let match

  function checkPair(match) {
    if (String.fromCharCode(match) === braceQue[braceQue.length -1]) {
      braceQue.pop()
      return true
    }
    return false
  }
  
  for (let i = 0; i < braces.length; i++) {
    const brace = braces.charAt(i)
    if (brace === '{' || brace === "[" || brace === "(") braceQue.push(brace)
    if (brace === ']' || brace === "}") {
      match = braces.charCodeAt(i) - 2
      if (checkPair(match) === false) return false
    }
    if (brace === ')') {
      match = braces.charCodeAt(i) - 1
      if (checkPair(match) === false) return false
    }
  }

  if (braceQue.length > 0) return false
  return true
}
