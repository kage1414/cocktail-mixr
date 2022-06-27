const express = require('express')
const path = require('path')
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser')
const publicPath = path.join(__dirname, '..', 'web', 'public');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/', express.static(publicPath, { dotfiles: 'allow' }));


app.listen(process.env.PORT || PORT, () => {
  console.log('listening on port ', PORT)
})