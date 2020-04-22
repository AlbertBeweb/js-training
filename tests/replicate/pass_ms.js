const replica = (target, ...obj) => copyObject(Object.assign(target, ...obj))

const copyObject = (target) => {
  if (!Array.isArray(target)) {
    let res = {}
    for (let [key, value] of Object.entries(target)) {
      res[key] =
        typeof value === 'object' && value !== null ? replica(value) : value
    }
    return res
  } else if (Array.isArray(target)) {
    let ans = []
    for (let [key, value] of Object.entries(target)) {
      ans[key] =
        typeof value === Array.isArray && value !== null
          ? replica(value)
          : value
    }
    return ans
  }
}
