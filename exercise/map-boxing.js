/*
## Map-Boxing

### Instructions

1) Fix the `showAsciiValue` function.
The function takes a string such as " A  " and returns its ascii value (in this case 65)

Here is the function `showAsciiValue` to complete:

```
const showAsciiValue = (str) =>
  Box(str)
    .map((str) => str.trim())
    .map((char) => char.charCodeAt())

```

2) Fix the `upperCaseLetter` function.
The function takes a string such as " a  " and returns the upper case letter contained
in the string (in this case `A`)

Here is the function `upperCaseLetter` to complete

```
const upperCaseLetter = (str) =>
  Box(str)
    .map(REPLACE HERE)
    .map(REPLACE HERE)
    .map(REPLACE HERE)
    .map(REPLACE HERE)
    .fold((el) => el)

```

3) Write the `lowerCaseLetter` function. (Follow the upperCaseLetter model)
That does the opposite of the `upperCaseLetter` one.

### Notions

- Composing with map

- https://egghead.io/lessons/javascript-linear-data-flow-with-container-style-types-box

*/

const Box = (el) => ({
  map: (f) => Box(f(el)),
  fold: (f) => f(el),
})

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

// showAsciiValue
t(({ eq }) => eq(showAsciiValue('     A'), 65))
t(({ eq }) => eq(showAsciiValue(' B       '), 66))
t(({ eq }) => eq(showAsciiValue('     c'), 99))
t(({ eq }) => eq(showAsciiValue('     x'), 120))
t(({ eq }) => eq(showAsciiValue('    1 '), 49))

// upperCaseLetter
t(({ eq }) => eq(upperCaseLetter(' a   '), 'A'))
t(({ eq }) => eq(upperCaseLetter(' b   '), 'B'))
t(({ eq }) => eq(upperCaseLetter(' c   '), 'C'))
t(({ eq }) => eq(upperCaseLetter(' x   '), 'X'))
t(({ eq }) => eq(upperCaseLetter(' y   '), 'Y'))
t(({ eq }) => eq(upperCaseLetter(' z   '), 'Z'))

t(({ code }) => !code.includes('.toUpperCase'))

// lowerCaseLetter
t(({ eq }) => eq(lowerCaseLetter(' Z   '), 'z'))
t(({ eq }) => eq(lowerCaseLetter(' A   '), 'a'))
t(({ eq }) => eq(lowerCaseLetter('   A   '), 'a'))
t(({ eq }) => eq(lowerCaseLetter(' B   '), 'b'))
t(({ eq }) => eq(lowerCaseLetter('    C   '), 'c'))

t(({ code }) => !code.includes('.toLowerCase'))

Object.freeze(tests)
