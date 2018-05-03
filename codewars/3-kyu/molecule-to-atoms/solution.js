function parseMolecule(formula) {
  console.log('input:', formula)
  let i = 0

  function isLowerCase(index) {
    const char = formula.charCodeAt(index)
    if (char >= 97 && char <= 122) return true
    return false
  }

  function assignAtom(atom, num, object) {
    console.log(atom, num, init)
    if (object[atom]) {
      object[atom] = object[atom] + num
    }
    else object[atom] = num
  }

  function multiplyAtomBy(inc) {
    if (!isNaN(formula.charAt(inc + 1))) {
      i++
      if (!isNaN(formula.charAt(inc + 2))) {
        i++
        return formula.charAt(inc + 1) + '' + formula.charAt(inc + 2)
      }
      return formula.charAt(inc + 1)
    }
    if (isLowerCase(formula.charAt(inc + 1))) {
      if (!isNaN(formula.charAt(inc + 2))) {
        i++
        if (!isNaN(formula.charAt(inc + 3))) {
          i++
          return formula.charAt(inc + 2) + '' + formula.charAt(inc + 3)
        }
        return formula.charAt(inc + 2)
      }
    }
    return 1
  }

  function countAtoms(parent) {
    parent = parent || {}
    let atomRow = {}

    for (; i < formula.length; i++) {
      const currentVal = formula.charAt(i)
      const nextVal = formula.charAt(i + 1)
      const init = i

      if (currentVal === '(' || currentVal === '{' || currentVal === '[') {
        i++
        countAtoms(atomRow)
        continue
      }
      else if (currentVal === ')' || currentVal === '}' || currentVal === ']') {
        if (!isNaN(nextVal)) {
          Object.keys(atomRow).map((molecule) => {
            atomRow[molecule] = atomRow[molecule] * multiplyAtomBy(i)
          })
          i++
        }
        break
      }
      else if (isNaN(currentVal)) {
        if (isLowerCase(i + 1)) {
          assignAtom(formula.charAt(init) + formula.charAt(init + 1), multiplyAtomBy(i), atomRow)
          i++
          continue
        }
        else assignAtom(formula.charAt(init), multiplyAtomBy(i), atomRow)
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
