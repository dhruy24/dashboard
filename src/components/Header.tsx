import React from "react";
import { navLinks } from "../data";
import Link from "next/link";
import header from "../../styles/header.module.css";

function Header() {
  return (
    <>
      <div className={header.menu_bar}>
      <Link href="/"><div className={header.gamezop}>Gamezop</div></Link>
        <div className={header.menu_list}>
          {navLinks.map((ele, key) => {
            return (
              <Link key={key} href={ele.path}>
                <div className={header.menu_list_item}>{ele.name}</div>
              </Link>
            );
          })}
          <div className={header.menu_list_item}>
            <svg
              className={header.hamburger_icon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <div className={header.sub_menu_1}>
              <div className={header.menu_container}>
                <Link href = '/'><div className={header.sum_menu_item}>Home</div></Link>
                <Link href = '/News'><div className={header.sum_menu_item}>News</div></Link>
                <Link href = '/logout'><div className={header.sum_menu_item}>Logout</div></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
