const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RecipeModel = require('./Models/Recipe');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/mydb')

app.get('/getUsers', (req,res)=>{
    RecipeModel.find().then(Recipe => res.json(Recipe)).catch(err => res.json(err))
})
app.listen(3001, () => {
    console.log(`Server running`);
});

