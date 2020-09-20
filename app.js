const express = require('express')
const app = express()
const port = 3000;
const bodyParser = require('body-parser');
const ipRange = require('./ip')
const ejs = require('ejs');


//Set the veiw-engine
app.set('view-engine', 'ejs')


app.use(bodyParser.urlencoded({
    extended: true
  }));

app.get('/', (req, res) => {
    res.render('index.ejs')
  });

  app.post('/', (req, res) => {
   let finalInt = ipRange.ipRangeSize(req.body.ip1, req.body.ip2)
   console.log('Тhis is log: ', finalInt)
   ejs.renderFile('views/index.ejs', {finalInt: finalInt}, {}, (err, str)=>{
    res.send(str)
   });
   
  });
  
//Start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


