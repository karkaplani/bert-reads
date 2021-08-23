import React from 'react'
import Upload from './Components/FileUpload/FileUpload.js'
import bert_image from './img/berty.png'

const App = () => {
  return (
    <div>
      <Upload/>
      <img src={bert_image} alt=""/>
    </div>
  )
}

export default App

