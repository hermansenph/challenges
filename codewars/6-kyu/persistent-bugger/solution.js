function persistance(num) {

  let newNum = num.toString()
  let i = 0

  if (newNum.length === 1) return i

  for (; newNum.length > 1; i++) {
    let product = 1
    for (let e = 0; e < newNum.length; e++) product = newNum.charAt(e) * product
    newNum = product.toString()
  }

  return i
}
