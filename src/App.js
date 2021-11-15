import logo from './logo.svg';
import './App.css';
// import './CSS/Home.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home'
import AddBook from './components/AddBook'
import EditBook from './components/EditBook'
import ViewBook from './components/ViewBook'
import Login from './components/Login'
import SampleCss from './components/SampleCss'
import SignUp from './components/SignUp';
import EditnewBook from './components/EditnewBook'
function App() {
  return ( 
    <div >
      <BrowserRouter>
      <Switch>
      {/* <Route exact path="/" component={SignUp}/> */}
      <Route exact path="/" component={Home} />
      <Route path="/addbook" component={AddBook}/>
      <Route path="/editbook/:id" component={EditBook}/>
      {/* <Route path="/editnewbook/:id" component={EditnewBook}/> */}
      <Route path="/viewbook/:id" component={ViewBook}/>
      <Route path="/samplecss" component={SampleCss}/>
      {/* <Route path="/login" component={Login}/> */}
                      </Switch>
     </BrowserRouter>
     {/* <Login/> */}
    </div>
);
}

export default App;
