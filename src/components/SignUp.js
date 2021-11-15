import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import FormDetails from './FormDetails'
import validate from './ValidateInfo'

function SignUp() {
    const { } = FormDetails(validate);
    const[user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        password:"",
        cpassword:"",

    })
    const getInfo=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    return (
        <div class="container">
             <form class="form" id="signup">
    <h1 class="formTitle">
        Create Account
    </h1>
    <div class="form-message"></div>
    <div class="inputGroup">
       <input type="text" class="formInput form-control" placeholder="Name" name="name" value={user.name} onChange={getInfo}/>
       {/* <div class="form-message">This is an error message</div> */}
      
    </div>
    <div class="inputGroup">
       <input type="text" class="formInput form-control" placeholder="Username" name="username" value={user.username} onChange={getInfo}/>
       {/* <div class="form-message">This is an error message</div> */}
      
    </div>
    <div class="inputGroup">
       <input type="text" class="formInput form-control" placeholder="Email" name="email" value={user.email} onChange={getInfo}/>
       {/* <div class="form-message">This is an error message</div> */}
      
    </div>
    {/* <div class="inputGroup">
        <input type="text" class="formInput form-control" placeholder="Email address" value={user.firstName} onChange={getInfo}/>
        <div class="form-message">This is an error message</div>
       
     </div> */}
    <div class="form-message"></div>
    <div class="inputGroup">
        <input type="text" class="formInput form-control" placeholder="Password" value={user.password} onChange={getInfo}/>
        {/* <div class="form-message">This is an error message</div> */}
       
     </div>
     <div class="inputGroup">
        <input type="text" class="formInput form-control" placeholder="Confirm Password" value={user.cpassword} onChange={getInfo}/>
        {/* <div class="form-message">This is an error message</div> */}
       
     </div>
    <button type="submit" class="form_button">Continue</button>
   
    <p class="form-text">
        {/* <a class="form-link" href="./"id="linkLogin">Already have an account? Sign in</a> */}
        <Link to="/login" >
        Already have an account? Sign in
      </Link>
    </p>
       </form>
        </div>
    )
}

export default SignUp
