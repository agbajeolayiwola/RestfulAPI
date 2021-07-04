const app = require('express')();
const PORT = 8080;

app.get('/tshirt', (req, res)=>{
    res.status(200).send({
        tshirt:'clothe',
        size:'large'
    })
})
app.post('/tshirt/:id', (req, res)=>{
    const {id} = req.params;
    const {logo}=req.body;

    if(!logo){
        res.status(418).send({message: 'We need a logo'})
    }
    res.send({
        tshirt:`this is logo ${logo}`,
    });
});