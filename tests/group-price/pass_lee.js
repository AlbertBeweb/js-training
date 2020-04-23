const groupPrice = (str) => f(str.match(/(?:\$|\€|(?:USD))([0-9]+)\.([0-9]+)/g))

const f = (a) =>
  a
    ? a.reduce((acc, cr) => {
        let obj = {}
        let spl = cr.match(/[USD|€|$]+|[0-9]+/g)
        obj['currency'] = spl[0]
        obj['amount'] = spl[1]
        obj['decimals'] = spl[2]
        acc.push(obj)
        return acc
      }, [])
    : []
