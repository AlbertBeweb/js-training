const showAsciiValue = (str) =>
  Box(str)
    .map((str) => str.trim())
    .map((char) => char.charCodeAt())
    .fold((asciiValue) => asciiValue)

const upperCaseLetter = (str) =>
  Box(str)
    .map((str) => str.trim())
    .map((letter) => letter.charCodeAt())
    .map((asciiValue) => asciiValue - 32)
    .map((newAsciiValue) => String.fromCharCode(newAsciiValue))
    .fold((el) => el)

const lowerCaseLetter = (str) =>
  Box(str)
    .map((str) => str.trim())
    .map((letter) => letter.charCodeAt())
    .map((asciiValue) => asciiValue + 32)
    .fold((newAsciiValue) => String.fromCharCode(newAsciiValue))
