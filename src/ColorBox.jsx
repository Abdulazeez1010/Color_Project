
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    ColorBoxDiv,
    CopyOverlay,
    CopyMessage,
    CopyText,
    BoxContent,
    ColorName,
    CopyButton,
    SeeMore
 } from './styles/ColorBoxStyles';

function ColorBox({background, name, paletteId, id, showingFullPalette}){    
    const [copied, setCopied] = useState(false)

    const copyText = () => {
        navigator.clipboard.writeText(background);
        changeCopyState();
        console.log(background)
    };

    const changeCopyState = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    }

    return(
        <ColorBoxDiv
            onClick={copyText}
            style={{background: background}}
            showingFullPalette = {showingFullPalette}
        >
        <CopyOverlay copied={copied} background={background}/>
        <CopyMessage  copied={copied} background={background}>
            <h1>copied!</h1>
            <CopyText background={background}>{background}</CopyText>
        </CopyMessage>
            <div>
                <BoxContent>
                    <ColorName background={background}>{name}</ColorName>
                </BoxContent>
                <CopyButton background={background}> Copy </CopyButton>
            </div>
            {showingFullPalette && (
            <Link 
              to={`/palette/${paletteId}/${id}`}
              onClick={(e) => e.stopPropagation()}
            >
                <SeeMore background={background}>More</SeeMore>
            </Link>)
            }
        </ColorBoxDiv>
    )
}

export default ColorBox;