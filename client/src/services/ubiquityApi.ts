import axios from "axios";

export const instance = axios.create({
  baseURL: "https://svc.blockdaemon.com/",
  headers: {
    Authorization: `Bearer 9lNOzUvOUrDIKlhmBWzVZRmV7gudlgIeYiLgp9fOPX79Uq7s`,
  },
});
// ethereum/goerli/account/0xF0ccc8B440Bf013a37ef722530B1e4727a785CfA/txs
