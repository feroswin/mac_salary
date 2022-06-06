const { urlencoded } = require('express');
const express = require('express');
const app = express();
const port = 5000;

app.use(urlencoded({extended: false}));
app.use('/static', express.static(__dirname + '/public'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index');
})

app.listen(port, () => {
  console.log('Server start');
})
