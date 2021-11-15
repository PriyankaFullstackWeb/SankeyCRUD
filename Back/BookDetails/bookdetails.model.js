module.exports = (mongoose)=>{
    let schema = mongoose.Schema({
        name: String,
        author: String,
        description: String,
        price:Number,
        rating:Number,
    })
    let Books = mongoose.model('book',schema);
    return Books;
}