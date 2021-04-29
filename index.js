const express = require('express');
const app = express();
const port = 3000 ;
const connection = require('./db-config');
const routes = require('./routes/index');

app.use(express.json())
app.use('/Inbox', routes.Inobx)

app.get('/list', (req, res) => {
   connection.query('SELECT * FROM list', (err, result) => {
       if (err) {
           res.status(500).send('problem retrieving');
       }
       else {
           res.status(200).json(result)
       }
  
})});

app.listen(port, () => {
    console.log(`Yello server is running on ${port}`)
});