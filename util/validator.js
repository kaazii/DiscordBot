module.exports = {
  isNumericValid(n) {
      return /^\d+$/.test(n) && (!parseInt(n) > 100 || !parseInt(n) <= 0) //&& takes precedence over ||
  }
}