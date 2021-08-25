const express = require('express')
const {spawn} = require('child_process')
const app = express()
const port = 5000
const fs = require('fs')
var multer = require('multer')
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.listen(port, () => console.log(`Example app listening on port 
${port}!`))

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

   // console.log(req.file)
   upload(req, res, (err) => {
      if(err) {
         return res.status(500).json(err)
      }

      fs.readFile('public/fileToRead', 'utf8', (err, data) => {
         if(err) {
            console.log('Error: ' + err)
            return
         }
         console.log(data)
         return res.status(200).send(data)
      })
      // return res.status(200).send(req.file)
   })
})

// app.post('/api/upload', (req, res) => {
//     const python = spawn('python', ['../BERT/run_finetuned.py', JSON.stringify(req.body.text)]);   
//     console.log(JSON.stringify(req.body.text)) 
//     python.stdout.on('data', (data) => {
//       console.log('Pipe data from python script ...');
//       const result = data.toString();
//       res.send(data);
//     });
//     python.on('close', (code) => {
//     //    console.log(`child process close all stdio with code ${code}`);
//        res.status(500).end();
//     });
// });
