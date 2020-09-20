const express = require('express')
const app = express()
const port = 3000;
const ipRange = require('./ip')


//Set the veiw-engine
app.set('view-engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index.ejs')
  });


  app.post('/', (req, res) => {


    res.render('index.ejs')
  });

  app.post('/', (req, res) => {
   let finalInt = ipRange.ipRangeSize(req.body.ip1, req.body.ip2)
   console.log('Това е лог: ', finalInt)
   res.render('index.ejs')
   
  });
  




// console.log(ipRange.ipRangeSize("10.0.0.1","10.0.0.0") )


//Start server

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


