const { AVAPIKey } = require("../config.json");
const alpha = require('alphavantage')({ key: AVAPIKey });
module.exports = {
    quote(stock){
        return alpha.data.quote(stock);
    },
    intraday(stock){
        //TODO
    }
}