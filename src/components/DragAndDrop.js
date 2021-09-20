import  { useEffect, useRef, useState } from 'react'
import classes from './Drag.module.css'


const DragAndDrop = (props) => {
    const dragDiv = useRef()
    let files;
    const [dragging, changeDragging] = useState(false)
    const [dragCounter, changeDragCounter] = useState(0)
    let handleDragEnter = function (event) {
        event.preventDefault()
        event.stopPropagation()
        changeDragCounter((prevState) => {
            return prevState++
        })
        if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
            changeDragging(true)
        }
    }
    let handleDragLeave = function (event) {
        event.preventDefault()
        event.stopPropagation()
        changeDragCounter((prevState) => {
            return prevState--
        })
        if (dragCounter === 0) {
            changeDragging(false)
        }
    }
    let handleDragOver = function (event) {
        event.preventDefault()
        event.stopPropagation()
        files = event.dataTransfer.files
    }
    let handleDrop = function (event) {
        event.preventDefault()
        event.stopPropagation()
        changeDragging(false)
        if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
            props.handleDrop(event.dataTransfer.files[0])
            changeDragCounter(0)    
        }
        
    }
    useEffect(() => {
        let dragDivRef = dragDiv.current
        dragDivRef.addEventListener('dragenter', handleDragEnter)
        dragDivRef.addEventListener('dragleave', handleDragLeave)
        dragDivRef.addEventListener('dragover', handleDragOver)
        dragDivRef.addEventListener('drop', handleDrop)
        console.log()
        return () => {
            dragDivRef.removeEventListener('dragenter', handleDragEnter)
        }
    }, [])
    
    if (dragging) {
        return (
            <div className={ classes.parentDiv }>
                <div className={classes.backgroundDiv}>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                    <path d="M1041 4414 c-118 -32 -237 -125 -293 -230 -53 -99 -58 -139 -58 -495
                    0 -297 2 -329 18 -347 26 -32 64 -37 93 -14 l24 20 5 349 c5 330 6 350 27 395
                    30 66 96 133 162 165 l56 28 1485 0 1485 0 56 -28 c66 -32 132 -99 162 -165
                    l22 -47 3 -1170 2 -1170 -29 35 c-15 19 -175 208 -354 420 -300 354 -331 388
                    -388 418 -50 26 -72 32 -122 32 -64 0 -136 -27 -183 -67 -12 -10 -138 -155
                    -279 -323 -142 -168 -262 -305 -267 -305 -4 0 -166 187 -359 415 -193 228
                    -367 432 -386 452 -55 56 -121 81 -207 76 -82 -4 -129 -24 -181 -76 -20 -20
                    -186 -213 -368 -429 l-332 -392 -3 302 c-2 293 -3 302 -24 324 -28 30 -63 29
                    -93 -2 l-25 -24 0 -719 c0 -440 4 -740 10 -773 33 -178 191 -336 369 -369 74
                    -14 2908 -14 2982 0 178 33 336 191 369 369 14 74 14 2908 0 2982 -32 172
                    -171 318 -347 364 -85 22 -2950 21 -3032 -1z m745 -1706 c15 -7 365 -412 802
                    -928 426 -503 782 -923 790 -933 15 -17 -35 -17 -1139 -15 l-1154 3 -67 33
                    c-76 37 -120 82 -157 162 l-26 55 -3 325 -3 325 381 450 c210 248 401 469 425
                    493 37 35 50 42 84 42 22 0 52 -5 67 -12z m1671 -255 c18 -10 208 -226 433
                    -492 l402 -474 -4 -206 c-3 -205 -3 -206 -32 -264 -35 -68 -98 -129 -164 -160
                    -43 -19 -67 -21 -278 -25 l-231 -4 -359 424 c-197 233 -382 450 -410 483 l-53
                    61 271 319 c148 176 284 328 301 338 18 9 45 17 62 17 17 0 45 -8 62 -17z"/>
                    <path d="M2645 3797 c-113 -38 -207 -123 -246 -225 -30 -78 -30 -186 0 -265
                    31 -80 112 -166 193 -203 55 -25 75 -29 153 -29 76 0 99 5 147 27 76 35 148
                    104 184 175 27 53 29 67 29 163 0 94 -3 111 -28 161 -34 70 -110 142 -185 176
                    -68 32 -184 41 -247 20z m203 -156 c76 -39 122 -115 122 -201 0 -193 -224
                    -298 -370 -172 -54 46 -80 101 -80 172 0 171 176 279 328 201z"/>
                    <path d="M710 3050 c-30 -30 -28 -103 5 -135 52 -52 115 -15 115 68 0 56 -25
                    87 -70 87 -17 0 -39 -9 -50 -20z"/>
                    </g>
                    </svg> 
                </div>
                <div className={ classes.dragDiv } ref={ dragDiv }>       
                </div>
            </div>
        )
    } else {
        return (
            <div className={ classes.parentDiv }>
                <div className={classes.backgroundDiv}>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                    <path d="M1041 4414 c-118 -32 -237 -125 -293 -230 -53 -99 -58 -139 -58 -495
                    0 -297 2 -329 18 -347 26 -32 64 -37 93 -14 l24 20 5 349 c5 330 6 350 27 395
                    30 66 96 133 162 165 l56 28 1485 0 1485 0 56 -28 c66 -32 132 -99 162 -165
                    l22 -47 3 -1170 2 -1170 -29 35 c-15 19 -175 208 -354 420 -300 354 -331 388
                    -388 418 -50 26 -72 32 -122 32 -64 0 -136 -27 -183 -67 -12 -10 -138 -155
                    -279 -323 -142 -168 -262 -305 -267 -305 -4 0 -166 187 -359 415 -193 228
                    -367 432 -386 452 -55 56 -121 81 -207 76 -82 -4 -129 -24 -181 -76 -20 -20
                    -186 -213 -368 -429 l-332 -392 -3 302 c-2 293 -3 302 -24 324 -28 30 -63 29
                    -93 -2 l-25 -24 0 -719 c0 -440 4 -740 10 -773 33 -178 191 -336 369 -369 74
                    -14 2908 -14 2982 0 178 33 336 191 369 369 14 74 14 2908 0 2982 -32 172
                    -171 318 -347 364 -85 22 -2950 21 -3032 -1z m745 -1706 c15 -7 365 -412 802
                    -928 426 -503 782 -923 790 -933 15 -17 -35 -17 -1139 -15 l-1154 3 -67 33
                    c-76 37 -120 82 -157 162 l-26 55 -3 325 -3 325 381 450 c210 248 401 469 425
                    493 37 35 50 42 84 42 22 0 52 -5 67 -12z m1671 -255 c18 -10 208 -226 433
                    -492 l402 -474 -4 -206 c-3 -205 -3 -206 -32 -264 -35 -68 -98 -129 -164 -160
                    -43 -19 -67 -21 -278 -25 l-231 -4 -359 424 c-197 233 -382 450 -410 483 l-53
                    61 271 319 c148 176 284 328 301 338 18 9 45 17 62 17 17 0 45 -8 62 -17z"/>
                    <path d="M2645 3797 c-113 -38 -207 -123 -246 -225 -30 -78 -30 -186 0 -265
                    31 -80 112 -166 193 -203 55 -25 75 -29 153 -29 76 0 99 5 147 27 76 35 148
                    104 184 175 27 53 29 67 29 163 0 94 -3 111 -28 161 -34 70 -110 142 -185 176
                    -68 32 -184 41 -247 20z m203 -156 c76 -39 122 -115 122 -201 0 -193 -224
                    -298 -370 -172 -54 46 -80 101 -80 172 0 171 176 279 328 201z"/>
                    <path d="M710 3050 c-30 -30 -28 -103 5 -135 52 -52 115 -15 115 68 0 56 -25
                    87 -70 87 -17 0 -39 -9 -50 -20z"/>
                    </g>
                    </svg> 
                </div>
                <div className={ classes.dropDiv } ref={ dragDiv }>       
                </div>
            </div>
        )
    }
}

export default DragAndDrop