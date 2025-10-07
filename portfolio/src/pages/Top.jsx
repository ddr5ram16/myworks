import React, { useState } from 'react';
import { Link as Scroll } from 'react-scroll';
import { Profile } from '../date/status.jsx';
import { head } from '../date/head.js'
import Works from '../components/works.jsx'
import HeaderNav from '../components/Header.jsx';


export default function Top(){
    const date = Profile;
    const header = head;
    return(
        <div id="box">
            <HeaderNav item={header} />
            <header>
                <h1><a href="">Portfolio</a></h1>
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
                            <li><Scroll to='about' smooth duration={500}>About</Scroll></li>
                            <li><a href="#self_promotion">Self-Promotion</a></li>
                            <li><a href="#works">Works</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="mailto:77.620.hk@au.com">Mail<span className="about_align mail">77.620.hk@au.com</span></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div id="main_img"></div>
            <div className="wrap">
            <section id="about">
                <h2>About</h2>
                <div className="about_box">
                    <div className="about_item">
                        <dl>
                            <dt>名前</dt><dd>{date.profile.name}</dd>
                            <dt>生年月日</dt><dd><time dateTime="2005-04-19">2005年4月19日</time></dd>
                            <dt>趣味</dt><dd>{date.profile.hobby}</dd>
                            <dt>使用可能ソフト</dt>
                            <dd>
                                {date.tools.map((tools , i)=> <span className='about_align' key = {i} >{tools}</span>)}
                            </dd>
                            <dt>技能</dt>
                            <dd>
                                {date.skills.map((skill , i) => <span className='about_align' key = {i} >{skill}</span>)}
                            </dd>
                            <dt>資格</dt>
                            <dd>
                                {date.trade.map((trade , i) => <span className='about_align' key = {i} >{trade}</span>)}
                            </dd>
                        </dl>
                    </div>
                </div>
            </section>
            <section id="self_promotion">
                <h2>Self-Promotion</h2>
                <div className="promotion_box">
                    <p>{date.profile.promotion}</p>
                </div>
            </section>
            <Works />
            </div>
        </div>
    );
}