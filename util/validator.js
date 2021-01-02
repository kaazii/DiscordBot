module.exports = {
  isNumericValid(n) {
    return /^\d+$/.test(n) && (!parseInt(n) > 100 || !parseInt(n) <= 0) //&& takes precedence over ||
  },
  epochConverter(epoch) {
    var utcSeconds = epoch / 1000;
    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(utcSeconds);
    return d;
  }
}