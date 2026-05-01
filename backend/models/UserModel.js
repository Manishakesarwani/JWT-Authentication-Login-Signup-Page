const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const validator=require("validator")

const Schema=mongoose.Schema;

const userSchema=new Schema({
    Email: {
        type: String,
        required: true,
        unique: true,
    },
    Password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

//Signup Static method
userSchema.statics.signup=async function(email, password){
    const exists = await this.findOne({Email: email});

    if(!email || !password){
        throw Error("Please specify all the field.");
    }
    else if(!validator.isEmail(email)){
        throw Error("Please specify correct email!");
    }
    else if(exists){
        throw Error("Email already exists. Please login.")
    }
    else if(!validator.isStrongPassword(password)){
        throw Error("Your password is not strong. Please try again.");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({Email: email, Password: hash});

    return user;
}

//Login static method
userSchema.statics.login=async function(email, password){
    const user = await this.findOne({Email: email});

    if(!email || !password){
        throw Error("Please specify all the fields.");
    }
    else if(!validator.isEmail(email)){
        throw Error("Please specify correct email.")
    }
    else if(!user){
        throw Error("Email does not exists. Please signup first.");
    }

    const match = await bcrypt.compare(password, user.Password);

    if(!match){
        throw Error("Incorrect Password.");
    }
    return user;
}


module.exports=mongoose.model("UserModel", userSchema);