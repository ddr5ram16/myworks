import React , {useState} from 'react';
import { webWorks , otherWorks } from './date/status.jsx';

export default function Item({item}){
    const items = item;
    return(
        items.map((works , i) => 
            <div className="work_item" key = {i}>
                <a href={works.link}>
                    <img src={works.img} alt=""></img>
                </a>
                <h3><span className="work_title">{works.name}</span></h3>
            </div>
        )
    );
}