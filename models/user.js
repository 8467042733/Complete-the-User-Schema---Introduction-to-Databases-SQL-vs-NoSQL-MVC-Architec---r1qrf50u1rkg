var mongoose= require("mongoose");

//Write your schema here with name of schema as userSchema
const userSchema = mongoose.Schema({
    name: {
        type: string,
        required: true,
    },
    email: {
        type: string,
        required: true,
    },
    pswd: {
        type: string,
        required: true,
    },
    role: {
        enum: ['buyer','seller']
    }
});

module.exports =mongoose.model("users",userSchema);