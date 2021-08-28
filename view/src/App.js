import React from 'react'
import Upload from './Components/FileUpload/FileUpload.js'
import Result from './Components/Result/Result.js'
import Loading from './Components/Loading/Loading.js'
import bert_image from './img/berty.png'
import {useState} from 'react'
import axios from 'axios'

const App = () => {
  const [selectedFile, setSelectedFile] = useState()
  const [scoreVisible, setScoreVisible] = useState(false)
  const [score, setScore] = useState(0)
  const [loadingActive, setLoadingActive] = useState(false)

  const annen = 0
  
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
      <Upload displayResult={displayResult} changeHandler={changeHandler}/> <br />
      {loadingActive && <Loading/>}
      {scoreVisible && <Result score={score} annen={annen}/>}
      <img src={bert_image} alt="BERT"/>
    </div>
  )
}

export default App

