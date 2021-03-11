const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('gym.pug', params);
})

app.post('/', (req, res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    email = req.body.email
    phone = req.body.phone

    let outputToWrite = `Name: ${name}, Age: ${age} years old, Gender: ${gender}, Address: ${address}, Email: ${email}, Phone: ${phone}`
    fs.writeFileSync('output.txt', outputToWrite);
    const params = {'message': 'Your form has been submitted successfully'};
    res.status(200).render('gym.pug', params);

})


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
