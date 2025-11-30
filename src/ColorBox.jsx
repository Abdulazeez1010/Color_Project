
import { useState } from 'react';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import './ColorBox.css'

function ColorBox({background, name, paletteId, id, showLink}){
    const [copied, setCopied] = useState(false)

    const copyText = () => {
        navigator.clipboard.writeText(background);
        changeCopyState();
    };

    const changeCopyState = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    }
    
    const isDarkColor = chroma(background).luminance() <= 0.08;
    const isLightColor = chroma(background).luminance() >= 0.7;

    return(
        <div
            onClick={copyText}
            style={{background: background}}
            className="ColorBox"
        >
        <div style={{background}} className={`copy-overlay ${copied && "show"}`}/>
        <div className={`copy-msg ${copied && "show"}`}>
            <h1>copied!</h1>
            <p className={isLightColor && "dark-text"}>{background}</p>
        </div>
            <div className='copy-contianer'>
                <div className="box-content">
                    <span className={isDarkColor && 'light-text'}>{name}</span>
                </div>
                <button className={`copy-button ${isLightColor && 'dark-text'}`}>
                    Copy
                    </button>
            </div>
            {showLink && (
            <Link 
              to={`/palette/${paletteId}/${id}`}
              onClick={(e) => e.stopPropagation()}
            >
                <span className={`see-more ${isLightColor && 'dark-text'}`}>More</span>
            </Link>)
            }
        </div>
    )
}

export default ColorBox;