import express from 'express';
import fetch from 'node-fetch';
import 'dotenv/config';
import asyncHandler from 'express-async-handler';
import bodyParser from 'body-parser'

const PORT = process.env.PORT
const app = express();

app.use(bodyParser.json())

var userDb = [{user:{name: 'james', username: 'jamesisaboss', email: 'jamesisaboss@gc.com', password: 'b0ssJAm3s'}}];

app.use(express.static('public'));

// Handle GET requests to '/random-person' with a middle-ware function and a function to send a request
// to "https://randomuser.me/api/", receive the response at the express server, and then return the response 
// back to to random.js to then be displayed in the browser.

// handle GET request and send a request to "https://randomuser.me/api/" and return that data in JSON form 
//  back to be dealt with by random.js
app.get("/sign-in", async (req,res) => {
    try{
        res.send(userDb);
        console.log("User retrieved")
    } catch{
        console.log(500)
    }
});

app.post("/new-user", (req, res) => {
    try{
        userDb.push({user:{name: req.body.n, username: req.body.u, email: req.body.e, password: req.body.p}})
        console.log(userDb)
        res.json(req.body)
    }
    catch{
        console.log(500)
    }
});


// Note: Don't add or change anything below this line.
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});