let close = new Map([['{', '}'], ['(',')'], ['[',']']])
function isBalanced(str) {
  return isBal(str, str[0], 0)
}

function isBal(str, openKey, idx) {
  if (isClose(str[0])) return false

  let cur = str[idx]
  let next = str[idx + 1]
  let prev = str[idx - 1]
  if (isOpen(cur)) {
    if (next == close[cur]) {
      str = str.substring(0, idx) + str.slice(idx + 2)
      return str.length > 1 ? isBal(str, str[0], 0) : true
    }

    return isBal(str, cur, idx + 1)
  }

  return close[prev] != cur ? isBal(str, prev, idx + 1) : false
}

// function isBal(str, openKey, idx) {
//   if (isClose(str[0])) return false
//
//   let cur = str[idx]
//   let next = str[idx + 1]
//   let prev = str[idx - 1]
//   if (isOpen(cur)) {
//     if (next == getClose(cur)) {
//       str = str.substring(0, idx) + str.slice(idx + 2)
//       return str.length > 1 ? isBal(str, str[0], 0) : true
//     }
//
//     return isBal(str, cur, idx + 1)
//   }
//
//   return getClose(prev) != cur ? isBal(str, prev, idx + 1) : false
// }

function getClose(c) {
  switch (c) {
    case "{": return "}"
    case "(": return ")"
    case "[": return "]"
  }
}

function isClose(c) {
  return c == "]" || c == ")" || c == "}"
}

function isOpen(c) {
  return c == "{" || c == "[" || c == "("
}

let insaneLong = "()[]()[]()[]()[]()[]()[[]](())[](())[]()[]()[]()[]()[]()[]()[]()[]()[]()[]()[]"
var time = new Date().getTime();
console.log("Starting tests...")
console.log(1, isBalanced("()[]"), "to be true")
console.log(2, isBalanced("([])"), "to be true")
console.log(3, isBalanced("({[[()]]})"), "to be true")
console.log(4, isBalanced("()[]({)}()[]"), " to be false")
console.log(5, isBalanced("[]}()"), "to be false")
console.log(6, isBalanced("{{{{"), "to be false")
console.log(7, isBalanced("}}}}"), "to be false")
console.log(8, isBalanced(insaneLong), "to be true")
console.log(9, isBalanced(insaneLong + "}" + insaneLong), "to be false")
var newTime = new Date().getTime() - time
console.log(`Done (${newTime} ms)`)
