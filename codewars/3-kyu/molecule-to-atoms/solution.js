function parseMolecule(formula) {
  console.log('input:', formula)
  let i = 0

  function countAtoms(parent) {
    parent = parent || {}
    let atomRow = {}

    for (; i < formula.length; i++) {
      const currentVal = formula.charAt(i)
      const nextCharCode = formula.charCodeAt(i + 1)
      let bonusInc = 0

      if (currentVal === '(' || currentVal === '{' || currentVal === '[') {
        i++
        countAtoms(atomRow)
        continue
      }
      else if (currentVal === ')' || currentVal === '}' || currentVal === ']') {
        Object.keys(atomRow).map((molecule) => {
          atomRow[molecule] = atomRow[molecule] * formula.charAt(i + 1)
        })
        i++
        break
      }
      else if (isNaN(currentVal)) {
        if (nextCharCode >= 97 && nextCharCode <= 122) {
          atomRow[currentVal + formula.charAt(i + 1)] = 1
          i++
          continue
        }
        else atomRow[currentVal] = 1
      }

      if (!isNaN(currentVal)) {
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
