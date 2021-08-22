const express = require('express')
const {spawn} = require('child_process')
const app = express()
const port = 5000

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.post('/', (req, res) => {
    const python = spawn('python', ['../BERT/run_finetuned.py', JSON.stringify(req.body.text)]);   
    console.log(JSON.stringify(req.body.text)) 
    python.stdout.on('data', (data) => {
      console.log('Pipe data from python script ...');
      console.log(data)
      const result = data.toString();
      res.send(data);
    });
    python.on('close', (code) => {
    //    console.log(`child process close all stdio with code ${code}`);
       res.status(500).end();
    });
});
   app.listen(port, () => console.log(`Example app listening on port 
   ${port}!`))