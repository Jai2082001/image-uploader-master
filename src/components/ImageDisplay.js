import classes from './ImageDisplay.module.css'

const ImageDisplay = (props) => {
    const copyLink = () => {
        navigator.clipboard.writeText(props.imgsrc)
    }
    console.log(props.imgsrc)
    return (
        <div className={ classes.introDiv }>
            <div className={ classes.tickDisplay }>
                <i className="fas fa-check-circle"></i>
                <h1>Uploaded Successfully</h1>
            </div>
            <div className={ classes.imgDiv }>
                <img src={ props.imgsrc} alt='user selected img'></img>
            </div>
            <div className={ classes.copyDiv }>
                <input type="text" className={classes.copyInput} value={ props.imgsrc }/>
                <button className={classes.copyBtn} onClick={ copyLink }>Copy Link</button>
            </div>
        </div>
    )
}

export default ImageDisplay