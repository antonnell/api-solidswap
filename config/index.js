require('dotenv').config()

const config = {

  testnet: process.env.TESTNET,

  web3: {
    provider: process.env.PROVIDER
  },

  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    // password: PROCESS.ENV.REDIS_PASSWORD
  },

  tokenLists: [
    'https://raw.githubusercontent.com/DimensionDev/Mask-Token-List/gh-pages/latest/250/tokens.json',
    'https://unpkg.com/@crocoswap/default-token-list@3.2.1/build/sushiswap-default.tokenlist.json',
    'https://raw.githubusercontent.com/BoggedFinance/Bogged-Token-List/main/ftm/tokenlist.json'
  ],

  wftm: {
    "chainId":250,
    "name":"Wrapped FTM",
    "symbol":"WFTM",
    "address":"0x27Ce41c3cb9AdB5Edb2d8bE253A1c6A64Db8c96d",
    "decimals":18,
    "logoURI":"https://assets.spookyswap.finance/tokens/wFTM.png"
  }

}


module.exports = config
