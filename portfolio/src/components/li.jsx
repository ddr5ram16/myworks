import { webWorks } from "../date/status"
import { head } from "../date/head"
import React from "react"

export default function HeadList(item){
    const test =item
    return(
            test.map((path , i) =>
                <li key={i}>
                 <a href={path.link}>{path.name}</a>
                 </li>
            )
            // test.map((items , i) =>
            //     <li key={i}><a href={items.link}>{items.name}</a></li>
            // ) 
    )
}