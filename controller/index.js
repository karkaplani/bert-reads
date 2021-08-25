const express = require('express')
const app = express()

const cors = require('cors')

const {spawn} = require('child_process')

const fs = require('fs')
var multer = require('multer')

const port = 5000

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.listen(port, () => console.log(`Example app listening on port 
${port}!`))

let result = ''

const calculateScore = (text) => {
   return new Promise((resolve, reject) => {
      const python = spawn('python', ['../BERT/run_finetuned.py', text]);   
      python.stdout.on('data', (data) => {
         result = data
      })
      python.on('close', (code) => {
         console.log(`child process close all stdio with code ${code}`)
         resolve()
      })
   })
}

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, 'public')
   }, 
   filename: (req, file, cb) => {
      cb(null,'fileToRead')
   }
})

const upload = multer({storage}).single('file')

app.post('/api/uploads', (req, res) => {

   upload(req, res, (err) => {
      if(err) {
         return res.status(500).json(err)
      }
      fs.readFile('public/fileToRead', 'utf8', (err, data) => {
         if(err) {
            console.log('Error: ' + err)
            return
         }
         calculateScore(data)
            .then(() => {
               return res.status(200).send(result)
            })
      })
   })
})