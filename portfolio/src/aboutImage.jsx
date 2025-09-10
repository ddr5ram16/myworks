import React , {useState} from "react";

export default function AboutImage(){
    return(
        <div className="visual">
            <a href="" target="_blank">
                <img src="img/cafe_anomaly.png" alt=""></img>
                <div className="mask">
                    <div className="caption">
                        &rArr;サイトへ
                        <span>(別ブラウザで表示します)</span>
                    </div>
                </div>
            </a>
        </div>
    )
}