import React, { useContext } from 'react';
import AuthContext from '../../AuthProvider/Context';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handleResister = async e =>{
        e.preventDefault()
        const form =e.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);
        try{ 
            const result = await
        createUser(email,password)
        .then( console.log(result))
       toast.success('Successfully signup')

        
        } catch (err){
            console.log();
            toast.error(err?.message)
        }
    }
    return (
        <div className='my-8 '>
            <div className="card bg-pink-400 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleResister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
            {
                
            }
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className='text-center  pb-6'>Already Have and Acoount.. <Link  className='text-yellow-500' to={'/login'}>Login</Link>
      </p>
    </div>
        </div>
    );
};

export default Register;