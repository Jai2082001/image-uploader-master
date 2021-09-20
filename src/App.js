import { useState } from 'react';
import './App.css';
import Intro from './components/Intro';
import LoadingElement from './components/LoadingElement';
import ImageDisplay from './components/ImageDisplay';

function App() {
  const [loading, setLoading] = useState(false)
  const [imgsrc, setimgSrc] = useState('')
  const [uploadStatus, setUploadStatus] = useState(false) 
  const uploadHandler = (files) => {
    setLoading(true)
    if (files.type && !files.type.startsWith('image/')) {
      alert('file is not image reload amd put image type')
    } else {
      const reader = new FileReader();
      reader.addEventListener('load', (event) => {
        console.log(event.target)
        setimgSrc(event.target.result)
        setLoading(false)
        setUploadStatus(true)
      })
      reader.readAsDataURL(files)
    }
    console.log(files)
  }
  return (
    <div className="App">
      {(!loading && !uploadStatus) && <Intro uploadHandler={uploadHandler}></Intro>}
      {loading && <LoadingElement></LoadingElement>}
      {(!loading && uploadStatus) && <ImageDisplay imgsrc={ imgsrc }></ImageDisplay> }
    </div>
  );
}

export default App;
