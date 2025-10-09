const express = require('express');

const app = express();

const port  = 2004;

app.get('/',(req, res) => {
    res.send("Howdy peeps");
});

app.listen( port, () => {
    console.log(`we listend on port: ${port}`);
} );


app.post('/', (req,res) => {
    res.send('Post req');
});

app.put('/user', (req,res) => {
    res.send('put req at /user')
});

//delete req
app.delete('/user', (req,res) => {
    res.send('got a del req at /user');
});