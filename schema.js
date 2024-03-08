const mongoose = require('mongoose');
const expenseTrackerSchema = new mongoose.Schema({
    amount:{
        type:Number
    },
    category:{
        type:String
    },
    date:{
       type:Date
    }
})
const Expense=mongoose.model('expenses', expenseTrackerSchema);
module.exports = {Expense};

