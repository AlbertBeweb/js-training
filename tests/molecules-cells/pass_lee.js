const invert = (obj) =>
  Object.entries(obj).reduce((acc, cr) => {
    acc[cr[1]] = cr[0]
    return acc
  }, {})

const RNA = (dna) => {
  let result = ''
  dna.split('').forEach((ele) => {
    result += complements[ele]
  })
  return result
}

const DNA = (rna) => {
  let result = ''
  let b = invert(complements)
  rna.split('').forEach((ele) => {
    result += b[ele]
  })
  return result
}
