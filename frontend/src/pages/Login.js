import { useState } from 'react'
import { useLoginUser } from '../hooks/useLoginUser';

const Login = () => {


  const {login, error, isLogged} = useLoginUser()
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  


  const handleLogin = async (e) => {

    e.preventDefault();

    await login(email, password);
    setEmail("");
    setPassword("");

  }

  return (
    <div className='container'>
      <div className='login'>
      <div>Login</div>
      <hr />
      {error && <div className='error'>{error}</div>}
      <form onSubmit={handleLogin}>

        <div>
          <label htmlFor="email">Email</label>
          <input name='email' type='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input name='password' type='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>

        <div>
          <button type='submit' disabled={isLogged}>{!isLogged ? "LOGIN" : "LOGGING IN..."}</button>
        </div>

      </form>
    </div>
    </div>
  )
}

export default Login