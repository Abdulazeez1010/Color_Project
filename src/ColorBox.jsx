
import { useState } from 'react';
import './ColorBox.css'

function ColorBox({background, name}){
    const [copied, setCopied] = useState(false)

    const copyText = () => {
        navigator.clipboard.writeText(background);
        changeCopyState();
    };

    const changeCopyState = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    }

    return(
        <div
            onClick={copyText}
            style={{background: background}}
            className="ColorBox"
        >
        <div style={{background}} className={`copy-overlay ${copied && "show"}`}/>
        <div className={`copy-msg ${copied && "show"}`}>
            <h1>copied!</h1>
            <p>{background}</p>
        </div>
            <div className='copy-contianer'>
                <div className="box-content">
                    <span>{name}</span>
                </div>
                <button className='copy-button'>Copy</button>
            </div>
            <span className='see-more'>More</span>
        </div>
    )
}

export default ColorBox;

