import React from 'react';

export default function Item({item}){
    const work = item;
    return(
        work.map((works , i) => 
            <div className="work_item" key = {i}>
                <a href={works.link}>
                    <img src={works.img} alt=""></img>
                </a>
                <h3><span className="work_title">{works.name}</span></h3>
            </div>
        )
    );
}