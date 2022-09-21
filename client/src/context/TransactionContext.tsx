import React,{useEffect, useState} from 'react';
import {ethers} from 'ethers';

import {contractABI, contractAddress} from '../utils/constants'

// const value = {

// }

export const TransactionContext = React.createContext({});

// @ts-ignore
const { ethereum} = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);
    console.log({
        provider,
        signer,
        transactionContract
    })
}

getEthereumContract();
console.log("show fi mki")


export const TransactionProvider = ({children}:any) =>{

    const [currentAccount, setCurrentAccount] = useState('')

const checkIfWalletIsConnected = async () =>{
    try {
        
        if(!ethereum) return alert("please install metamask");
        const accounts = await ethereum.request({method:'eth_accounts'});
        
        console.log(accounts);
    
        if(accounts.length){

            setCurrentAccount(accounts[0]);

            //get all transactios

        }else
        console.log("no accounts found")

    } catch (error) {
        
        console.log(error);

    throw new Error("No ethereum object");
    }
    
}

const connectWallet = async () =>{
   try {

    if(!ethereum) return alert("please install metamask to continue");
    const accounts = await ethereum.request({method: 'eth_requestAccounts'});
    setCurrentAccount(accounts[0]);
   
} catch (error) {
    console.log(error);

    throw new Error("No ethereum object");
   }
}

useEffect(() =>{
    checkIfWalletIsConnected();
}, []);
    return(
        <TransactionContext.Provider value={{ connectWallet, currentAccount}}>
        {children}
        </TransactionContext.Provider>
    )
}
