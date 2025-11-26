
import './ColorBox.css'

function ColorBox({background, name}){

    const copyText = () => {
        navigator.clipboard.writeText(background);
    };

    return(
        <div onClick={copyText} style={{background: background}} className="ColorBox">
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

