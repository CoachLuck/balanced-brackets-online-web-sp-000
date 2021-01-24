let close = new Map([ ['{', '}'], ['(',')'], ['[',']'] ])

function isBalanced(str) {
  return isBal(str, str[0], 0)
}

function isBal(str, openKey, idx) {
  if (!close.has(str[0])) return false

  let cur = str[idx]
  if (close.has(cur)) {
    if (str[idx + 1] == close.get(cur)) {
      str = str.slice(0, idx) + str.slice(idx + 2)
      return str.length > 1 ? isBal(str, str[0], 0) : true
    }

    return isBal(str, cur, idx + 1)
  }

  let prev = str[idx - 1]
  return close.get(prev) != cur ? isBal(str, prev, idx + 1) : false
}

let insaneLong = "()[](({}))[[]](())[[]]()[({})]()[{}]()[[]](())[](())[]()[]()[]()[]()[]()[]()[]()[]()[]()[]()[]"
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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var crazyLong = insaneLong + insaneLong + insaneLong + insaneLong
var loopTime = new Date().getTime()
while (crazyLong.length > 1) {
  isBalanced(crazyLong)
  crazyLong = crazyLong.substring(1)
}
var endTime = new Date().getTime() - loopTime
console.log(`Loop Time: (${endTime} ms)`)
