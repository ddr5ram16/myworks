import React from 'react'
import {useState} from 'react'
import { WORKS } from './date/works.js';
function webWorks(){
    web.map((works , i) => 
        <div className="work_item" key = {i}>
        <a href="portfolio.html">
            <img src="img/portforio_about.png" alt=""></img>
        </a>
        <h3><span className="work_title">{works}</span></h3>
    </div>
    )
}
export default function Works(){
    const [web , setWeb] = useState(WORKS)
    return(
        <section id="works">
            <h2>Works</h2>
            <div className="work_switch_box">
                <label htmlFor="web_works"><h3 className="work_switch">Web</h3></label>
                <label htmlFor="other_works"><h3 className="work_switch">Other</h3></label>
            </div>
                <div className="work_box">
                    <input type="radio" name="works" id="web_works" defaultChecked></input>
                    <input type="radio" name="works" id="other_works"></input>
                    <div className="web_works">
                        {/* {
                            web.map((works , i) => 
                            <div className="work_item" key = {i}>
                                <a href="portfolio.html">
                                    <img src="img/portforio_about.png" alt=""></img>
                                </a>
                                <h3><span className="work_title">{works}</span></h3>
                            </div>
                            )
                        } */}
                        <div className="work_item">
                            <a href="dooglen.html">
                                <img src="img/dooglen_about.png" alt=""></img>
                            </a>
                            <h3><span className="work_title">Dooglen</span></h3>
                            <p></p>
                        </div>
                        <div className="work_item">
                            <a href="portfolio.html">
                                <img src="img/portforio_about.png" alt=""></img>
                            </a>
                            <h3><span className="work_title">portfolio</span></h3>
                            <p></p>
                        </div>
                        <div className="work_item">
                            <a href="anonim.html">
                                <img src="img/anonim_about.png" alt=""></img>
                            </a>
                            <h3><span className="work_title">Anonim</span></h3>
                        </div>
                        <div className="work_item">
                            <a href="cafe_anomaly.html">
                                <img src="img/cafeanomaly_about.png" alt=""></img>
                            </a>
                            <h3><span className="work_title">Cafe Anomaly</span></h3>
                        </div>
                        <div className="work_item">
                            <a href="janedoe_channel.html">
                                <img src="img/janedoe_about.png" alt=""></img>
                            </a>
                            <h3><span className="work_title">Janedoe chanel</span></h3>
                        </div>
                    </div>
                    <div className="other_works">
                        <div className="work_item">
                            <a href="../novelty.html">
                                <img src="img/novelty_about.png" alt=""></img>
                            </a>
                            <h3><span className="work_title">企業ノベルティ</span></h3>
                        </div>
                        <div className="work_item">
                            <a href="fes.html">
                                <img src="img/fes_about.png" alt=""></img>
                            </a>
                            <h3><span className="work_title">阿弥陀祭りチラシ</span></h3>
                        </div>
                        <div className="work_item">
                            <a href="beautysalon.html">
                                <img src="img/beautysalon_about.png" alt=""></img>
                            </a>
                            <h3><span className="work_title">美容室チラシ</span></h3>
                        </div>
                        <div className="work_item">
                            <a href="Jobhunting.html">
                                <img src="img/jobhunting_about.png" alt=""></img>
                            </a>
                            <h3><span className="work_title">就活フェアチラシ</span></h3>
                        </div>
                        <div className="work_item">
                            <a href="strawberry.html">
                                <img src="img/strawberry_about.png" alt=""></img>
                            </a>
                            <h3><span className="work_title">いちご狩りチラシ</span></h3>
                        </div>
                    </div>
                </div>
            </section>
    );
}