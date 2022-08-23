import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () =>{
  return(
    <div className="flex justify-between">
      <div className="logo mx-5">
      <Image width={100} height={20} src="/logo1.png"/>
      </div>
      <div className="nav py-2">
      <ul className="flex items-center space-x-2 font-bold">
        
        <Link href={"/"}><a><li >Tshirts</li></a></Link>
        <Link href={"/"}><a><li >Hoodies</li></a></Link>
        <Link href={"/"}><a><li >Mugs</li></a></Link>
        <Link href={"/"}><a><li >Stickers</li></a></Link>
        
        
      </ul>
      </div>
      <div className="cart">
        <AiOutlineShoppingCart/>
      </div>
    </div>
  )
}
export default Navbar;