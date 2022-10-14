import axios from "axios";

export const instance = axios.create({
  baseURL: "https://svc.blockdaemon.com/",
  headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_UBIQUITY_API}` },
});
// ethereum/goerli/account/0xF0ccc8B440Bf013a37ef722530B1e4727a785CfA/txs
