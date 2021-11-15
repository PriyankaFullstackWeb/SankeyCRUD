// import Express
const express = require('express');

// import cross Origin resource sharing
const cors = require('cors');

const port = 8283;

const app = express();
const corsOptions = {
    origin: 'http://localhost:3000'
};
app.use(cors(corsOptions));

// parse all content in the form of json
app.use(express.json());



    



const BookDetails = require('./BookDetails/index')

BookDetails.mongoose
    .connect(BookDetails.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    console.log(BookDetails.url))
    .then(() => {
        console.log("database connected!!!");
    })
    
    require('./BookDetails/bookdetails.routes')(app);
    
    app.listen(port, () => {
        console.log(`this app is running on ${port}`);
    })

