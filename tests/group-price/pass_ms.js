const groupPrice = (str) => {
  let matching = str.match(/(?:\$|\€|(?:USD))([0-9]+)\.([0-9]+)/g)
  let result = []
  if (matching == null) {
    return result
  }
  for(let el of matching) {
    let spl = el.match(/[USD|€|$]+|[0-9]+/g)
    let obj = {}
    obj['currency'] = spl[0]
    obj['amount'] = spl[1]
    obj['decimals'] = spl[2]
    result.push(obj)
  }

  return result
}