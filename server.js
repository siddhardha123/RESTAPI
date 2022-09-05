const express = require('express')
const mongoose = require('mongoose')
const BrandName = require('./models/model')
const app = express();
app.use(express.json())
mongoose.connect(
  "mongodb+srv://sid123123:sid123123@cluster0.wzjydwy.mongodb.net/?retryWrites=true&w=majority"
).then(()=>{
    console.log("DB is connected..")
}).catch(err => console.log(err));

app.post('/addbrands', async (req,res)=>{
          const {brandname} = req.body 
          try{
              const  newData = new BrandName(
                 {brandname}
              );
             await newData.save();
              return res.json( await BrandName.find())
          }
          catch(err){
             console.log(err.message);
          }
})

app.get('/',(req,res)=>{
       res.send("<h1>hello world!!!!</h1>")
})

app.get('/getbrands', async (req,res)=>{
      try{
           const alldata = await BrandName.find();
           return res.json(alldata);
      }
    catch(err){
          console.log(err.message)
    }
})

app.get('/getbrands/:id', async (req,res)=>{
      try{
          const Data = await BrandName.findById(req.params.id)
          return res.json(Data);
      }
      catch(err){
          console.log(err.message)
      }
})

app.delete('/deletebrand/:id',async (req,res)=>{
       try {
           await BrandName.findByIdAndDelete(req.params.id);
           return res.json( await BrandName.find())
       } catch (err) {
         console.log(err.message);
       }
})
app.listen(3000,()=>{
    console.log("server is running...")
})