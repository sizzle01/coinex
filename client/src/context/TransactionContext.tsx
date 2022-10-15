import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { instance } from "../services/ubiquityApi";
import { contractABI, contractAddress } from "../utils/constants";
import { transactionType } from "../utils/types";

export const TransactionContext = React.createContext({} as transactionType);

declare global {
  interface Window {
    ethereum: any;
    ethers: any;
  }
}

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
  const [transactions, setTransactions] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const [network, setNetwork] = useState("ethereum/goerli");

  const getTransaction = async (network: string) => {
    try {
      const request = await instance.get(
        `universal/v1/${network}/account/${currentAccount}/txs`
      );
      setTransaction(request?.data.data);
    } catch (error) {}
  };
  console.log(transaction);

  useEffect(() => {
    getTransaction(network);
  }, [network, currentAccount]);

  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const getAllTransactions = async () => {
    try {
      // @ts-ignore
      const { ethereum } = window;
      if (ethereum) {
        const transactionsContract = createEthereumContract();

        const availableTransactions =
          await transactionsContract.getAllTransactions();

        const structuredTransactions = availableTransactions.map(
          (transaction: any) => ({
            addressTo: transaction.receiver,
            addressFrom: transaction.sender,
            timestamp: new Date(
              transaction.timestamp.toNumber() * 1000
            ).toLocaleString(),
            message: transaction.message,
            keyword: transaction.keyword,
            amount: parseInt(transaction.amount._hex) / 10 ** 18,
          })
        );

        console.log(structuredTransactions);

        setTransactions(structuredTransactions);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
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

  const checkIfTransactionsExists = async () => {
    try {
      // @ts-ignore
      const { ethereum } = window;
      if (ethereum) {
        const transactionsContract = createEthereumContract();
        const currentTransactionCount =
          await transactionsContract.getTransactionCount();

        window.localStorage.setItem(
          "transactionCount",
          currentTransactionCount
        );
      }
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
        window.location.reload();
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
    // checkIfTransactionsExists()
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
        transactions,
        transaction,
        getTransaction,
        network,
        setNetwork,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
