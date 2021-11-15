import React, { useEffect, useState } from "react";
import apicalls from "../fetch/service/apicalls";
import { useParams, useHistory } from "react-router-dom";
function ViewBook() {
  const { id } = useParams();
  const history = useHistory();
  const [viewBook, setViewBook] = useState({
    name: "",
    author: "",
    description:"",
    price:"",
    rating: "",
  });


  const loadBook = () => {
    apicalls.get('/get',id)
    .then((response)=>{
      setViewBook(response.data);
    })
    .catch((error)=>{
        console.log(error)
      })
  };

  useEffect(() => {
    loadBook();
  }, []);

//   const viewBook = () => {
//     apicalls.update('/update',id, updatebook);
//     history.push("/");
//   };

//   const handleInputChange = (e) => {
//     setUpdateBook({ ...updatebook, [e.target.name]: e.target.value });
//   };

const cancelBook=()=>{
  history.push("/");
}
 
  return (
    <div className="container">
       <h3 className="text-center mt-3">View book</h3>
      <form>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Book Name
          </label>
          <input
            type="text"
            className="form-control"
            name="bookName"
            value={viewBook.name}
            id="exampleFormControlInput1"
            placeholder="Enter book name"
            readOnly= {true}
            // onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Author Name
          </label>
          <input
            type="text"
            className="form-control"
            name="author"
            value={viewBook.author}
            id="exampleFormControlInput1"
            placeholder="Enter author name"
            readOnly= {true}
            // onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            name="description"
            value={viewBook.description}
            id="exampleFormControlInput1"
            placeholder="Description"
            readOnly= {true}
            // onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
           Price
          </label>
          <input
            type="text"
            className="form-control"
            name="rating"
            value={viewBook.price}
            id="exampleFormControlInput1"
            placeholder="Enter Price"
            readOnly= {true}
            // onChange={handleInputChange}
          />
        </div>
        {/* margin- m,padding-p ,ml-*,mr,mb,mt*,pl-*,pr,pb,pt*/}
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Rating
          </label>
          <input
            type="number"
            className="form-control"
            name="rating"
            value={viewBook.rating}
            id="exampleFormControlInput1"
            placeholder="Enter rating(out of 5)"
            readOnly= {true}
            // onChange={handleInputChange}
          />
        </div>
        <div className="mb-3" style={{textAlign:"center"}}>
          {/* <button className="btn btn-dark" onClick={updateBook}>
            Update Book
          </button> */}
          <button className="btn btn-dark"   onClick={cancelBook}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ViewBook

