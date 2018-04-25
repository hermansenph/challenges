function solution(number) {

  const maxNum = number - 1
  const fives = Math.floor(maxNum / 5)
  const threes = Math.floor(maxNum / 3)

  const multiplesArray = []
  for (let i = 1; i <= fives; i++) {
    const multiple = i * 5
    if (multiple % 15 !== 0) multiplesArray.push(multiple)
  }
  for (let i = 1; i <= threes; i++) multiplesArray.push(i*3)

  return multiplesArray.reduce((acc, val) => {return acc + val}, 0)
}
