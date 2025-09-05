import React from 'react'
import {useState} from 'react'
import dooglen from '../img/dooglen_about.png';
import portfolio from '../img/portforio_about.png';
import anonim from '../img/anonim_about.png';
import cafe_anomaly from '../img/cafeanomaly_about.png';
import janedoe_channel from '../img/janedoe_about.png';
import novelty from '../img/novelty_about.png'
import fes from '../img/fes_about.png';
import beautysalon from '../img/beautysalon_about.png';
import jobhunting from '../img/jobhunting_about.png';
import strawberry from '../img/strawberry_about.png';

export default function Works(){
    const webWORKS = [
        {
            name: 'Dooglen',
            img: dooglen,
            link: "dooglen.html"
        },
        {
            name: 'Portfolio',
            img: portfolio,
            link: "portfolio.html"
        },
        {
            name: 'Anonim',
            img: anonim,
            link: "anonim.html"
        },
        {
            name: 'Cafe Anomaly',
            img: cafe_anomaly,
            link: "cafe_anomaly.html"
        },
        {
            name: 'Janedoe Channel',
            img: janedoe_channel,
            link: "janedoe_channel.html",
        },
    ]
    const otherWORKS = [
        {
            name: '企業ノベルティ',
            img: novelty,
            link: "novelty.html"
        },
        {
            name: '阿弥陀祭りチラシ',
            img: fes,
            link: "fes.html"
        },
        {
            name: '美容室チラシ',
            img: beautysalon,
            link: "beautysalon.html"
        },
        {
            name: '就活フェアチラシ',
            img: jobhunting,
            link: "Jobhunting.html"
        },
        {
            name: 'いちご狩りチラシ',
            img: strawberry,
            link: "strawberry.html"
        },
    ]
    const [web , setWeb] = useState(webWORKS)
    const [otehr , setOtehr] = useState(otherWORKS)
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
                        {
                            web.map((works , i) => 
                                <div className="work_item" key = {i}>
                                <a href={works.link}>
                                    <img src={works.img} alt=""></img>
                                </a>
                                <h3><span className="work_title">{works.name}</span></h3>
                            </div>
                            )
                        }
                    </div>
                    <div className="other_works">
                        {
                            otehr.map((works , i) => 
                                <div className="work_item" key = {i}>
                                <a href={works.link}>
                                    <img src={works.img} alt=""></img>
                                </a>
                                <h3><span className="work_title">{works.name}</span></h3>
                            </div>
                            )
                        }
                    </div>
                </div>
            </section>
    );
}