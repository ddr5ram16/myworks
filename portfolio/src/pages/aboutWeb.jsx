import React , {useState} from "react";
import AboutImage from "../components/aboutImage"
import { NavLink } from 'react-router-dom';

export default function AboutWeb({work}){
    const about = work;
    return(
        <div id="box top">
            <header className="work_header">
                <h1 className=""><NavLink to="/">Hashizumi'sPortfolio</NavLink></h1>
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
                            <li><a href="/">About</a></li>
                            <li><a href="/">Self-Promotion</a></li>
                            <li><a href="/">Works</a></li>
                            <li><a href="/">Contact</a></li>
                            <li><a href="mailto:77.620.hk@au.com">Mail<span className="about_align mail">77.620.hk@au.com</span></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        <div className="wrap">
            <section id="cafe_anomaly" className="work_section">
                <div className="work_detail_box">
                    <div className="work_detail_item">
                        <AboutImage image={about.image} link={about.link}/>
                    </div>
                    <div className="work_detail_item">
                        <div className="text">
                            <dl>
                                <dt>作品名</dt><dd>{about.name}</dd>
                                <dt>作品概要</dt><dd>{about.concept}</dd>
                                <dt>制作箇所</dt><dd>{about.inCharge}</dd>
                                <dt>制作期間</dt>
                                <dd>
                                    <span className="work_align">デザイン {about.designTime}</span>
                                    <span className="work_align">コーディング {about.codeTime}</span>
                                </dd>
                                <dt>素材について</dt>
                                <dd>主にAdobe fire flyを使用して生成、およびフリー素材を使用</dd>
                                <dt>使用ソフト</dt>
                                <dd>
                                    <span className="work_align">デザイン {about.desing}</span>
                                    <span className="work_align">コーディング {about.code}</span>
                                </dd>
                                <dt>サイトカラー</dt>
                                <dd>
                                    <div className="site_color frame">
                                        <span className={'site_color bg_color'+' '+`${about.color}`}>背景色</span>
                                        <span className={'site_color main_color'+' '+`${about.color}`}>メインカラー</span>
                                        {about.accent == "" ? <span className="site_color portfolio accent_color">アクセント</span> : ""}
                                        <span className={'site_color font_color'+' '+`${about.color}`}>文字色</span>
                                    </div>
                                </dd>
                                <dt>その他ポイント</dt>
                                <dd>
                                    <p>タブレットとスマートフォンへのレスポンシブ対応を行いつつ、flexを用いての配置整理やliのホバー時などにこだわりました。</p>
                                </dd>
                            </dl>
                            <a href={about.link} className="button" target="_blank">サイトへ<span>(別ブラウザで表示します)</span></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
    )
}