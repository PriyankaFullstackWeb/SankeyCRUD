import React from 'react';
// import apicalls from "./fetch/service/apicalls";
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { FaRegMehBlank ,FaEdit} from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import EditBook from './EditBook'
import apicalls from '../fetch/service/apicalls';


// import './CSS/Home.css'
function Home() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = () => {
  apicalls.getAll('/getAll')
  .then((response)=>{
    // console.log(response.data)
    setBookList(response.data);
  })
  .catch((error)=>{
    console.log(error)
  })
  };

  

 const deleteBook=(id)=>{
      apicalls.remove('/delete',id)
      .then((response)=>{
        // console.log(response.data)
        loadBooks()
      })
    
  }
  // console.log(bookList)
//   const viewbook=(id)=>{
// apicalls.get('/get',id)
// .then((response)=>{
//   console.log(response.data)
// })
//   }
  // console.log(bookList)
  return (
    <div class="container m-3">
       <div style={{textAlign:"center"}}><h3>Book Details</h3></div>
    <div class="addBtn" style={{textAlign:"right"}} >
     
      <Link to="/addbook" class="btn btn-dark" >
        Add Book
      </Link>
      {/* <FaRegMehBlank size={20}   />
      <FaEdit/>
      <MdDelete/> */}
    </div>
    <table class="table table-striped ">
      <thead>
        <tr>
          {/* <th>Index</th> */}
          <th>Name </th>
          <th>Author</th>
          {/* <th>Rating</th> */}
          <th>Description</th>
          <th>Price</th>
          <th>Rating</th>
          <th>Edit</th>
          <th>Delete</th>
          <th>View</th>
          {/* <th></th> */}
        </tr>
      </thead>
      <tbody>
        {bookList.map((element, id) => (
          <tr key={id}>
            {/* <td>{element.bookName}</td>*/}
            {/* <td>{id} </td>  */}
            <td>{element.name}</td>
            <td>{element.author}</td>
            <td>{element.description}</td>
            <td>{element.price}</td>
            <td>{element.rating}</td>

            {/* <td><Link className="btn btn-dark" to={`/update/${element.id}`}>Edit</Link></td> */}
            <td><Link className="btn btn-dark" to={`/editbook/${element._id}`}>Edit</Link></td>
            {/* <td><Link className="btn btn-dark" to={`/editnewbook/${element._id}`}>Edit</Link></td> */}

            {/* <td><Link className="btn btn-dark" to={`/editbook`}>Edit</Link></td>  */}
              <td> <button className="btn btn-dark btn-sm"
             onClick={()=>deleteBook(element._id)}
               >Delete</button></td>
              <td><Link className="btn btn-dark btn-sm" to={`/viewbook/${element._id}`} >View</Link></td>
              {/* <td><Link className="btn btn-dark btn-sm" onClick={viewbook(element._id)}>View</Link></td> */}

          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
           

}

export default Home
