import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../AuthProvider/Context';
import toast from 'react-hot-toast';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';


const Login = () => {
  const {login , googleLogin} = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location);
  const from = location.state || '/';
  const captchaRef = useRef(null);
  const [disabled,setDisabled] = useState(true)
  useEffect(()=>{
    loadCaptchaEnginge(6); 
   },[])
  const handleLogin = async e =>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    // Google Signing
   login(email,password)
   .then(result=>{
   console.log('sign in' , result.user)
   navigate(from)
   })
   .catch(err =>{
    console.log(err);
   })
   }
   

  

  
  const handleGoogleSignIn = async () => {
    try {
      await googleLogin()
      toast.success('Signin Successful')
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
  }
  const handleValidCaptcha = () =>{
    const user_captcha_value  = captchaRef.current.value
    if(validateCaptcha(user_captcha_value)){
      setDisabled(false)
    }
  }

    return (
    <div className='my-8'>
          <div className="card bg-pink-400 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input name='text' ref={captchaRef} type="captcha" placeholder="type valid captcha avobe" className="input input-bordered" required />
          <button  onClick={handleValidCaptcha} className='btn btn-xs mt-2'> validation

          </button>
          
        </div>
        <div className="form-control mt-6">
          <button disabled={disabled} className="btn btn-primary">Login</button>
        </div>
        Or <button onClick={handleGoogleSignIn}>
          google
        </button>
      </form>
      <p className='text-center pb-6'>Don't have An Account <Link className='text-yellow-400' to={'/register'}>Registration</Link></p>
    </div>
    </div>
    );
  };

export default Login;