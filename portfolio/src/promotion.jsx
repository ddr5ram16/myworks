import React from "react";

export default function About(){
    return(
        <section id="cafe_anomaly" className="work_section">
                <div className="work_detail_box">
                    <div className="work_detail_item">
                        <div className="visual">
                            <a href="../cafe_anomaly/index.html" target="_blank">
                                <img src="img/cafe_anomaly.png" alt=""></img>
                                <div className="mask">
                                    <div className="caption">
                                        &rArr;サイトへ
                                        <span>(別ブラウザで表示します)</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="work_detail_item">
                        <div className="text">
                            <dl>
                                <dt>作品名</dt><dd>CafeAnomaly</dd>
                                <dt>作品概要</dt><dd>20代後半〜40代前半男性向けの架空のカフェのサイトを制作しました。</dd>
                                <dt>制作箇所</dt><dd>デザイン・コーディング</dd>
                                <dt>制作期間</dt>
                                <dd>
                                    <span className="work_align">デザイン 4日</span>
                                    <span className="work_align">コーディング 2日</span>
                                </dd>
                                <dt>素材について</dt>
                                <dd>主にAdobe fire flyを使用して生成、およびフリー素材を使用</dd>
                                <dt>使用ソフト</dt>
                                <dd>
                                    <span className="work_align">デザイン XD,Photoshop</span>
                                    <span className="work_align">コーディング VScode</span>
                                </dd>
                                <dt>サイトカラー</dt>
                                <dd>
                                    <div className="site_color frame">
                                        <span className="site_color cafe bg_color">背景色</span>
                                        <span className="site_color cafe main_color">メインカラー</span>
                                        <span className="site_color cafe font_color">文字色</span>
                                    </div>
                                </dd>
                                <dt>その他ポイント</dt>
                                <dd>
                                    <p>タブレットとスマートフォンへのレスポンシブ対応を行いつつ、flexを用いての配置整理やliのホバー時などにこだわりました。</p>
                                </dd>
                            </dl>
                            <a href="../cafe_anomaly/index.html" className="button" target="_blank">サイトへ<span>(別ブラウザで表示します)</span></a>
                        </div>
                    </div>
                </div>
            </section>
    )
}