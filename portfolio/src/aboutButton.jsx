import React , {useState} from "react";

export default function AboutButton({link}){
    const links =link
    return(
        <a href={links} className="button" target="_blank">サイトへ<span>(別ブラウザで表示します)</span></a>
    )
}