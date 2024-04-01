const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json()) // for parsing application/json
app.use(cors())

let id=2;
const todoList=[{
    id:1,
    text:'할일 1',
    done:false,
},];

app.get('/api/todo',(req,res)=>{
    res.json(todoList);
});

app.post('/api/todo',(request, response)=>{
    const{text, done}=request.body;
    todoList.push({
        id:id++,
        text,
        done,
    });
    console.log(todoList);
    return response.send("Successfully posted!!!!!!");
});

app.listen(4000, ()=>{
    console.log("server start!!!");
});
