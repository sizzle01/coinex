import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import TextField from "./globals/TextField";
import Loader from "./Loader";
import HeroImage from '../../images/send.webp';

import { TransactionContext } from "../context/TransactionContext";
import { trimAddress } from "../utils/TrimAddress";
import OurServices from "./OurServices";
import Image from "next/image";



const Welcome: React.FC = () => {
 // @ts-ignore
  const {connectWallet, currentAccount,formData,handleChange,sendTransaction,isloading
  } = useContext(TransactionContext);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { addressTo, amount, keyword, message } = formData;
    console.log(addressTo, amount, keyword, message);
    e.preventDefault();
    if (!addressTo || !amount || !keyword || !message) return;
    sendTransaction();
  };

  return (
    <>
      <div className="flex w-full justify-center items-center bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500">
        <div className="w-full flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
          <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
            <h1 className="text-3xl sm:text-5xl text-primary text-gradient py-1">
              Send Crypto <br /> across the world
            </h1>
            <p className="text-left mt-5 text- font-light md:w-9/12 w-11/12 text-base text-primary">
              Explore the crypto world. Buy and sell cryptocurrencies easily on
              Krypto.
            </p>
            {!currentAccount && (
              <button
                type="button"
                onClick={connectWallet}
                className="flex flex-row justify-center items-center my-10 bg-[#2952e3] py-3 px-16 rounded-full cursor-pointer hover:bg-[#2546bd]"
              >
                <AiFillPlayCircle className="text-white mr-2" />
                <p className="text-white text-base font-semibold">
                  Connect Wallet
                </p>
              </button>
            )}
          </div>
          <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
            <div className="p-3 flex justify-end items-start flex-col rounded-xl h-48 xl:w-[70%] w-full my-5 eth-card bg-gradient-to-r from-blue-600 via-blue-600 to-pink-600">
              <div className="flex justify-between flex-col w-full h-full">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                    <SiEthereum fontSize={21} color="#fff" />
                  </div>
                  <BsInfoCircle fontSize={17} color="#fff" />
                </div>
                <div>
                  <p className="text-white font-light text-sm">
                    {trimAddress(currentAccount)}
                  </p>
                  <p className="text-white font-semibold text-lg mt-1">
                    Ethereum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col items-start justify-between items-center bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500">
        <div className="p-5 sm:w-[50%] w-full flex flex-col justify-start items-center bg-[#2952e3]">
          <div className="w-[80%]">
            <TextField
              placeholder="Recipient"
              type="text"
              name="addressTo"
              handleChange={handleChange}
            />
            <TextField
              placeholder="Amount (ETH)"
              type="number"
              name="amount"
              handleChange={handleChange}
            />
            <TextField
              placeholder="message"
              type="text"
              name="message"
              handleChange={handleChange}
            />
            <TextField
              placeholder="Keyword"
              type="text"
              name="keyword"
              handleChange={handleChange}
            />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isloading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-white hover:bg-[#3d4f7c] rounded-full cursor-pointer"
              >
                Send Ethereum
              </button>
            )}
          </div>
        </div>
        <div className="sm:w-[50%] ">
<Image src={HeroImage} alt='heroImage' />
          </div>
      </div>
      <OurServices />
    
    </>
  );
};

export default Welcome;
