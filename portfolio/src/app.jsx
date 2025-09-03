import { useState } from 'react';
import { POOL } from './date/status.js';
import React from "react";

export default function App(){
    const [date , setDate] = useState(POOL)
    return(
        <div id="box">
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
                            <dt>技能</dt><dd>
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
        </div>
    );
}