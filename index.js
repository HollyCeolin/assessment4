const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

//const { getCompliment } = require('./controller')
//const { getFortune } = require('./controller')
//app.get('/api/compliment', getCompliment);
//app.get('/api/compliment', getFortune);

const {
    getDog,
    deleteDog, 
    createDog, 

} = require('./controller')

app.get('/api/dogs', getDog);
app.delete('/api/dogs/:id', deleteDog);
app.post('/api/dogs', createDog);




app.listen(4000, () => console.log("Server running on 4000"));