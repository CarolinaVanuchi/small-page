import React, {useRef, useEffect} from 'react';
import '../style/Content.css';

function Content({timeline}) {
    let h1 = useRef(null);
    let pText = useRef(null);
    let btn = useRef(null);

    useEffect(() => {
        timeline.from([h1, pText, btn], 1, {
            opacity:0,
            y:"100",
            skewY:10,
            stagger: {
                amount: .4
            }
        })
    })

    return (
        <div>
            <div className="content">
                <h1 className="content-inner-bold" ref = {el => h1 = el}>
                    <div>Convictions are more dangerous</div>
                    <br/>
                    <div> foes of truth than lies.</div>
                </h1>
                <p ref = {el => pText = el}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eius quo quibusdam maxime tenetur laborum hic officia aliquid quaerat facere
                </p>
                <button ref = {el => btn = el}>
                    Explore
                </button>
            </div>
        </div>
    )
}

export default Content;