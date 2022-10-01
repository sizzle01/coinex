import axios from "axios";

const globalCall = axios.create({
  baseURL: "https://svc.blockdaemon.com/",
});

export default globalCall;
// https://svc.blockdaemon.com/universal/v1/ethereum/mainnet/sync/block_number?apiKey=YOUR_API_KEY
