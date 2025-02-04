// whenever we  want to include  any object or module we should use require function

const express = require('express')
const app = express()  // application initialze
 const route = require('./route/route')  //mounting the routes

 app.use('/api',route)

///---/api/student

//----/api/admin


//port = 
const port = 3333
//inbuilt middleware to parse  req.body
app.use(express.json())
express.json()
//start your app or server


//middleware --login and auth ,validation

const logginMiddleWare = function(req,res,next){
    console.log("login middleware")
    next()
}
app.use(logginMiddleWare)

const authenticationMiddleWare = function(req,res,next){
    console.log("auth middleware")
    res.send("side chalo route handler par")
    // next()
}

app.use(authenticationMiddleWare)
const validationMiddleWare = function(req,res,next){
    console.log("validate middleware")
    next()
}

app.use(validationMiddleWare)

//**********order matter  */
app.get('/',(req,res)=>{
    console.log("me route hanler hu")

    console.log(req.body)
    res.send('hello world') //route handler
})

app.listen(port,()=>{
    console.log("start the server")
})

//MiddleWare -- function  process between the request and response like wantt to console , error handling ,authentication, validation etc
