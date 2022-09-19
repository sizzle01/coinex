import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import TextField from "./globals/TextField";
import Loader from "./Loader";

const Welcome: React.FC = () => {
   
  const connectWallet = () =>{

  }

  const handleSubmit = () =>{
    
  }

  return (
    <>
    <div className="flex w-full justify-center items-center">
      <div className="w-full flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-primary text-gradient py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text- font-light md:w-9/12 w-11/12 text-base text-primary">
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            Krypto.
          </p>
          <button
            type="button"
            // onClick={connectWallet}
            className="flex flex-row justify-center items-center my-10 bg-[#2952e3] py-3 px-16 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            <AiFillPlayCircle className="text-white mr-2" />
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </button>
        </div>
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
            <div className="p-3 flex justify-end items-start flex-col rounded-xl h-48 xl:w-[70%] w-full my-5 eth-card bg-[#2546bd]">
              <div className="flex justify-between flex-col w-full h-full">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                    <SiEthereum fontSize={21} color="#fff" />
                  </div> 
                  <BsInfoCircle fontSize={17} color="#fff" />
                </div>
                <div>
                  <p className="text-white font-light text-sm">0x493843934</p>
                  <p className="text-white font-semibold text-lg mt-1">
                    Ethereum
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
</div>
<div className="p-5 sm:w-[50%] w-full flex flex-col justify-start items-center bg-[#2952e3]">
  <div className="w-[70%]">
  <TextField placeholder="Recipient" type="text" value="" name="addressTo"   />
  <TextField placeholder="Amount (ETH)" type="number" value="" name="addressTo"  />
  <TextField placeholder="message" type="text" value="" name="message"   />

  <div className="h-[1px] w-full bg-gray-400 my-2" />

  {true
              ? <Loader />
              : (
                <button
                  type="button"
                  // onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Send Ethereum
                </button>
              )}
  
  </div>
        
      </div>
      </>
  );
};

export default Welcome;
