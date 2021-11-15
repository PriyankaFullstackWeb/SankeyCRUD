const BookDetails = require('./index');

const Books = BookDetails.books;



exports.create = (req,res)=>{
    console.log(req.body);
    const book = new Books({
        name:req.body.name,
        author:req.body.author,
        description:req.body.description,
        price:req.body.price,
        rating:req.body.rating,
    });

    book.save(book)
        .then((data)=>{
            res.send(data)
        })
}


exports.getAll = (req, res) => {
    Books.find()
        .then((data) => {
            res.send(data)
        })
}

exports.get = (req, res) => {
    const id = req.params.id;
    Books.findById(id)
    // ({ $text: { $search: query } })
        .then((data) => {
            res.json(data)
        })

}

exports.updateTask = (req, res) => {
    const id = req.params.id;
    console.log(id);
    console.log(req.body);
    const { name, author, description,price,rating } = req.body
    Books.findByIdAndUpdate( id , { name, author, description ,price,rating})
        .then((data) => {
            res.json(data);
        })
}
    // Task.findByIdAndUpdate( query , req.body, {new:true, select:"tasktitle taskdetails"})
    //     .then((data) => {
    //         res.json(data);
    //     })
// }

exports.delete = (req,res) => {
    const id = req.params.id;
    Books.findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
}