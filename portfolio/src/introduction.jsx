import React , {useState} from "react";
import AboutButton from './aboutButton.jsx'
import AboutImage from "./aboutImage.jsx";

export default function Introduction(){
    const coffee = "cafe";
    return(
        <section id="cafe_anomaly" className="work_section">
            <div className="work_detail_box">
                <div className="work_detail_item">
                    <AboutImage/>
                </div>
                <div className="work_detail_item">
                    <div className="text">
                        <dl>
                            <dt>作品名</dt><dd>{}</dd>
                            <dt>作品概要</dt><dd>{}</dd>
                            <dt>制作箇所</dt><dd>{}</dd>
                            <dt>制作期間</dt>
                            <dd>
                                <span className="work_align">{coffee}</span>
                            </dd>
                            <dt>素材について</dt>
                            <dd>主にAdobe fire flyを使用して生成、およびフリー素材を使用</dd>
                            <dt>使用ソフト</dt>
                            <dd>
                                <span className="work_align">{}</span>
                            </dd>
                            <dt>サイトカラー</dt>
                            <dd>
                                <div className="site_color frame">
                                    <span className={"site_color cafe bg_color"}><div>背景色</div></span>
                                    <span className="site_color cafe main_color">メインカラー</span>
                                    <span className="site_color cafe font_color">文字色</span>
                                </div>
                            </dd>
                            <dt>その他ポイント</dt>
                            <dd>
                                <p>タブレットとスマートフォンへのレスポンシブ対応を行いつつ、flexを用いての配置整理やliのホバー時などにこだわりました。</p>
                            </dd>
                        </dl>
                        <AboutButton/>
                    </div>
                </div>
            </div>
        </section>
    )
}