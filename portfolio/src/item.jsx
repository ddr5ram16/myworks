import React , {useState} from 'react';
function mapping(items){
    const[works , setWorks] = useState(items)
    const map = works.map((works , i) => 
        <div className="work_item" key = {i}>
            <a href={works.link}>
                <img src={works.img} alt=""></img>
            </a>
            <h3><span className="work_title">{works.name}</span></h3>
        </div>
    )
}
export default function Item(work){
    return(
        {...mapping(work)}
    );
}