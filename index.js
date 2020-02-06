const express = require('express');
const Caesar = require('caesar-salad').Vigenere;
const cors = require('cors');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.post('/encode', (req, res)=> {
  res.send({"encoded": Caesar.Cipher(req.body.password).crypt(req.body.message)});
});

app.post('/decode', (req, res)=> {
  res.send({"decoded": Caesar.Decipher(req.body.password).crypt(req.body.message)});
});

app.listen(port, () => {
  console.log(`Server started on ${port} port!`);
});