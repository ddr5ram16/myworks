import React , {useState , Component} from 'react';
import { webWorks , otherWorks } from './date/status.jsx';
import Item from './item.jsx';

export default function Works(){
    const [web , setWeb] = useState(webWorks)
    const [otehr , setOtehr] = useState(otherWorks)
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
                    <Item item={web}/>
                </div>
                <div className="other_works">
                    <Item item={otehr}/>
                </div>
            </div>
        </section>
    );
}