import React from 'react'
import Upload from './Components/FileUpload/FileUpload.js'
import bert_image from './img/berty.png'
import {useState} from 'react'
import axios from 'axios'

const App = () => {
  const [selectedFile, setSelectedFile] = useState()
  
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const displayResult = (event) => {
    event.preventDefault()

    const data = new FormData()

    data.append('file', selectedFile)

    axios.post('api/uploads', data)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) =>{
        console.log('Error', error.response.data)
      })
  }

  return (
    <div>
      <Upload displayResult={displayResult} changeHandler={changeHandler}/>
      <img src={bert_image} alt=""/>
    </div>
  )
}

export default App

