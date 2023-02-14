// import the user model
const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

// action
module.exports.signUp = async (req, res) => {
    try{
        // 1-> get the data from the req.body
        console.log("req.body", res.body);
        const { name, email, password, confirmPassword } = req.body;


        // 2-> check if password and confirmPassword are same or not
        if(password !== confirmPassword) {
            return res.status(400).json({
                message: "Password and ConfirmPassword does not match",
                data: {}
            });
        }

        // 3-> check if the user exist by the given email or not
        const exitingUser = await User.findOne({email: email});
        // it goes and find the user having the given email
        // if found then it returns the object having the user details
        // else it return null
        if(exitingUser) {
            return res.status(400).json({
                message: "User already exist!",
                data: {}
            })
        }

        const hashPassword = bcrypt.hashSync(password, saltRounds);

        // 4-> create the user
        const user = await User.create({
            name: name,
            email: email,
            password: hashPassword,
        });

        // 5-> send the response
        return res.status(200).json({
            message: "User created successfully!",
            data: {
                name: name,
                email: email
            }
        }) 
    }catch(error){
        // send the error response
        return res.status(500).json({
            message: "Opps something went wrong!",
            data: {
                error: error,
            }
        })
    }
}

// signin controller action
module.exports.signIn = async (req, res) => {
    try{
        //1-> fetch email and password from the req.body object
        const { email, password } = req.body;

        //2-> fetch user data by using the email id
        const user = await User.findOne({email: email});

        //3-> check whether user exist or not
        if(!user) {
            return res.status(400).json({
                message: "Please signup to use our platform!",
                data: {}
            })
        };

        //4-> compare both the credentials
        //4.a-> else responsd with email/password is incorrect

        const isPasswordMatched = bcrypt.compareSync(password, user.password);
        if(!isPasswordMatched) {
            return res.status(400).json({
                message: "email/password does not match!",
                data: {}
            })
        };

        const token = jwt.sign({ email: user.email }, '4h9K1XeLlA', { expiresIn: '1h' });
        //4.b-> if true then give positive response
        return res.status(200).json({
            message: "Successfully signedIn",
            data: {
                token: token,
            }
        })
        
    }catch(error){
        return res.status(500).json({
            message: "Opps something went wrong!",
            data: {
                error: error,
            }
        })
    }
}