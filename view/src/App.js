import React from 'react'
import Upload from './Components/FileUpload/FileUpload.js'
import Result from './Components/Result/Result.js'
import Loading from './Components/Loading/Loading.js'
import bert_image from './img/berty.png'
import {useState} from 'react'
import axios from 'axios'

const App = () => {
  const [selectedFile, setSelectedFile] = useState()
  const [text, setText] = useState()
  const [scoreVisible, setScoreVisible] = useState(false)
  const [score, setScore] = useState(0)
  const [loadingActive, setLoadingActive] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(true)
  
  const fileChangeHandler = (event) => {
      setSelectedFile(event.target.files[0])
      setButtonDisabled(false)
  }

  const textChangeHandler = (event) => {
    if(event.target.value === '') {
      setButtonDisabled(true)
    }
    setText(event.target.value)
    setButtonDisabled(false)
  }

  const setDataToUse = () => {
    let data 
    if(selectedFile !== undefined) {
      data = new FormData()
      data.append('file', selectedFile)
    } else {
      data = {
        'text': text
      }
    }
    return data
  }

  const displayResult = (event) => {
    event.preventDefault()

    const data = setDataToUse()
    console.log(data)

    axios.post('api/uploads', data)
      .then((response) => {
        setLoadingActive(false)
        setScore(response.data)
        setScoreVisible(true)
      })
      .catch((error) =>{
        console.log('Error', error.response.data)
      })
    setScoreVisible(false)
    setLoadingActive(true)
  }

  return (
    <div>
      <Upload 
        displayResult={displayResult} 
        fileChangeHandler={fileChangeHandler} 
        textChangeHandler={textChangeHandler}
        buttonDisabled={buttonDisabled} /> <br />
      {loadingActive && <Loading/>}
      {scoreVisible && <Result score={score}/>}
      <img src={bert_image} alt="BERT"/>
    </div>
  )
}

export default App

