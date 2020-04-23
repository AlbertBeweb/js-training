/*
## Group Price

### Instructions

Create a `groupPrice` function, that can find a price in a given string.
The function has to return an array of objects with the the price proprieties
If there is no match the function returns an empty array.

Example:
  "The price is $12.31"
Expected output:
const output = [
  {
    currency: '$',
    amount: '12',
    decimals: '31',
  },
]

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)
t(({ eq }) => eq(groupPrice('The price of the cereals is $4.00 here, in Portugal it is €5.45.'),$test1))
t(({ eq }) => eq(groupPrice('the total is USD19.98'), $test2))
t(({ eq }) => eq(groupPrice('excuse me sir it is missing $0.45'), $test3))
t(({ eq }) => eq(groupPrice('excuse me sir here is your change USD99.20'), $test4))
t(({ eq }) => eq(groupPrice('this, $0.32, $4.44, €42.43, are a match'), $test0))
t(({ eq }) => eq(groupPrice('this, 0.32 not a match'), []))
Object.freeze(tests)

const $test0 = [
  {
    currency: '$',
    amount: '0',
    decimals: '32',
  },
  {
    currency: '$',
    amount: '4',
    decimals: '44',
  },
  {
    currency: '€',
    amount: '42',
    decimals: '43',
  },
]

const $test1 = [
  {
    amount: '4',
    decimals: '00',
    currency: '$',
  },
  {
    amount: '5',
    decimals: '45',
    currency: '€',
  },
]

const $test2 = [
  {
    amount: '19',
    decimals: '98',
    currency: 'USD',
  },
]

const $test3 = [
  {
    amount: '0',
    decimals: '45',
    currency: '$',
  },
]

const $test4 = [
  {
    amount: '99',
    decimals: '20',
    currency: 'USD',
  },
]
