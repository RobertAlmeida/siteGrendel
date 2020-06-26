let express = require('express');
let app = express();

app.use(express.static(__dirname));

app.get('*', function (req, res) {

  console.log('');
  console.log('');
  console.log('');
  console.log('');
  console.log('');
  console.log('MAIS OU ACESSO!!!!!!!!!!!!!!');
  console.log('');
  console.log('');
  console.log('');
  console.log('');
  console.log('');

  res.redirect('/');

});

let port = process.env.PORT || 3000
app.listen(port);
console.log('App ROdando', port);