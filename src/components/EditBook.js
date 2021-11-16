import React ,{useState,useEffect}from 'react'
import apicalls from '../fetch/service/apicalls';
import {useParams,useHistory} from 'react-router-dom'
function EditBook() {
  const {id}=useParams();
  const history=useHistory();
  const [updatebook, setUpdateBook] = useState({
    name: "",
    author: "",
    description: "",
    price:"",
    rating:""
  });
  const loadBook = () => {
    apicalls.get('/get',id)
    .then((response)=>{
        setUpdateBook(response.data);
    })
    .catch((error)=>{
        console.log(error)
      })
  };

  useEffect(() => {
    loadBook();
  }, []);
  
  
  // useEffect(() => {
  //   loadBooks();
  // }, []);

  const loadBooks = () => {
    const { name, author,description,price,rating} = updatebook
  apicalls.update('/update',id,{name, author,description,price,rating})
  .then((response)=>{
    console.log(response.data)
    setUpdateBook(response.data);
  })
  .catch((error)=>{
    console.log(error)
  })
  history.push("/")
  };
  const handleInputChange = (e) => {
    setUpdateBook({ ...updatebook, [e.target.name]: e.target.value });
  };
  // const updateBook = () => {
  //   apicalls.put(`/update/${id}`, updatebook);
  //   history.push("/");
  // };
  
  
  // const loadBook = async () => {
  //   let res = await apicalls.get(`/edit/${id}`);
  //   console.log(res);
  //   setUpdateBook(res.data);
  // };
  // useEffect(() => {
  //   loadBook();
  // }, []);

  


    return (
      <div className="container">
         <h3 className="text-center mt-3">Edit book</h3>
      <form>
        <div className>
          <label for="exampleFormControlInput1" className="form-label">
            Book Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={updatebook.name}
            id="exampleFormControlInput1"
            placeholder="Enter book name"
            onChange={handleInputChange}
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
            value={updatebook.author}
            id="exampleFormControlInput1"
            placeholder="Enter author name"
            onChange={handleInputChange}
          />
        </div>
        {/* margin- m,padding-p ,ml-*,mr,mb,mt*,pl-*,pr,pb,pt*/}
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            name="description"
            value={updatebook.description}
            id="exampleFormControlInput1"
            placeholder="Description"
           onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            name="price"
            value={updatebook.price}
            id="exampleFormControlInput1"
            placeholder="Enter price"
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
            value={updatebook.rating}
            id="exampleFormControlInput1"
            placeholder="Enter rating (out of 5)"
           onChange={handleInputChange}
          />
        </div>
        <div  style={{textAlign:"center"}}>
          <button className="btn btn-dark mr-3" style={{marginRight:"3px"}} 
          onClick={loadBooks}
          >
            Update Book 
          </button>
          <button className="btn btn-dark">
            Cancel
          </button>
        </div>
      </form>
    </div>
    )
}

export default EditBook
