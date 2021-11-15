module.exports = (app)=>{
    const books = require('./bookdetails.controller');
    
    var router = require('express').Router();

    // router.post("/create",users.create)

    // app.use("/api/users",router)
    router.post("/create", books.create)
    router.get('/getAll', books.getAll)
    router.get('/get/:id', books.get)
   
    
    router.delete('/delete/:id', books.delete)
    router.put('/update/:id', books.updateTask)

    app.use("/api/books", router)
}