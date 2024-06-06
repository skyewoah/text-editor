let fileText = "";

const fs = require('node:fs');


const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.text());
app.use(cors());

app.get('/', (req, res) => {
    res.send("hello world!");
  });

app.post('/api/upload', (req, res) =>{
    res.send("uploaded!");
    fileText = String(req.body);
      fs.writeFile('./uploads/file.txt', fileText, err => {
        if (err) {
          console.error(err);
        } else {
          // file written successfully
        }
      });
});

  const PORT = process.env.PORT || 3000;


  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });