import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext({});

const createEthereumContract = () => {
  // @ts-ignore
  const { ethereum } = window;
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return transactionsContract;
};

export const TransactionProvider = ({ children }: any) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [isloading, setIsLoading] = useState(false);
  // const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactioCount'))
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const checkIfWalletIsConnected = async () => {
    try {
      // @ts-ignore
      const { ethereum } = window;

      if (!ethereum) return alert("please install metamask");
      const accounts = await ethereum.request({ method: "eth_accounts" });

      console.log(accounts);

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        //get all transactios
      } else console.log("no accounts found");
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const connectWallet = async () => {
    try {
      // @ts-ignore
      const { ethereum } = window;

      if (!ethereum) return alert("please install metamask to continue");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const sendTransaction = async () => {
    try {
      // @ts-ignore
      const { ethereum } = window;
      if (ethereum) {
        const { addressTo, amount, keyword, message } = formData;
        console.log(addressTo, amount, message);
        const transactionsContract = createEthereumContract();
        const parsedAmount = ethers.utils.parseEther(amount);

        await ethereum.request({
          method: "eth_sendTransaction",
          params: [
            {
              from: currentAccount,
              to: addressTo,
              gas: "0x5208",
              value: parsedAmount._hex,
            },
          ],
        });
        // @ts-ignore
        const transactionHash = await transactionsContract.addToBlockchain(
          addressTo,
          parsedAmount,
          message,
          keyword
        );

        setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);
        setIsLoading(false);

        // const transactionsCount = await transactionsContract.getTransactionCount();

        // setTransactionCount(transactionsCount.toNumber());
        // window.location.reload();
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };
  useEffect(() => {
    checkIfWalletIsConnected();
    createEthereumContract();
  }, []);
  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        setFormData,
        handleChange,
        sendTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
