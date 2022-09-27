// const http = require('http')

// http.createServer((req,res) => {
//    res.end('I Love You ❤️')
// }).listen(4000)           //listen: used to listen to some ports
// //type localhost:3000 on browser to get o/p

const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Response from root");
});

app.get("/greet", (req, res) => {
  res.send("Welcome!....");
});

app.get("/greet1", (req, res) => {
  res.send("Help");
});

//read Item record with id
app.get('/Items/:id',(req,res) => {
  try{
    const Item = Items.find((Item) =>
    Item.id=req.params.id);
    res.send(Item);
  }catch(error){
    res.send(error)
  
  }

})

//create a Item record
const Items = [];
app.post("/Items", (req, res) => {
  try {
    const Item = req.body;
    Items.push(Item);
    res.send(Items);
  } catch (error) {
    res.send(error);
  }
});

//read Item record
app.get("/Items", (req, res) => {
  try {
    res.send(Items);
  } catch (error) {
    res.send(error);
  }
});



//delete Item
app.delete("/Items/:id",(req, res) => {
  try{
    const index = Items.findIndex((Item) =>
    Item.id == req.params.id);
    Items.splice(index, 1);
    res.send("Deleted")
  }catch(error){
    
    
      res.send(error)
    
 
  }
})

app.listen(4100, () => {
  console.log("SErver is running on port 4100");
});
