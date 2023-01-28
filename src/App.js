import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"



function App() {
  return (
    <>

    <div className='main-div'>
      
    <h1>SIGN UP & SIGN IN WITH FIREBASE</h1><br/>
    
     <SignUp/> <br/><br/>
     <SignIn />

    </div>

    </>
  );
}

export default App;
