import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser'

const PORT = process.env.PORT
const app = express();

app.use(bodyParser.json())

var userDb = [{user:{name: 'james', username: 'jamesisaboss', email: 'jamesisaboss@gc.com', password: 'b0ssJAm3s'}}];

app.use(express.static('public'));

// Handle GET request for user login
app.get("/sign-in", async (req,res) => {
    try{
        res.send(userDb)
        console.log(200)
    } catch{
        console.log(500)
    }
});

// Handle POST request for user creation
app.post("/new-user", (req, res) => {
    try{
        let message = ""
        
        // check whether or not user already exists
        for(let i = 0; i < userDb.length; i++)
        {
            if(req.body.u == userDb[i]['user']['username'])
            {
                console.log("User already exists")
                message = "User already exists"
            }

            else if(req.body.e == userDb[i]['user']['email'])
            {
                console.log("Account already exists for this email")
                message = "Account already exists for this email"
            }
        }

        userDb.push({user:{name: req.body.n, username: req.body.u, email: req.body.e, password: req.body.p}})
        if (message === "")
            message = "Welcome " + name + "!"
        res.send(message)
    }
    catch{
        console.log(500)
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
