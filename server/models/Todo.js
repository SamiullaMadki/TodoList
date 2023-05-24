const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"title is required"],
    },
    description:{
        type:String,
        required:[true,"title is required"],
    },
    isCompleted:{
        type:Boolean,
        default:false,
    }
},{timestamps:true}
);

module.exports=mongoose.model("Todo",todoSchema);