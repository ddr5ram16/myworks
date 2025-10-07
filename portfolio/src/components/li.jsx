import React from "react"
import { Link as Scroll } from 'react-scroll';

export default function HeadList({date , page}){
    const test = date;
    return(
        page === "work" ?
        test.map((items , i) =>
            <li key={i}><a href="/">{items.name}</a></li>
        ):
        test.map((items , i) =>
            <li key={i}><Scroll to={items.link} smooth duration={600}>{items.name}</Scroll></li>
        )
    )
}