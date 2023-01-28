import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { app } from "../components/Firebase"


const auth = getAuth(app)

const SignUp = () => {

  const [email, setEmail] = useState()
  const [pass, setPass] = useState()

  const createUser = () =>{ 
      createUserWithEmailAndPassword(
                      auth, email, pass
                      ).then((res) => alert("User created successfully !! "))

   setEmail("")
   setPass("")
  
  }


  return (
     <>
       <h2>Sign Up Here</h2>
      <div className='signup-page'>
      
         <label>Email</label>
         <input type="email" required placeholder='Enter your email' 
          onChange={(e) => setEmail(e.target.value)} value={email}></input>

         <label>Password</label>
         <input type="password" required placeholder='Enter your password'
          onChange={(e) => setPass(e.target.value)} value={pass}></input>

         <button onClick={createUser} className='signup'>Sign Up</button>
 
      </div>
     </>
  )
}

export default SignUp;
