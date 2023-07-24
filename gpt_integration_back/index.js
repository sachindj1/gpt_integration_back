const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Configuration , OpenAIApi } = require('openai');


const config = new Configuration({

    apiKey : "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"
})


const openai = new OpenAIApi(config);

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.post('/chat', async (req , res)=>{

const {prompt} = req.body; 
const promptString = prompt.toString();

console.log(prompt);

const completion = await openai.createChatCompletion({

model : "gpt-3.5-turbo",
max_tokens : 500,
messages : [{role : "user" , content : promptString}],
temperature : 0



})
res.send(completion.data.choices[0].message.content);


})

app.listen(2525 , ()=>{
    console.log("port is listening on port 2525")
})