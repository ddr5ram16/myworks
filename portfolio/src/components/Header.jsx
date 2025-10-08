import React from "react";
import HeadList from "./li";
import { head } from "../date/head";



export default function HeaderNav({item}){
    const parts = item;
    return(
        <header className={parts.class}>
            <h1><a href="/">Hashizumi'sPortfolio</a></h1>
            <input type="checkbox" id="burger_button" />
            <label htmlFor="burger_button">
                <div className="burger_box">
                    <span className="burger_line"></span>
                    <span className="burger_line none"></span>
                    <span className="burger_line"></span>
                </div>
            </label>
            <div id="nav_burger">
                <nav>
                    <ul>
                        <HeadList date={head} page={parts.page}></HeadList>
                        <li><a href="mailto:77.620.hk@au.com">Mail<span className="about_align mail">77.620.hk@au.com</span></a></li>
                        <li>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeETkJY08wS09n5al9jvuOw_1Z114HzjOYduY9WuwwxH9UIcw/viewform?usp=header" target="_blank">Contact
                            <span className="about_align mail">(別ブラウザで開きます)</span></a>
                            </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}