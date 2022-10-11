import React from 'react'
import styles from '../style'
import Image from "next/image";

const nftpage = () => {
  return (
    <div className={`flex md:flex-row flex-col bg-primary ${styles.paddingY} ${styles.paddingX} ${styles.flexCenter}`}>
         <div className={`flex-1 ${styles.flexStart} flex-col  sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Create, sell and collect <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Digital assets</span>{" "}
          </h1>
        
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Crypto management platform
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts provide Nft platform which is ethereum enabled.
        </p>
      </div>
      <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
            <div className="p-3 flex justify-end items-start flex-col rounded-xl h-48 xl:w-[70%] w-full my-5 eth-card bg-blue-gradient">
              <div className="flex justify-between flex-col w-full h-full">
               
              
              </div>
            </div>
          </div>
    </div>
  )
}

export default nftpage