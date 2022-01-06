module.exports = function reverse (n) {
    n = String(n)
  if (n.startsWith("-")) {
    return +(n.slice(1).split("").reverse().join(""))
  } else {
    return +(n.split("").reverse().join(""))
  }
}