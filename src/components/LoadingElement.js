import React from 'react'
import classes from './LoadingElement.module.css'
import Loader from './Loader'

const LoadingElement = (props) => {
    return (
        <div className={ classes.loadingElement}>
            <p>Uploading</p>
            <Loader></Loader>
        </div>
    )
}

export default LoadingElement