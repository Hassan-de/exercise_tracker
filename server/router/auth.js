const jwt = require('jsonwebtoken');
const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');
require("../db/conn");
const User = require("../model/userSchema"); 
const authenticate = require("../middleware/authenticate");

router.get('/', (req, res) => {
    res.send(`Hello world from router`)
});



router.post('/register', async (req, res) => {
    const { name, email, phone, password, cpassword } = req.body;
    

    if(!name || !email || !phone || !password || !cpassword ) {
        return res.status(422).json({error: "Fill the field properly"});
    }

    try {
        const userExist = await User.findOne({email:email});
        
        if(userExist) {
            return res.status(422).json({error: "Email already exists"});
        }
        else if(password !== cpassword){
            return res.status(422).json({error: "password are not matching"}); 
        }
        else{
            const user = new User({ name, email, phone, password, cpassword});
        await user.save();  
        res.status(201).json({message: "User registered successfully"});
        }

    } catch(err)
    {
        console.log(err);
    }
});


//login route

router.post("/signin", async  (req, res) => {
    

    try {
        let token;
        const {email,  password } = req.body;

        if (!email || !password) {
            return res.status(400).json({error:"Fill the fields properly"});
        }

        const userLogin = await User.findOne({ email: email  });
        
        

        if(userLogin) {            
            const isMatch = await bcrypt.compare(password, userLogin.password );
            
            token = await userLogin.generateAuthToken();
            console.log(token)
            
            res.cookie("jwtoken", token, {
                expires: new  Date(Date.now() + 25892000000),
                httpOnly: true
            });
        if(!isMatch){
            res.status(400).json({error: "Invalid Credentials Password"});
        }else{
            res.json({message: "User signed in successfully"});
        }    
        } else {
            res.status(400).json({error: "Invalid Credentials"});
        }
        

    }catch(err){
        console.log(err);
    }


})





// page with personal data
router.get('/Main',authenticate, (req, res) => {
    console.log("About us page");
    res.send(req.rootUser);
});

//logout 

router.get('/logout', (req, res) => {
    console.log("Hello from logout");
    res.clearCookie("jwtoken", {path:'/'});
    res.status(200).send("User Logout");
});

module.exports = router;
