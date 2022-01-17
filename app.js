// We create our own server named app
const express = require('express');

const app = express();

// our first Route
app.get('/home', (request, response, next) => {
    console.log(request);
    response.send('<h1>Welcome Ironhacker.</h1>');
});

app.get('/about', (request, response, next) => {
    console.log(request);
    response.send('<h1>I am Corentin, an IronHack student</h1>');
});

app.get('/work', (request, response, next) => {
    console.log(request);
    response.send('<h1>Here is my biggest achievement so far.</h1>');
});


// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000! '));