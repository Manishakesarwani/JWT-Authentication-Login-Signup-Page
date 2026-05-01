import React, { useState } from 'react'
import { useSignupUser } from '../hooks/useSignupUser';

const Signup = () => {

  const {signup, error, isSigning} = useSignupUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async(e) => {
    e.preventDefault();

    await signup(email, password);
    setEmail("");
    setPassword("");
  }


  return (
    <div className='container'>
      <div className='signup'>

      <div>Signup</div>
      <hr />
      {error && <div className='error'>{error}</div>}
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>

        <div>
          <button type='submit' disabled={isSigning}>{!isSigning ? "SIGNUP" : "SIGNING IN..."}</button>
        </div>
      </form>

    </div>
    </div>
  )
}

export default Signup