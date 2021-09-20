import react, { useState } from 'react'
import DragAndDrop from './DragAndDrop'
import classes from './Intro.module.css'

const Intro = (props) => {
    const [divDisplay, changeDivDisplay] = useState(false)

    const uploadHandler = (dataTransfer) => {
        props.uploadHandler(dataTransfer)
    }

    const btnUploadHandler = (event) => {
        props.uploadHandler(event.target.files[0])
    }
    
    return (
        <div className={classes.introDiv}>
            <h1>Upload Your Image</h1>
            <p>File Should be Jpeg, Png</p>
            <div className={ classes.dragDiv }>
                <DragAndDrop handleDrop={ uploadHandler }></DragAndDrop> 
            </div>
            <p>Or</p>
            <label className={classes.inputFile} onChange={ btnUploadHandler }>
            <input type="file"/>
            Custom Upload
            </label>
        </div>
    )
}
export default Intro