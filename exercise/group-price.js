/*
## Group Price

### Instructions

Create a `groupPrice` function, that can find a price in a given string.
The function has to return an array with the full match of the price ($43.99) 
and the groups of that price, the first group(43) and the second group (99).
If there is no match the function returns an empty array.

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)
t(({ eq }) =>
  eq(groupPrice('The price of the cereals is $4.00. '), ['$4.00', '4', '00'])
)
t(({ eq }) => eq(groupPrice('the total is USD19.98'), ['USD19.98', '19', '98']))
t(({ eq }) =>
  eq(groupPrice('excuse me sir it is missing $0.45'), ['$0.45', '0', '45'])
)
t(({ eq }) =>
  eq(groupPrice('excuse me sir here is your change $99.20'),['$99.20', '99', '20'])
)
t(({ eq }) => eq(groupPrice('this, 0.32, is not a match'), []))

Object.freeze(tests)
