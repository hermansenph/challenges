function parseMolecule(formula) {
  console.log('input:', formula)
  let i = 0

  function isLowerCase(index) {
    const char = formula.charCodeAt(index)
    if (char >= 97 && char <= 122) return true
    return false
  }

  function countAtoms(parent) {
    parent = parent || {}
    let atomRow = {}

    for (; i < formula.length; i++) {
      const currentVal = formula.charAt(i)
      const nextVal = formula.charAt(i + 1)
      let bonusInc = 0

      if (currentVal === '(' || currentVal === '{' || currentVal === '[') {
        i++
        countAtoms(atomRow)
        continue
      }
      else if (currentVal === ')' || currentVal === '}' || currentVal === ']') {
        Object.keys(atomRow).map((molecule) => {
          atomRow[molecule] = atomRow[molecule] * nextVal
        })
        i++
        break
      }
      else if (isNaN(currentVal)) {
        if (isLowerCase(i + 1)) {
          atomRow[currentVal + nextVal] = 1
          i++
          continue
        }
        else atomRow[currentVal] = 1
      }

      if (!isNaN(currentVal)) {
        if (!isNaN(nextVal)) {
          let molecule = formula.charAt(i - 1)
          if (isLowerCase(i - 1)) {
            molecule = formula.charAt(i - 2) + formula.charAt(i - 1)
            atomRow[molecule] = atomRow[molecule] * (currentVal + '' + nextVal)
          }
          else atomRow[molecule] = atomRow[molecule] * (currentVal + '' + nextVal)
          i++
          continue
        }
        atomRow[formula.charAt(i - 1)] = atomRow[formula.charAt(i - 1)] * currentVal
      }

    }

    let solutionKeys = Object.keys(parent)
    Object.keys(atomRow).map((molecule) => {
      if (parent[molecule]) parent[molecule] = parent[molecule] + atomRow[molecule]
      else parent[molecule] = atomRow[molecule]
    })
    return parent
  }
  const solution = countAtoms()
  console.log('solution:', solution)
  return solution
}
