import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { ColorRing } from "react-loader-spinner";


const Login = () => {
  const {logIn,user}=useContext(AuthContext)
  const [loading,setLoading]=useState(false)
const navigate=useNavigate()

  const {register,formState: { errors },handleSubmit,} = useForm()
  const onSubmit =async (data) =>{
    setLoading(true)
    const email=data.email
    const password = data.password

    try{
      const res = await logIn(email,password)
      console.log(res)
      setLoading(false)
      navigate('/')
    }
    catch(error){
      console.log(error)
      setLoading(false)

    }
   

  }

  
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
         
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input {...register('email')} type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input  {...register('password')} type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
              <button className="btn btn-secondary">{loading?<ColorRing
  visible={true}
  height="40"
  width="40"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />:'Login'}</button>
              </div>
            </form>
            <p>No Account <Link to='/registration' className="btn">Registration</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;