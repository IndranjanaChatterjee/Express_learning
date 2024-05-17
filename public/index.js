const { MongoClient } = require('mongodb');

/* const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const { error } = require("console");

const source = path.join(__dirname, "../files");
const pathhb = path.join(__dirname, "../public/partials");*/
const password =
  "mongodb+srv://Indranjana:indranjana123@harrycuster.spwmk0w.mongodb.net/?retryWrites=true&w=majority&appName=harryCuster";

  const HarryDB = new MongoClient(password);

  async function run() {
    try {
        await HarryDB.connect();
        const DATABASE = HarryDB.db('Harrydb');
        const USERCOLLECTION = DATABASE.collection('users');
        const db={
            name:"Harry",
            role:"wizard",
            blood:"half blood",
        }
        await USERCOLLECTION.insertOne(db);
        
      
    }
    catch(e)
    {
        console.log(e);
    }
    finally
    {
        await HarryDB.close();
        
    }
    
  }
  run();
 
 

/* console.log(source);

// to use the view engine
app.set("view engine", "hbs");
app.use(express.static(source));
hbs.registerPartials(pathhb);

app.get("/", (req, res) => {
  res.render("index", {
    USER: "PIU",
  });
});
app.get("*", (req, res) => {
  res.render("404", {
    errorComment: "OOps not found",
  });
});

app.listen(8000, () => {
  console.log("Running in port 8000");
});*/
