const filterValues = (obj, filtering) =>
  Object.fromEntries(
    Object.entries(obj).filter((ele) => filtering(ele[1]) && ele)
  )

const mapValues = (obj, f) =>
  Object.fromEntries(
    Object.entries(obj).map((ele) => {
      ele[1] = f(ele[1])
      return ele
    })
  )

const reduceValues = (obj, f, init) =>
  init == undefined
    ? Object.values(obj).reduce(f)
    : Object.values(obj).reduce(f, init)
