import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'


function Login() {
    return (
        <div class="container">
            
{/* <div className="bg-img">
    <div className="content">
        <header>Login Form</header>
        <form action="#">
            <div className="field">
                <span className="fa fa-user"></span>
                <input type="text" placeholder="Email"/>
            </div>
            <div className="field space">
            <span className="fa fa-lock"></span>
                <input type="password" placeholder="Password"/>
            </div>
            <div className="pass">
                <a href="#">Forgot Password? </a>
            </div>
            <div className="field ">
                <input type="submit" placeholder="Email" value="LOGIN" /> 
            </div>
            <div className="login">Or login with</div>
            <div className="link">
                <div className="facebook">
                    <i class="fab fa-facebook-f"><span>Facebook </span></i>
                </div>
                <div className="instagram">
                    <i class="fab fa-instagram"><span>Instagram</span></i>
                </div>
            </div>
            <div className="signup">
                Don't have account?
                <a href="#">Signup Now</a>
            </div>
        </form>
    </div>
</div> */}
<form class="form" id="login">
<h1 class="formTitle">
    Login
</h1>
<div class="form-message"></div>
<div class="inputGroup">
   <input type="text" class="formInput form-control" placeholder="Username or Email"/>
   {/* <div class="form-message">This is an error message</div> */}
  
</div>
<div class="form-message"></div>
<div class="inputGroup">
    <input type="text" class="formInput form-control" placeholder="Password"/>
    {/* <div class="form-message">This is an error message</div> */}
</div>
<button type="submit" class="form_button">Continue</button>
<p class="form-text">

    {/* <a href="" class="form-link">Forgot your password?</a> */}
    <Link to="">Forgot your password?</Link>
</p>
<p class="form-text">
    {/* <a class="form-link" href="./" id="linkCreateAccount"></a> */}
    <Link to="/">
    Dont have an account? create new
      </Link>
</p>
   </form>
  
  
		</div>
           
  

    )
}

export default Login
