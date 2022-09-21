import React from "react";
import classes from "./MainNavigation.module.css";
import Link from "next/Link";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Tutaj Logo</div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/new-pump">Add Pump</Link>
          </li>
          <li>
            <Link href="store">Store</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
