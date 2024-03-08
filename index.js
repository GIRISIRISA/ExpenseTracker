const express = require("express");
const mongoose = require("mongoose");
const { Expense } = require("./schema.js");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

async function connectdb() {
    try {
        await mongoose.connect('mongodb+srv://sagiriraj306:giriraj1904@cluster0.n8av59j.mongodb.net/ExpenseTracker?retryWrites=true&w=majority&appName=Cluster0');
        console.log("db connection success");
        const port = process.env.PORT || 7000;

        app.listen(port, function () {
            console.log(`Starting on port ${port}...`);
        });
    } catch (err) {
        console.log("db not connected: " + err);
    }
}

connectdb();

app.get('/get-expenses', async function (request, response) {
    try {
        const expensesData = await Expense.find();
        response.status(200).json(expensesData);
    } catch (error) {
        response.status(500).json({
            "status": "failure",
            "message": "not able to fetch expenses"
        });
    }
});

app.post('/add-expenses', async function (request, response) {
    try {
        await Expense.create({
            "amount": request.body.amount,
            "category": request.body.category,
            "date": request.body.date
        });
        response.status(201).json({
            "status": "success",
            "message": "entry added"
        });
    } catch (error) {
        response.status(500).json({
            "status": "failure",
            "message": "entry not added"
        });
    }
});

app.delete('/delete-expense/:id', async function (request, response) {
    try {
        const expenseEntry = await Expense.findByIdAndDelete(request.params.id);
        if (expenseEntry) {
            response.status(200).json({
                "status": "success",
                "message": "successfully deleted the entry"
            });
        } else {
            response.status(404).json({
                "status": "failure",
                "message": "could not find the expense entry with the given ID"
            });
        }
    } catch (error) {
        response.status(500).json({
            "status": "error",
            "message": "error occurred while deleting the entry"
        });
    }
});

app.patch('/update-expense/:id', async function (request, response) {
    try {
        const expenseEntry = await Expense.findByIdAndUpdate(request.params.id, {
            "amount": request.body.amount,
            "category": request.body.category,
            "date": request.body.date
        });
        if (expenseEntry) {
            response.status(200).json({
                "status": "success",
                "message": "successfully updated the entry"
            });
        } else {
            response.status(404).json({
                "status": "failure",
                "message": "could not find the expense entry with the given ID"
            });
        }
    } catch (error) {
        response.status(500).json({
            "status": "error",
            "message": "error occurred while updating the entry"
        });
    }
});
