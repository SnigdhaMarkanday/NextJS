import React from "react";

const NavBar = ()=>{
  return(
    <nav className={styles.mainnav}>
        <ul>
          <Link href='/home'><li>Home</li></Link>
          <Link href='/about'><li>About</li></Link>
          <Link href='/blog'><li>Blog</li></Link>
          <Link href='/contact'><li>Contact</li></Link>
        </ul>
      </nav>
  )
};

export default NavBar;