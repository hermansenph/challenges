function orderWeight(string) {
  let solution = ''
  let num = ''
  const numArray = []


  for (let i = 0; i < string.length; i++) {
    const val = string.charAt(i)
    if (val === ' ') {
      numArray.push(num)
      num = ''
    }
    else num = num + val
  }
  numArray.push(num)

  const weightObj = numArray.reduce((acc, val) => {
    let weight = 0
    for (let i = 0; i < val.length; i++) {
      weight = weight + parseInt(val.charAt(i))
    }
    if (!acc[weight]) acc[weight] = [val]
    else acc[weight].push(val)
    return acc
  }, {})

  Object.keys(weightObj).map((key, i, arr) => {
    weightObj[key].sort()
    weightObj[key].map((val) => {
      solution = solution + val
      solution = solution + ' '
    })
  })

  return solution.slice(0, -1)
}
