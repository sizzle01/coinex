import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import TextField from "./globals/TextField";
import Loader from "./Loader";
import HeroImage from '../../images/send.webp';
import styles from '../style'
import discount from '../../images/assets/Discount.svg'
import robot from '../../images/assets/robot.png'

import { TransactionContext } from "../context/TransactionContext";
import { trimAddress } from "../utils/TrimAddress";
import OurServices from "./OurServices";
import Image from "next/image";
import GetStarted from "./GetStarted";
import Clients from "./Clients";
import Stats from "./Stats";
import CTA from "./CTA";



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
    <section id="home" className={`flex md:flex-row flex-col bg-primary ${styles.paddingY} ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col  sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <Image src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
          {!currentAccount && (
              <button
                type="button"
                onClick={connectWallet}
              >
                <GetStarted />
              </button>
            )}
            
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Crypto management platform
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts ensure that transactions on our platform cost less charges and available at all times. We examine annual percentage rates,
          annual fees you spend on transactions.
        </p>
      </div>
      <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
            <div className="p-3 flex justify-end items-start flex-col rounded-xl h-48 xl:w-[70%] w-full my-5 eth-card bg-blue-gradient">
              <div className="flex justify-between flex-col w-full h-full">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                    <SiEthereum fontSize={21} color="#fff" />
                  </div>
                  <BsInfoCircle fontSize={17} color="#fff" />
                </div>
                <div>
                  <p className="text-primary font-light text-sm">
                    {trimAddress(currentAccount)}
                  </p>
                  <p className="text-white font-semibold text-lg mt-1">
                    Ethereum
                  </p>
                </div>
              </div>
            </div>
          </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
      {/* <div className="flex w-full justify-center items-center bg-primary">
        <div className="w-full flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
          <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">  <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
         </div>
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
      </div> */}
      <div className="w-full flex md:flex-row flex-col  justify-between items-center bg-primary ">
        <div className="p-5 sm:w-[50%] w-full flex flex-col justify-start items-center bg-blue-gradient ">
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
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <Image src={robot} alt="billing"  className=" relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
        {/* <div className="sm:w-[50%] ">
<Image src={HeroImage} alt='heroImage' />
          </div> */}
      </div>
      <Stats />
      <Clients />
      <CTA />
      <OurServices />
    
    </>
  );
};

export default Welcome;
