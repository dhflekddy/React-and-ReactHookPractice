const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
var cors = require('cors')
 
app.use(cors())

let data = [
    {
        id: 1,
        name: 'RedVelvet',
    },
    {
        id: 2,
        name: 'BTS',
    },
];

app.use(
    bodyParser.json()
);
app.use(
    bodyParser.urlencoded({extended:false})
);

app.get('/api/', async (req, res) => {

    res.json(data);
});

app.post('/api/', async (req, res) => {
    const newData = {
        id: data[data.length - 1].id + 1,
        name: req.body.name,
    };

    data = [
        ...data,
        newData,
    ];

    setTimeout(()=>{
        res.json(newData);
    }, 1000)
});

app.listen(port, ()=>{
    console.log(`server started at ${port}`);
})
    