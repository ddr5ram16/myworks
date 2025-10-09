import React , {useState} from "react";
import { worksCommon } from "../date/status";
import AboutImage from "../components/aboutImage"
import HeaderNav from "../components/Header";

export default function AboutOther({work}){
    const about = work;
    return(
        <div id="box top">
            <HeaderNav item={worksCommon}/>
            <div className="wrap">
                <section id="cafe_anomaly" className="work_section">
                    <div className="work_detail_box">
                        <div className="work_detail_item">
                            <AboutImage image={about.image}/>
                        </div>
                        <div className="work_detail_item">
                            <div className="text">
                                <dl>
                                    <dt>作品名</dt><dd>{about.name}</dd>
                                    <dt>作品概要</dt><dd>{about.concept}</dd>
                                    <dt>制作箇所</dt><dd>デザイン</dd>
                                    <dt>制作期間</dt>
                                    <dd>
                                        <span className="work_align">デザイン {about.designTime}</span>
                                    </dd>
                                    <dt>素材について</dt>
                                    <dd>主にAdobe fire flyを使用して生成、およびフリー素材を使用</dd>
                                    <dt>使用ソフト</dt>
                                    <dd>
                                        <span className="work_align">デザイン {about.desing}</span>
                                    </dd>
                                    <dt>その他ポイント</dt>
                                    <dd>
                                        <p>{about.point}</p>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}