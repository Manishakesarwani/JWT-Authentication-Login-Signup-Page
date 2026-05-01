const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
    return jwt.sign({_id: _id}, process.env.SECRET_KEY, {expiresIn: '3d'});
}

exports.loginUser = async (req, res) => {

    const {email, password} = req.body;
    try{
        const user = await UserModel.login(email, password);

        const token = createToken(user._id);

        return res.status(200).json({email: user.Email, token});
    }
    catch(e){
        return res.status(400).json({error: e.message});
    }
}

exports.signupUpser = async (req, res) => {
    const {email, password} = req.body;
    try{
        const user = await UserModel.signup(email, password);

        const token = createToken(user._id);

        return res.status(200).json({email: user.Email, token});
    }
    catch(e){
        return res.status(400).json({error: e.message});
    }
}

