import React, {useContext} from 'react'

import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import Logo from '../../images/logo.png'
import Image from 'next/image';
import { TransactionContext } from '../context/TransactionContext';


interface NavBArItemProps {
title:string
classprops?: string
}

const NavBarItem: React.FC<NavBArItemProps> = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar: React.FC = () => {
  // @ts-ignore
  const {connectWallet, currentAccount} = useContext(TransactionContext)
  const [toggleMenu, setToggleMenu] = React.useState<boolean>(false);

  return (
   <nav className='w-full flex  justify-between items-center py-6 px-4 bg-darkBg' >
    <div className="w-[124px] h-[32px]  flex-initial justify-center items-center">
        <Image src={Logo} alt="logo" height={50} width={200} className="cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {[ "NFTs", "Manager", "Wallets"].map((item, index) => (
          <NavBarItem key={index} title={item} />
        ))}
         {!currentAccount && (
              <button
                type="button"
                onClick={connectWallet}
              >
                 <li className="bg-blue-gradient py-2 px-7 mx-4 rounded-full cursor-pointer ">
          Connect Wallet
        </li>
              </button>
            )}
            
      
      </ul>
      <div className="flex relative">
      {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
         {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white 
            bg-darkBg animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {[ "NFTs", "Manager", "Wallets"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
        </div>

   </nav>
  )
}

export default Navbar 