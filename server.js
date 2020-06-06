const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 6969 ;

app.use(bodyParser.json());


// Production script (dont know if its right but we'll figurre it out later)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
  
    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
}  


app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});