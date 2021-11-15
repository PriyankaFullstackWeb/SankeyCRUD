import React ,{useState}from "react";
import apicalls from "../fetch/service/apicalls";
import {useHistory} from 'react-router-dom'


function AddBook() {
  let history=useHistory();
  const [newBook, setNewBook]=useState({
    name:"",
    author:"",
    description:"",
    price:"",
    rating:""

  })

  const handleInputChange=(e)=>{
    e.preventDefault();
    setNewBook({...newBook, [e.target.name]: e.target.value});
  }

  // const [name,setName]=useState("");
  // const handleInputChange=(e)=>{
  //   setName(e.target.value)

   // }
  //   const [author,setAuthor]=useState("");
  // const handleInputChange1=(e)=>{
  //   setAuthor(e.target.value)

  //   }

// const saveBook=(e)=>{
//   e.preventDefault();
//   apicalls.post("/create",newBook)
//   history.push("/")
// }

const saveBook = () => {
  const { name, author,description,price,rating} = newBook
  console.log(newBook);
apicalls.create("/create",{name,author,description,price,rating})
.then((res) => { console.log(res); })
      .catch((error) => { console.log(error); })
      history.push("/")

}


const cancelBook=()=>{
  history.push("/");
}
  
  return (
    <div className="container">
      <h1 className="text-center h3 mt-3">Add book</h1>
      <form>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Book Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="exampleFormControlInput1"
            placeholder="Enter book name"
           value={newBook.name}
          //  value={name}
            onChange={handleInputChange}
          />
        </div>
        {/* <p>{newBook.name}</p> */}
        {/* <p>{console.log(`${name}`)}</p> */}
        {/* <p>{newBook.name}</p> */}
         <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Author Name
          </label>
          <input
            type="text"
            className="form-control"
            name="author"
            id="exampleFormControlInput1"
            placeholder="Enter author name"
            // value={author}
            value={newBook.author}
            onChange={handleInputChange}
          />
        </div>
        {/* <p>{newBook.author}</p> */}
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
          Description
          </label>
          <input
            type="text"
            className="form-control"
            name="description"
            id="exampleFormControlInput1"
            placeholder="Description"
            value={newBook.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
          Price
          </label>
          <input
            type="number"
            className="form-control"
            name="price"
            id="exampleFormControlInput1"
            placeholder="Enter price"
            value={newBook.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
          Rating
          </label>
          <input
            type="number"
            className="form-control"
            name="rating"
            id="exampleFormControlInput1"
            placeholder="Enter rating(out of 5)"
            value={newBook.rating}
            onChange={handleInputChange}
          />
        </div>
        <div style={{textAlign:"center"}}>
          <button className="btn btn-dark" style={{marginRight:"3px"}} onClick={saveBook}>Save Book</button>
        <button className="btn btn-dark" onClick={cancelBook}>Cancel</button>
          </div>
      </form>
    </div>
  );
}

export default AddBook