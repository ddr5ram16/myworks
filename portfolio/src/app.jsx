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
                                {date.tools.map((tools , i)=> <span className='about_align' key = {i}>{tools}</span>)}
                            </dd>
                            <dt>技能</dt><dd>
                                {date.skills.map((skill , i) => <span className='about_align' key = {i}>{skill}</span>)}
                            </dd>
                            <dt>資格</dt>
                            <dd>
                                {date.trade.map((trade , i) => <span className='about_align' key = {i}>{trade}</span>)}
                            </dd>
                        </dl>
                    </div>
                </div>
            </section>
            <section id="self_promotion">
                <h2>Self-Promotion</h2>
                <div className="promotion_box">
                    <p>
                        慎重な性格を活かし、コードの正確性と品質を重視した開発を心がけています。
                        一方で、課題の構造を素早く把握し、最適な解決策を導く分析力と問題解決力にも自信があります。
                        ミスを未然に防ぐ丁寧さと、スピード感を両立させることを意識して取り組んできました。
                        目立つ役割よりも、チームの土台を支える“縁の下の力持ち”として、信頼されるエンジニアを目指しています。
                    </p>
                </div>
            </section>
        </div>
    );
}